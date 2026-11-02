'use client';

import { useCallback, useState } from 'react';
import { Mail, Smartphone, Phone, Github, Linkedin, MessageCircle, Link as LinkIcon } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { portfolioData } from '@/data/portfolio';
import { cn } from '@/lib/cn';

const { profile, socials } = portfolioData;

const CONTACT_ITEMS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, Icon: Phone, external: false },
  { label: 'WhatsApp', value: 'Message on WhatsApp', href: profile.whatsapp, Icon: Smartphone, external: true },
  { label: 'LinkedIn', value: 'Sudipto Das', href: 'https://www.linkedin.com/in/sudipto-das-7b3a4327a/', Icon: Linkedin, external: true },
  { label: 'GitHub', value: 'sudipto224', href: 'https://github.com/sudipto224/', Icon: Github, external: true },
];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      const name = (formData.get('name') as string).trim();
      const email = (formData.get('email') as string).trim();
      const subject = (formData.get('subject') as string).trim();
      const message = (formData.get('message') as string).trim();
      const honeypot = (formData.get('hp') as string).trim();

      const errors: { name?: string; email?: string; subject?: string; message?: string } = {};
      if (!name) errors.name = 'Full name is required.';
      if (!email) errors.email = 'Email address is required.';
      else if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
      if (!subject) errors.subject = 'Subject is required.';
      if (!message) errors.message = 'Message is required.';

      setFormErrors(errors);
      if (Object.keys(errors).length > 0 || honeypot !== '') return;

      setFormStatus('submitting');

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          setFormStatus('error');
          return;
        }

        setFormStatus('success');
        form.reset();
      } catch {
        setFormStatus('error');
      }
    },
    [],
  );

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
                Interested in working together? I&rsquo;m open to internships, junior developer roles,
                freelance work, and collaborative opportunities.
              </p>
              <p className="contact-info-intro contact-info-sub">
                The best ways to reach me are listed below.
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
                    {social.label === 'GitHub' && <Github size={16} strokeWidth={1.8} className="social-item-icon" />}
                    {social.label === 'LinkedIn' && <Linkedin size={16} strokeWidth={1.8} className="social-item-icon" />}
                    {social.label === 'WhatsApp' && <Smartphone size={16} strokeWidth={1.8} className="social-item-icon" />}
                    {!['GitHub', 'LinkedIn', 'WhatsApp'].includes(social.label) && (
                      <LinkIcon size={16} strokeWidth={1.8} className="social-item-icon" />
                    )}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="contact-form">
            <Reveal className="contact-form-card" delay={0.05}>
              <h2 className="heading-md">Send me a message</h2>
              <p className="contact-info-intro">I read every message and respond as soon as I can.</p>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? 'name-error' : undefined}
                  />
                  {formErrors.name && <span id="name-error" className="form-error">{formErrors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                  />
                  {formErrors.email && <span id="email-error" className="form-error">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.subject}
                    aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                  />
                  {formErrors.subject && <span id="subject-error" className="form-error">{formErrors.subject}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  />
                  {formErrors.message && <span id="message-error" className="form-error">{formErrors.message}</span>}
                </div>
                {/* Honeypot field for basic spam protection. Hidden from users. */}
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="hp">Please leave this field empty.</label>
                  <input id="hp" name="hp" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <button
                  type="submit"
                  className="form-btn"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {formStatus === 'success' && (
                <div className="form-message form-message--success" role="status" aria-live="polite">
                  <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                  Your message has been sent successfully. I&rsquo;ll get back to you soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-message form-message--error" role="status" aria-live="polite">
                  Unable to send your message. Please try again, or email me directly at{' '}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </div>
              )}
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
            <a href={`tel:${profile.phone}`} className="contact-strip-button">
              Call {profile.phone}
            </a>
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
