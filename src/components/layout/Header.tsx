'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Services', href: '/services' },
  { label: 'Journey', href: '/journey' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-wrap">
            <Link href="/" className="brand" aria-label="Sudipto Das homepage">
              Sudipto<span className="brand-fine"> Das</span>
            </Link>
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn('nav-link', isActive ? 'nav-link-active' : '')}
                  onClick={handleMenuClose}
                >
                  {item.label}
                  <span className="nav-indicator" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>
          <div className="header-actions">
            <Link href="/contact" className="nav-cta">
              Contact <span aria-hidden="true">→</span>
            </Link>
            <button className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={handleMenuToggle}>
              {menuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <MobileNavigation items={NAV_ITEMS} pathname={pathname} onClose={handleMenuClose} />
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavigation({
  items,
  pathname,
  onClose,
}: {
  items: typeof NAV_ITEMS;
  pathname: string;
  onClose: () => void;
}) {
  return (
    <motion.aside
      className="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="mobile-menu-backdrop" onClick={onClose} />
      <div className="mobile-menu-panel">
        <div className="mobile-menu-header">
          <Link href="/" className="mobile-brand">
            Sudipto<span className="brand-fine"> Das</span>
          </Link>
          <button className="mobile-close" aria-label="Close menu" onClick={onClose}>
            <X size={22} strokeWidth={2.2} />
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {items.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn('mobile-nav-link', isActive ? 'mobile-nav-link-active' : '')}
                onClick={onClose}
              >
                {item.label}
                {isActive && <span className="mobile-nav-dot" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>
        <div className="mobile-menu-footer">
          <Link href="/contact" className="nav-cta nav-cta-mobile">
            Contact <span aria-hidden="true">→</span>
          </Link>
          <div className="mobile-socials">
            <a href="https://github.com/sudipto224/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Phone size={18} strokeWidth={2} />
            </a>
            <a href="mailto:sudiptodas8900@gmail.com" aria-label="Email">
              <Mail size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
