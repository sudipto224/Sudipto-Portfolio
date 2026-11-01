'use client';

import Link from 'next/link';
import { Github, Linkedin, Smartphone, Mail } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Services', href: '/services' },
  { label: 'Journey', href: '/journey' },
  { label: 'Contact', href: '/contact' },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/sudipto224/', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sudipto-das-7b3a4327a/', Icon: Linkedin },
  { label: 'WhatsApp', href: 'https://wa.me/8801701054096', Icon: Smartphone },
  { label: 'Email', href: 'mailto:sudiptodas8900@gmail.com', Icon: Mail },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand">
            Sudipto<span className="brand-fine"> Das</span>
          </Link>
          <p className="footer-role">Full Stack Developer &middot; Khulna, Bangladesh</p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Sudipto Das. All rights reserved.
          </p>
        </div>
        <nav className="footer-links" aria-label="Quick navigation">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-socials" aria-label="Follow me">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label === 'Email' ? undefined : '_blank'}
              rel={social.label === 'Email' ? undefined : 'noreferrer'}
              aria-label={social.label}
              className="footer-social"
            >
              <social.Icon size={18} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
