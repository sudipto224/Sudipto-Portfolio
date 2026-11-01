'use client';

import * as React from 'react';
import Link from 'next/link';
import { Reveal, Stagger } from '@/components/motion/Reveal';
import { getAllProjects, portfolioData } from '@/data/portfolio';

const { education } = portfolioData;
const projects = getAllProjects();

export default function Journey() {
  const timeline = [
    {
      label: 'Education',
      period: education[0].period,
      title: education[0].degree,
      institution: education[0].institution,
      description: education[0].description,
    },
    ...projects.map((p) => ({
      label: 'Project',
      period: p.period,
      title: p.name,
      institution: p.category,
      description: p.description,
    })),
  ];

  return (
    <>
      <section className="page-hero journey-hero">
        <div className="container">
          <Reveal className="journey-head">
            <div className="kicker"><span>05</span> My journey</div>
            <h1 className="heading-xl">Always <span className="emph">learning.</span></h1>
          </Reveal>
          <Reveal className="journey-lead" delay={0.1}>
            <p className="text-lead">
              My development journey through academic study and verified project work — driven by
              curiosity, discipline, and building real solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section journey-body">
        <div className="container">
          <div className="timeline">
            <Stagger stagger={0.1}>
              {timeline.map((item, i) => (
                <Reveal key={`${item.label}-${i}`} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <span className="timeline-label">{item.label}</span>
                    <span className="timeline-period">{item.period}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    {item.institution && <p className="timeline-school">{item.institution}</p>}
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section journey-connect">
        <div className="container">
          <Reveal className="connect-card">
            <div className="connect-copy">
              <h2 className="heading-md">Let’s build the next chapter.</h2>
              <p>Open to freelance projects and collaboration.</p>
            </div>
            <div className="connect-actions">
              <a href="/projects" className="timeline-link">View Projects</a>
              <a href="/contact" className="timeline-link timeline-link--primary">Let's Connect</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
