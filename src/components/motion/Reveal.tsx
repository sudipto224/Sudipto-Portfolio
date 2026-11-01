'use client';

import { Children, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`reveal-wrap ${className ?? ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={`stagger-wrap ${className ?? ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { staggerChildren: stagger, delayChildren: 0.1 } }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {Children.map(children, (child) => (
        <motion.div key={String(Math.random())} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
