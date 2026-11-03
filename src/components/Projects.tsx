'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getAllProjects } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, type: 'spring', stiffness: 320, damping: 30 },
  viewport: { once: true, amount: 0.15 },
};

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <div className="kicker inline-block mb-4"><span>02</span> Selected work</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Featured <span className="text-brand-400 italic">projects.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A curated selection of what I&rsquo;ve built — full-stack platforms, AI-powered tools,
              and creative web experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              {...reveal}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="col-span-1"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6 }}
          >
            <a href="https://github.com/sudipto224/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-400 hover:text-brand-300 transition-colors">
              All repositories <ExternalLink size={16} strokeWidth={2} stroke="currentColor" fill="none" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
