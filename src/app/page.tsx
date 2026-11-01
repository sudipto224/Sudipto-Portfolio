'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import { portfolioData, getFeaturedProjects } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/projects/ProjectCard';

const { profile } = portfolioData;
const featured = getFeaturedProjects();

export default function Home() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            {profile.eyebrow && (
              <Reveal className="hero-eyebrow-wrap">
                <div className="eyebrow">{profile.eyebrow}</div>
              </Reveal>
            )}
            <Reveal className="hero-name-wrap" delay={0.1}>
              <div className="hero-heading-wrap">
                <span className="name-large">{profile.name}</span>
              </div>
              <div className="hero-name-role">
                <span className="role-text">{profile.title}</span>
              </div>
            </Reveal>
            <Reveal className="hero-support-wrap" delay={0.15}>
              <p className="hero-support">Building thoughtful digital experiences.</p>
            </Reveal>
            <Reveal className="hero-intro-wrap" delay={0.2}>
              <p className="hero-intro">{profile.intro}</p>
            </Reveal>
            <Reveal className="hero-actions-wrap" delay={0.28}>
              <div className="hero-actions">
                <Button variant="primary" size="lg" href="/projects">
                  Explore Projects
                </Button>
                <Button variant="outline" size="lg" href="/about">
                  About Me
                </Button>
                <Button variant="outline" size="lg" href="/contact" className="hero-connect">
                  Contact Me
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="hero-portrait-wrap">
            <Reveal className="hero-portrait-panel" delay={0.15}>
              <div className="portrait-frame">
                <Image
                  src={profile.photo}
                  alt={`Professional portrait of ${profile.name}`}
                  width={560}
                  height={720}
                  className="portrait-image"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1023px) 100vw, 400px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-dense featured-work">
        <div className="container">
          <Reveal className="section-head">
            <div className="kicker"><span>01</span> Selected work</div>
            <h2 className="heading-lg">A few things <span className="emph">I’ve built.</span></h2>
          </Reveal>
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.12}>
              <ProjectCard
                project={project}
                variant={i === 0 ? 'featured' : 'default'}
                panel={i === 0 ? 'large' : 'default'}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-dense capabilities">
        <div className="container">
          <Reveal className="section-head text-center">
            <div className="kicker"><span>02</span> Technical capability</div>
            <h2 className="heading-lg text-center">Tools of <span className="emph">the craft.</span></h2>
          </Reveal>
          <div className="capability-grid">
            {['Full-stack applications', 'Modern frontend interfaces', 'Backend systems', 'E-commerce platforms', 'AI-assisted solutions', 'Database design'].map((cap, i) => (
              <Reveal key={cap} delay={i * 0.06} className="capability-item">
                <span className="capability-dot" aria-hidden="true" />
                {cap}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="container contact-strip-inner">
          <Reveal className="contact-strip-copy">
            <h2 className="heading-md">Ready to start something?</h2>
            <p>Let’s discuss your project and what we can build together.</p>
          </Reveal>
          <Reveal className="contact-strip-action" delay={0.1}>
            <Button variant="dark" size="lg" href="/contact">
              Let's Connect
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
