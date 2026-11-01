'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const { profile } = portfolioData;

export default function CreativeHero() {
  const shouldReduceMotion = useReducedMotion();
  const artRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const tiltX = useSpring(rawX, { stiffness: 90, damping: 24, mass: 0.65 });
  const tiltY = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.65 });

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === 'touch' || !artRef.current) return;
    const bounds = artRef.current.getBoundingClientRect();
    const nx = (event.clientX - bounds.left) / bounds.width - 0.5;
    const ny = (event.clientY - bounds.top) / bounds.height - 0.5;
    rawX.set(-ny * 7);
    rawY.set(nx * 8);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section className="creative-hero" aria-labelledby="creative-hero-title">
      <div className="container">
        <div className="creative-grid">
          <div className="creative-hero-copy">
            <motion.div
              className="creative-eyebrow"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="creative-live-dot" aria-hidden="true" />
              {profile.title}
            </motion.div>

            <h1 id="creative-hero-title">
              <motion.span
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.09 }}
              >
                Building Digital Products
              </motion.span>
              <motion.span
                className="outline-line"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2 }}
              >
                That Solve
              </motion.span>
              <motion.span
                className="accent-line"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.31 }}
              >
                Real Problems.
              </motion.span>
            </h1>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
            >
              <p className="creative-description">
                {profile.intro}
              </p>
              <div className="creative-ctas">
                <Link href="/projects" className="ui-button ui-button--primary ui-button--lg">
                  Explore Projects <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/about" className="ui-button ui-button--outline ui-button--lg">
                  About Me <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/contact" className="ui-button ui-button--outline ui-button--lg">
                  Contact Me <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                {profile.cv && (
                  <a
                    href={profile.cv}
                    download
                    className="ui-button ui-button--outline ui-button--lg"
                  >
                    Download CV <Download size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          <div
            ref={artRef}
            className="creative-art"
            onPointerMove={onPointerMove}
            onPointerLeave={reset}
            aria-label="Professional portrait of Sudipto Das"
          >
            <motion.div
              className="creative-art-stage"
              style={shouldReduceMotion ? undefined : { rotateX: tiltX, rotateY: tiltY }}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="creative-light" aria-hidden="true" />
              <div className="creative-orbit" aria-hidden="true" />
              <div className="creative-orbit orbit-two" aria-hidden="true" />
              <div className="creative-orbit orbit-three" aria-hidden="true" />
              <div className="creative-portrait-shell">
                <Image
                  src={profile.photo}
                  alt={'Professional portrait of ' + profile.name}
                  fill
                  sizes="(max-width: 900px) 80vw, (max-width: 1200px) 36vw, 420px"
                  className="creative-portrait-image"
                  priority
                />
              </div>
            </motion.div>

            <div className="creative-identity">
              <div className="creative-identity-badge">{profile.availability}</div>
              <h2 className="creative-identity-name">{profile.name}</h2>
              <p className="creative-identity-title">{profile.title}</p>
              <p className="creative-identity-location">
                {profile.location} · Hometown: {profile.hometown}
              </p>
            </div>
          </div>
        </div>

        <div className="creative-rail">
          <span>01 / Introduction</span>
          <Link href="/projects">
            Selected projects <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <a href="https://github.com/sudipto224" target="_blank" rel="noopener noreferrer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8m0 0L9.6 10.9m-1.6 3.2c-1.5 1.5-4 1.5-6 0m15 1.5c0 1.7-1 3-3 3m-3 0c-1.7 0-3-1-3-3m0 0c0-1.7 1-3 3-3m3 3c0 1.7 1 3 3 3" />
            </svg>
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
