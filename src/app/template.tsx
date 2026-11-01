'use client';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  return (
    <motion.div
      key={pathname}
      className="route-motion"
      initial={reduce ? false : { opacity: 0, y: 14, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: reduce ? 0 : .43, ease: [.22,.76,.28,1] }}
    >
      {children}
    </motion.div>
  );
}
