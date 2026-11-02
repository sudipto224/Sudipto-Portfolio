'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize, Search } from 'lucide-react';
import { cn } from '@/lib/cn';

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

type ProjectScreenshotGalleryProps = {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  featuredIndex?: number;
  className?: string;
};

export function ProjectScreenshotGallery({
  images,
  title,
  subtitle,
  featuredIndex = 0,
  className,
}: ProjectScreenshotGalleryProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(featuredIndex);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const displayImages = useMemo(() => images, [images]);

  const handleOpen = useCallback((index: number) => {
    setCurrent(index);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    },
    [open, handleClose, handleNext, handlePrev]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  const isFeatured = (index: number) => index === featuredIndex;

  return (
    <section
      ref={containerRef}
      className={cn('screenshot-gallery', className)}
    >
      {title && (
        <div className="gallery-head">
          <div className="gallery-kicker">{title}</div>
          {subtitle && <p className="gallery-lead">{subtitle}</p>}
        </div>
      )}

      <div className="gallery-grid">
        {displayImages.map((image, index) => {
          const featured = isFeatured(index);
          return (
            <div
              key={image.src}
              className={cn(
                'gallery-item',
                featured && 'gallery-item--featured',
                'group',
              )}
              onClick={() => handleOpen(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen(index);
                }
              }}
              aria-label={`View ${image.alt} in full size`}
            >
              <div className="gallery-visual">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={featured ? 600 : 360}
                  height={featured ? 720 : 320}
                  className={cn(
                    'gallery-image',
                    featured && 'gallery-image--featured',
                  )}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  sizes={featured
                    ? '(max-width: 640px) 100vw, (max-width: 1023px) 80vw, 560px'
                    : '(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 360px'}
                  quality={100}
                />
                <div className="gallery-overlay">
                  <Maximize size={18} strokeWidth={2} aria-hidden="true" />
                  <span className="gallery-overlay-label">Enlarge</span>
                </div>
                {image.label && (
                  <div className="gallery-label">{image.label}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              initial={{ scale: shouldReduceMotion ? 1 : 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: 'spring', stiffness: 300, damping: 30 },
              }}
              exit={{
                scale: shouldReduceMotion ? 1 : 0.9,
                opacity: 0,
              }}
              className="lightbox"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={handleClose}
                aria-label="Close preview"
              >
                <X size={22} strokeWidth={2} aria-hidden="true" />
              </button>
              <div className="lightbox-image-wrap">
                <Image
                  src={displayImages[current]?.src || ''}
                  alt={displayImages[current]?.alt || ''}
                  width={1000}
                  height={1000}
                  className="lightbox-image"
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 92vw, (max-width: 1023px) 70vw, 880px"
                />
              </div>
              <div className="lightbox-nav">
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-btn--prev"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  disabled={displayImages.length <= 1}
                >
                  <ChevronLeft size={24} strokeWidth={2} aria-hidden="true" />
                </button>
                <span className="lightbox-counter">
                  {current + 1} / {displayImages.length}
                </span>
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-btn--next"
                  onClick={handleNext}
                  aria-label="Next image"
                  disabled={displayImages.length <= 1}
                >
                  <ChevronRight size={24} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
              <div className="lightbox-caption">
                <p>{displayImages[current]?.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
