'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';

const { profile, education } = portfolioData;

export default function About() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="container">
          <Reveal className="about-head">
            <div className="kicker"><span>01</span> About me</div>
            <h1 className="heading-xl">The person <span className="emph">behind the code.</span></h1>
          </Reveal>
          <Reveal className="about-lead" delay={0.1}>
            <p className="text-lead">
              I’m Sudipto Das, a full stack developer based in Khulna, Bangladesh. I design and
              develop thoughtful digital products — from elegant interfaces to powerful backend
              systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-body">
        <div className="container about-grid">
          <div className="about-profile">
            <Reveal className="about-portrait-wrap">
              <div className="portrait-card">
                <Image
                  src={profile.photo}
                  alt={`Professional portrait of ${profile.name}`}
                  width={460}
                  height={580}
                  className="about-portrait"
                  priority
                />
                <div className="portrait-label">
                  <span>{profile.name}</span>
                  <span>{profile.title}</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="about-details" delay={0.1}>
              <h3 className="details-title">Personal details</h3>
              <dl className="details-list">
                <div className="details-item">
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div className="details-item">
                  <dt>Availability</dt>
                  <dd>{profile.availability}</dd>
                </div>
                <div className="details-item">
                  <dt>Focus</dt>
                  <dd>Full-stack development and AI-assisted tools</dd>
                </div>
                <div className="details-item">
                  <dt>Education</dt>
                  <dd>{education[0].degree}</dd>
                </div>
                <div className="details-item">
                  <dt>Institution</dt>
                  <dd>{education[0].institution}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <div className="about-copy">
            <Reveal className="about-text" delay={0.05}>
              <h2 className="heading-md">My development philosophy</h2>
              <p>{profile.about}</p>
              <p className="mt">
                I enjoy the full arc of building a product: understanding the problem, designing the
                interface, shaping the data model, and shipping working code. I approach every
                project with curiosity, discipline, and a focus on real-world usefulness.
              </p>
            </Reveal>
            <Reveal className="about-interests" delay={0.15}>
              <h2 className="heading-md">Technical interests</h2>
              <p className="sub">Full-stack applications · Modern frontend interfaces · Backend systems · E-commerce · Database design and integration · AI-assisted solutions · Learning and problem-solving</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-connect">
        <div className="container">
          <Reveal className="connect-card">
            <div className="connect-copy">
              <h2 className="heading-md">Let’s look at the work.</h2>
              <p>Explore selected projects, or get in touch directly.</p>
            </div>
            <div className="connect-actions">
              <Button variant="primary" href="/projects">View Projects</Button>
              <Button variant="outline" href="/contact">Let's Connect</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
