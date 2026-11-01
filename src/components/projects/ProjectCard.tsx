'use client';

import { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
  variant?: 'default' | 'featured';
  className?: string;
};

export function ProjectCard({ project, variant = 'default', className }: ProjectCardProps) {
  const isFeatured = variant === 'featured';
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (event: React.MouseEvent) => {
      if (shouldReduceMotion || !cardRef.current) return;
      const bounds = cardRef.current.getBoundingClientRect();
      const nx = (event.clientX - bounds.left) / bounds.width - 0.5;
      const ny = (event.clientY - bounds.top) / bounds.height - 0.5;
      const rotateX = -ny * 6;
      const rotateY = nx * 6;
      (cardRef.current as HTMLElement).style.setProperty('--tilt-x', `${rotateX}deg`);
      (cardRef.current as HTMLElement).style.setProperty('--tilt-y', `${rotateY}deg`);
    },
    [shouldReduceMotion],
  );

  const handlePointerLeave = useCallback(() => {
    if (!cardRef.current) return;
    (cardRef.current as HTMLElement).style.setProperty('--tilt-x', '0deg');
    (cardRef.current as HTMLElement).style.setProperty('--tilt-y', '0deg');
  }, []);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-link"
      aria-label={`View case study: ${project.name}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
        className={cn(
          'project-card',
          isFeatured ? 'project-card--featured' : 'project-card--default',
          className,
          'tilt-card',
        )}
        style={{
          transform: shouldReduceMotion
            ? undefined
            : `perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))`,
        }}
      >
        <div className="project-visual-wrap">
          <div className="project-depth-layer" aria-hidden="true" />
          <div className="project-browser">
            <div className="project-browser-bar">
              <div className="project-dots">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
              <div className="project-address">
                {project.github?.replace('https://', '')} · {project.name}
              </div>
            </div>
            <div className="project-viewport">
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                width={isFeatured ? 900 : 560}
                height={isFeatured ? 720 : 420}
                className="project-image"
                priority={isFeatured}
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 100vw, 33vw"
              />
            </div>
          </div>
          <span className="project-index">{project.category}</span>
        </div>
        <div className="project-body">
          <h3 className="project-title">{project.name}</h3>
          <p className="project-excerpt">{project.description}</p>
          <div className="project-tech">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
          <div className="project-footer">
            <span className="project-arrow">
              View case study<ArrowUpRight size={15} strokeWidth={2} />
            </span>
            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn--github"
                  aria-label={`GitHub source for ${project.name}`}
                >
                  <Github size={16} strokeWidth={2} aria-hidden="true" />
                  Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn--live"
                  aria-label={`Live demo for ${project.name}`}
                >
                  Live demo<ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
