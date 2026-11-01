'use client';

import * as React from 'react';
import Link from 'next/link';
import { Code2, ShoppingCart, Database, Bot, ArrowRight } from 'lucide-react';
import { Reveal, Stagger } from '@/components/motion/Reveal';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';

const { services } = portfolioData;

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'Full Stack Web Development': Code2,
  'E-commerce Website Development': ShoppingCart,
  'Backend API & Database Development': Database,
  'AI Integration & Web Applications': Bot,
};

export default function Services() {
  return (
    <>
      <section className="page-hero services-hero">
        <div className="container">
          <Reveal className="services-head">
            <div className="kicker"><span>04</span> What I can build</div>
            <h1 className="heading-xl">Services <span className="emph">I offer.</span></h1>
          </Reveal>
          <Reveal className="services-lead" delay={0.1}>
            <p className="text-lead">
              I work across the full stack — from interface design to backend architecture. Each
              service below is something I can deliver for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section services-body">
        <div className="container">
          <Stagger className="services-grid" stagger={0.08}>
            {services.map((service) => {
              const Comp = SERVICE_ICONS[service.title] || Code2;
              return (
                <Reveal key={service.title} className="service-card-wrap">
                  <div className="service-card">
                    <div className="service-icon">
                      <Comp size={22} strokeWidth={1.8} />
                    </div>
                    <span className="service-number">{services.indexOf(service) + 1}</span>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.description}</p>
                    <div className="service-tech">
                      {service.tech.map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                      ))}
                    </div>
                    <Link href="/contact" className="service-link">
                      Discuss this service<ArrowRight size={15} strokeWidth={2} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="container contact-strip-inner">
          <Reveal className="contact-strip-copy">
            <h2 className="heading-md">Have a project in mind?</h2>
            <p>Let’s connect and discuss what we can build together.</p>
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
