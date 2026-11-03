'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Project } from '@/data/portfolio';

type ProjectCardProps = { project: Project };

const TECH_COLORS: Record<string, string> = {
  'Next.js': 'bg-white/5 border-white/10 text-white',
  'React': 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  'TypeScript': 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  'Tailwind CSS': 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  'Node.js': 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  'Express.js': 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  'MongoDB': 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  'Mongoose': 'bg-teal-500/10 border-teal-500/30 text-teal-400',
  'Laravel': 'bg-rose-500/10 border-rose-500/30 text-rose-400',
  'PHP': 'bg-violet-500/10 border-violet-500/30 text-violet-400',
  'MySQL': 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  'PostgreSQL': 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
  'Supabase': 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  'Groq AI': 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  'Inertia.js': 'bg-rose-500/10 border-rose-500/30 text-rose-400',
  'JavaScript': 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  'Vite': 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
};

const techClass = (t: string) =>
  cn('px-3 py-1.5 rounded-full border text-[10px] font-medium uppercase tracking-wider transition-colors', TECH_COLORS[t] || 'bg-white/5 border-white/10 text-gray-300');

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass-strong transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="w-full h-56 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 z-10 px-3 py-1 rounded-full border border-white/20 bg-black/60 text-[10px] font-bold tracking-wider text-brand-400 uppercase">
          {project.category}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 pt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 6).map((t) => (
            <span key={t} className={techClass(t)}>
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-6">{project.description}</p>
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400 hover:text-brand-300 transition-colors"
          >
            Live Demo <ArrowRight size={15} strokeWidth={2} stroke="currentColor" fill="none" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-brand-400 transition-colors"
          >
            <Github size={15} strokeWidth={2} stroke="currentColor" fill="none" /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
