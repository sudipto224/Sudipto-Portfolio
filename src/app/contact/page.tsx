'use client';

import { Reveal } from '@/components/motion/Reveal';
import { Mail, Smartphone, MapPin, Globe, Link as LinkIcon } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { cn } from '@/lib/cn';

const { profile, socials } = portfolioData;

const CONTACT_ITEMS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: 'WhatsApp', value: 'Message on WhatsApp', href: profile.whatsapp, Icon: Smartphone, external: true },
  { label: 'Location', value: profile.location, href: '#', Icon: MapPin, external: false },
];

export default function Contact() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container">
          <Reveal className="contact-head">
            <div className="kicker"><span>06</span> Let's connect</div>
            <h1 className="heading-xl">Let's create <span className="emph">something remarkable.</span></h1>
          </Reveal>
          <Reveal className="contact-lead" delay={0.1}>
            <p className="text-lead">
              Have a project in mind or an opportunity to collaborate? Let's connect and discuss
              what we can build.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container contact-grid">
          <div className="contact-info">
            <Reveal className="contact-info-card">
              <h2 className="heading-md">Get in touch</h2>
              <p className="contact-info-intro">
                The best ways to reach me. All links open directly to the relevant profile or app.
              </p>
              <div className="contact-list">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-item-icon">
                      <item.Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div className="contact-item-copy">
                      <span className="contact-item-label">{item.label}</span>
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noreferrer' : undefined}
                        className={cn('contact-item-value', item.external ? 'contact-item-value--external' : '')}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="contact-social">
            <Reveal className="contact-social-card" delay={0.05}>
              <h2 className="heading-md">Social profiles</h2>
              <p className="contact-social-intro">Say hello on any of the platforms below.</p>
              <div className="social-list">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-item"
                  >
                    <span className="social-item-label">{social.label}</span>
                    <LinkIcon size={16} strokeWidth={1.8} className="social-item-icon" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="container contact-strip-inner">
          <Reveal className="contact-strip-copy">
            <h2 className="heading-md">Ready to talk?</h2>
            <p>Send an email or message me on WhatsApp to get started.</p>
          </Reveal>
          <div className="contact-strip-actions">
            <a href={`mailto:${profile.email}`} className="contact-strip-button">
              Email me
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="contact-strip-button contact-strip-button--outline">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
