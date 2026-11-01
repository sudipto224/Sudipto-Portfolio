'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CreativeHero from '@/components/home/CreativeHero';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/portfolio';

const projects = getFeaturedProjects();
const capabilities = ['Full-stack applications', 'Interactive frontend engineering', 'API & backend development', 'E-commerce & booking', 'AI-powered tools', 'Database integration'];

export default function Home() {
  return (
    <>
      <CreativeHero />
      <section className="creative-work" aria-labelledby="selected-work-heading">
        <div className="container">
          <div className="creative-section-heading">
            <div>
              <div className="kicker">02 / SELECTED WORK</div>
              <h2 id="selected-work-heading">Ideas turned into <span className="emph">real products.</span></h2>
            </div>
            <p>A selection of web applications built with thoughtful engineering and a commitment to meaningful experiences.</p>
          </div>
          <div className="creative-work-grid">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .6, delay: i * .09 }}
              >
                <ProjectCard project={project} variant={i === 0 ? 'featured' : 'default'} />
              </motion.div>
            ))}
          </div>
          <Link className="creative-more" href="/projects">
            View every project <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="creative-about" aria-labelledby="creative-about-title">
        <div className="container">
          <div className="creative-about-grid">
            <div>
              <span className="creative-about-eyebrow">03 / BEYOND THE SCREEN</span>
              <h2 id="creative-about-title">Good code.<br /><span className="emph">Better ideas.</span></h2>
            </div>
            <div>
              <p className="creative-about-copy">
                I'm Sudipto Das, a Full Stack Developer who enjoys connecting memorable
                interfaces with dependable technology. From an e-commerce storefront
                to AI-powered learning tools, I love making digital products feel intuitive.
              </p>
              <Link href="/about">More about me <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="creative-capabilities">
            {capabilities.map((item) => <div key={item} className="creative-capability">{item}</div>)}
          </div>
        </div>
      </section>
      <section className="creative-contact" aria-labelledby="creative-contact-title">
        <div className="container">
          <div className="creative-about-eyebrow">04 / START A CONVERSATION</div>
          <h2 id="creative-contact-title">Have an idea?<br /><span>Let's make it real.</span></h2>
          <p>Have a project, an interesting challenge, or an opportunity to collaborate? I'd love to hear from you.</p>
          <Link href="/contact" className="ui-button ui-button--primary ui-button--lg">
            Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
