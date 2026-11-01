'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand">
            Sudipto<span className="brand-fine"> Das</span>
          </Link>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Sudipto Das. Built with care in Khulna, Bangladesh.
        </p>
        <Link href="/" className="footer-top">
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </div>
    </footer>
  );
}
