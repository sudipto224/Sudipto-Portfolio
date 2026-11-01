'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
  variant?: 'default' | 'featured';
  panel?: 'large' | 'default';
  className?: string;
};

export function ProjectCard({ project, variant = 'default', panel = 'default', className }: ProjectCardProps) {
  const isFeatured = variant === 'featured';
  const isLarge = panel === 'large';
  return (
    <Link href={`/projects/${project.slug}`} className="project-link">
      <motion.div
        whileHover={{ y: -6 }}
        className={cn(
          'project-card',
          isFeatured ? 'project-card--featured' : 'project-card--default',
          className,
        )}
        style={isLarge ? { gridColumn: '1 / 3', gridRow: '1 / 3' } : undefined}
      >
        <div className="project-visual-wrap">
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
                width={isLarge ? 900 : 560}
                height={isLarge ? 720 : 420}
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
          <span className="project-arrow">
            View case study<ArrowUpRight size={15} strokeWidth={2} />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
