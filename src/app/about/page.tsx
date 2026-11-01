'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { X, FileText, Download, Link as LinkIcon } from 'lucide-react';import { portfolioData } from '@/data/portfolio';

const { profile, education } = portfolioData;

export default function About() {
  const [certOpen, setCertOpen] = useState(false);

  const openCert = useCallback(() => setCertOpen(true), []);
  const closeCert = useCallback(() => setCertOpen(false), []);

  return (
    <>
      <section className="page-hero about-hero">
        <div className="container">
          <Reveal className="about-head">
            <div className="kicker"><span>01</span> About me</div>
            <h1 className="heading-xl">{profile.name} <span className="emph">{profile.title}.</span></h1>
          </Reveal>
          <Reveal className="about-lead" delay={0.1}>
            <p className="text-lead">{profile.intro}</p>
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
              </div>
            </Reveal>
            <Reveal className="about-details" delay={0.1}>
              <h3 className="details-title">Profile</h3>
              <dl className="details-list">
                <div className="details-item">
                  <dt>Name</dt>
                  <dd>{profile.name}</dd>
                </div>
                <div className="details-item">
                  <dt>Role</dt>
                  <dd>{profile.title}</dd>
                </div>
                <div className="details-item">
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div className="details-item">
                  <dt>Hometown</dt>
                  <dd>{profile.hometown}</dd>
                </div>
                <div className="details-item">
                  <dt>Phone</dt>
                  <dd>{profile.phone}</dd>
                </div>
                <div className="details-item">
                  <dt>Email</dt>
                  <dd>{profile.email}</dd>
                </div>
                <div className="details-item">
                  <dt>Availability</dt>
                  <dd>{profile.availability}</dd>
                </div>
              </dl>
              <div className="education-list">
                <h3 className="education-title">Education</h3>
                {education.map((edu) => (
                  <div key={edu.degree} className="education-item">
                    <div className="education-head">
                      <span className="education-degree">{edu.degree}</span>
                      <span className="education-period">{edu.period}</span>
                    </div>
                    <span className="education-institution">{edu.institution}</span>
                    <p className="education-desc">{edu.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="about-copy">
            <Reveal className="about-text" delay={0.05}>
              <h2 className="heading-md">My development philosophy</h2>
              <p>{profile.about}</p>
              <p className="mt">
                I enjoy the full arc of building a product: understanding the problem, designing the
                interface, shaping the data model, and shipping working code. I approach every project
                with curiosity, discipline, and a focus on real-world usefulness.
              </p>
            </Reveal>
            <Reveal className="about-interests" delay={0.15}>
              <h2 className="heading-md">Development interests</h2>
              <p className="sub">{profile.interests.join(' · ')}</p>
            </Reveal>
            <Reveal className="about-strengths" delay={0.2}>
              <h2 className="heading-md">Technical strengths</h2>
              <p className="sub">{profile.strengths.join(' · ')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-body">
        <div className="container">
          <Reveal className="about-head">
            <div className="kicker"><span>02</span> Professional training</div>
            <h2 className="heading-lg">Professional Training &amp; Certification</h2>
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <div className="about-grid" style={{ gridTemplateColumns: '1fr 1.4fr' }}>
              <div className="about-profile">
                <div className="cert-card">
                  <div className="cert-visual" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCert(); } }} onClick={openCert} aria-label="Open Laravel training certificate preview">
                    <Image
                      src={profile.certification.image}
                      alt={`${profile.certification.title} certificate from ${profile.certification.organization}`}
                      width={600}
                      height={400}
                      className="cert-image"
                      priority
                      unoptimized
                    />
                    <div className="cert-overlay" aria-hidden="true">
                      <FileText size={20} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="cert-body">
                    <h3>{profile.certification.title}</h3>
                    <p>
                      Completed a one-month industrial training program in Laravel at
                      {profile.certification.organization}, {profile.certification.location}.
                    </p>
                    <div className="cert-meta">
                      <span>{profile.certification.organization}</span>
                      <span>{profile.certification.duration}</span>
                      <span>Completed</span>
                    </div>
                    <div className="cert-actions">
                      <Button variant="outline" onClick={openCert}>
                        View certificate <Download size={16} strokeWidth={2} aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-copy">
                <h2 className="heading-md">About this training</h2>
                <p>
                  The Laravel 1-Month Industrial Training Program at Appstick covered PHP backend
                  development, the Laravel framework, routing, controllers, Eloquent ORM, database
                  migrations, and REST API development. It strengthened my practical understanding of
                  server-side engineering and how it connects with modern frontend applications.
                </p>
                <p className="mt">
                  The certificate is displayed above. Select it to view a larger preview.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-body">
        <div className="container">
          <Reveal className="about-head">
            <div className="kicker"><span>03</span> Why work with me</div>
            <h2 className="heading-lg">Why Work With Me</h2>
          </Reveal>
          <Reveal className="why-grid" delay={0.1}>
            <div className="why-item">
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h4>Full-stack capability</h4>
              <p>I work across the entire stack — from responsive interfaces to backend systems and databases — so a product can be built end-to-end.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h4>Problem-solving approach</h4>
              <p>I start with the problem, then shape the data model, design the interface, and ship working code focused on real-world usefulness.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h4>Clean, maintainable code</h4>
              <p>I value readable, well-structured code, responsive design, and continuous learning so products stay reliable as they grow.</p>
            </div>
          </Reveal>
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
              {profile.cv && (
                <a href={profile.cv} download className="ui-button ui-button--outline connect-cv">
                  Download CV <Download size={16} strokeWidth={2} aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {certOpen && (
        <div className="cert-modal-overlay" onClick={closeCert} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeCert} aria-label="Close certificate preview">
              <X size={22} strokeWidth={2.2} />
            </button>
            <div className="cert-modal-image">
              <Image
                src={profile.certification.image}
                alt={`${profile.certification.title} certificate from ${profile.certification.organization}`}
                width={800}
                height={600}
                className="cert-modal-image-img"
                priority
                unoptimized
              />
            </div>
            <div className="cert-modal-info">
              <h2 id="cert-modal-title">{profile.certification.title}</h2>
              <p><strong>Organization:</strong> {profile.certification.organization}</p>
              <p><strong>Duration:</strong> {profile.certification.duration}</p>
              <p><strong>Location:</strong> {profile.certification.location}</p>
              <p>Press Escape or click outside to close.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
