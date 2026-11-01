'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Project } from '@/data/portfolio';

export function ProjectCard({ project, variant = 'default' }: { project: Project; variant?: 'default' | 'featured' }) {
  const isFeatured = variant === 'featured';
  return (
    <Link href={`/projects/${project.slug}`} className="project-link">
      <motion.div
        whileHover={{ y: -6 }}
        className={cn(
          'project-card',
          isFeatured ? 'project-card--featured' : 'project-card--default',
        )}
      >
        <div className="project-visual-wrap">
          <Image
            src={project.image}
            alt={`${project.name} illustration`}
            width={isFeatured ? 700 : 420}
            height={isFeatured ? 520 : 320}
            className="project-image"
            priority={isFeatured}
          />
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
