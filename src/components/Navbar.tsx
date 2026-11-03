'use client';

import { useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { Menu, X, Mail, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const NAV_ITEMS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const { profile } = portfolioData;

export default function Navbar() {
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (!href || href === '#' || href === '#top') {
      lenis?.scrollTo(0, { offset: -60 });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      lenis?.scrollTo(el as HTMLElement, { offset: -70 });
    }
  };

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/[0.03] border-b border-white/[0.05]"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <span className="brand">Sudipto</span>
              <span className="brand-fine"> Das</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="transition-colors hover:text-white"
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href={profile.cv}
                download
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/[0.1] hover:bg-white/5 hover:text-white hover:border-white/30 transition-all"
              >
                Resume
              </a>
              <button
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-white hover:bg-white/5 transition-colors"
                onClick={() => setMenuOpen((p) => !p)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 z-[60] flex"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
              <div className="relative w-full max-w-xs mx-auto p-6 bg-white/[0.04] border border-white/[0.06] backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white">
                <X size={22} strokeWidth={2.2} />
              </button>
            </div>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="block px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:sudiptodas8900@gmail.com"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                className="block mt-6 px-4 py-3 text-xs font-bold tracking-widest uppercase text-brand-400 border border-brand-400/30 rounded-lg hover:bg-brand-400/10 transition-colors text-center"
              >
                Get in touch →
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
}
