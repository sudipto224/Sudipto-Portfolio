'use client';

import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="page-hero not-found-hero">
      <div className="container">
        <Reveal className="not-found-copy">
          <h1 className="heading-xl">404<span className="emph"> — Not found.</span></h1>
          <p className="text-lead">The page you’re looking for doesn’t exist.</p>
          <Button variant="outline" size="lg" href="/">
            Back to homepage
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
