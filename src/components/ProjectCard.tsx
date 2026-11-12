'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Project } from '@/data/portfolio';

type ProjectCardProps = { project: Project };

const chipClass = () =>
  cn(
    'px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium uppercase tracking-wider text-cyan-400 transition-colors hover:bg-white/10',
  );

const liveBtnClass = () =>
  cn(
    'flex-1 h-10 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors',
    'bg-cyan-500 text-[#050505] hover:bg-cyan-400',
  );

const githubBtnClass = () =>
  cn(
    'flex-1 h-10 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors',
    'bg-transparent border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:bg-white/5',
  );

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass-strong flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)]"
    >
      <div className="relative w-full">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="w-full h-auto rounded-t-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 z-10 px-3 py-1 rounded-full border border-white/20 bg-black/60 text-[10px] font-bold tracking-wider text-brand-400 uppercase">
          {project.category}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 pt-4 flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 6).map((t) => (
            <span key={t} className={chipClass()}>{t}</span>
          ))}
        </div>
        <div className="border-t border-slate-800 mt-4 pt-4 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={liveBtnClass()}
            >
              Live Demo <ArrowRight size={14} strokeWidth={2} stroke="currentColor" fill="none" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className={githubBtnClass()}
            >
              <Github size={14} strokeWidth={2} stroke="currentColor" fill="none" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
