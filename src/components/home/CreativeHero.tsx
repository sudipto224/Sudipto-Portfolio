'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const { profile } = portfolioData;

export default function CreativeHero() {
  const shouldReduceMotion = useReducedMotion();
  const artRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const tiltX = useSpring(rawX, { stiffness: 90, damping: 24, mass: 0.65 });
  const tiltY = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.65 });

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === 'touch' || !artRef.current) return;
    const bounds = artRef.current.getBoundingClientRect();
    const nx = (event.clientX - bounds.left) / bounds.width - 0.5;
    const ny = (event.clientY - bounds.top) / bounds.height - 0.5;
    rawX.set(-ny * 9);
    rawY.set(nx * 10);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section className="creative-hero" aria-labelledby="creative-hero-title">
      <div className="container">
        <div className="creative-grid">
          <div className="creative-hero-copy">
            <motion.div
              className="creative-eyebrow"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="creative-live-dot" aria-hidden="true" />
              Independent Full Stack Developer
            </motion.div>

            <h1 id="creative-hero-title">
              <motion.span
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.09 }}
              >
                Code that
              </motion.span>
              <motion.span
                className="outline-line"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2 }}
              >
                feels
              </motion.span>
              <motion.span
                className="accent-line"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.31 }}
              >
                alive.
              </motion.span>
            </h1>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              <div className="creative-name">
                {profile.name} <span aria-hidden="true">/</span> {profile.title}
              </div>
              <p className="creative-description">
                I build considered digital experiences — from expressive interfaces
                to reliable full-stack applications. Thoughtful design meets working code.
              </p>
              <div className="creative-ctas">
                <Link href="/projects" className="ui-button ui-button--primary ui-button--lg">
                  Explore my work <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/about" className="ui-button ui-button--outline ui-button--lg">
                  About me <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <div className="creative-smallprint">
                Available for freelance work and collaborations
              </div>
            </motion.div>
          </div>

          <div
            ref={artRef}
            className="creative-art"
            onPointerMove={onPointerMove}
            onPointerLeave={reset}
            aria-label="Interactive layered portrait of Sudipto Das"
          >
            <motion.div
              className="creative-art-stage"
              style={shouldReduceMotion ? undefined : { rotateX: tiltX, rotateY: tiltY }}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="creative-light" aria-hidden="true" />
              <div className="creative-orbit" aria-hidden="true" />
              <div className="creative-orbit orbit-two" aria-hidden="true" />
              <div className="creative-orbit orbit-three" aria-hidden="true" />
              <div className="creative-spark" aria-hidden="true" />
              <div className="creative-portrait-shell">
                <Image
                  src={profile.photo}
                  alt={'Professional portrait of ' + profile.name}
                  fill
                  sizes="(max-width: 900px) 80vw, (max-width: 1200px) 36vw, 420px"
                  className="creative-portrait-image"
                  priority
                />
              </div>
              <div className="creative-floating-chip creative-chip-top">
                <Sparkles size={16} aria-hidden="true" />
                <strong>Full Stack</strong>
                <small>Creative engineering</small>
              </div>
              <div className="creative-floating-chip creative-chip-bottom">
                <strong>Design × Code</strong>
                <small>Built with intention</small>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="creative-rail">
          <span>01 / Introduction</span>
          <Link href="/projects">
            Selected projects <ArrowDownRight size={16} aria-hidden="true" />
          </Link>
          <a href="https://github.com/sudipto224" target="_blank" rel="noopener noreferrer">
            <Github size={16} aria-hidden="true" /> Github
          </a>
        </div>
      </div>
    </section>
  );
}
