'use client';

import * as React from 'react';
import Link from 'next/link';
import { Reveal, Stagger } from '@/components/motion/Reveal';
import { getAllProjects } from '@/data/portfolio';
import { ProjectCard } from '@/components/projects/ProjectCard';

export default function Projects() {
  const projects = getAllProjects();
  return (
    <>
      <section className="page-hero projects-hero">
        <div className="container">
          <Reveal className="projects-head">
            <div className="kicker"><span>02</span> Selected work</div>
            <h1 className="heading-xl">Featured <span className="emph">projects.</span></h1>
          </Reveal>
          <Reveal className="projects-lead" delay={0.1}>
            <p className="text-lead">
              A curated selection of what I’ve built — full-stack platforms, AI-powered tools, and
              creative web experiences. Each links to its own case study.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section projects-gallery">
        <div className="container">
          <Stagger className="gallery-grid" stagger={0.1}>
            {projects.map((project) => (
              <React.Fragment key={project.slug}>
                <ProjectCard project={project} variant="default" />
              </React.Fragment>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
