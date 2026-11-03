'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiInertia,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiMongoose,
} from 'react-icons/si';

type Skill = { label: string; brand: string; Icon: React.ElementType };

type Branch = {
  id: string;
  label: string;
  skills: Skill[];
};

const BRANCHES: Branch[] = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    skills: [
      { label: 'React', brand: '#61DAFB', Icon: SiReact },
      { label: 'Next.js', brand: '#000000', Icon: SiNextdotjs },
      { label: 'Inertia.js', brand: '#FDE047', Icon: SiInertia },
      { label: 'JavaScript', brand: '#F7DF1E', Icon: SiJavascript },
      { label: 'TypeScript', brand: '#3178C6', Icon: SiTypescript },
      { label: 'Tailwind CSS', brand: '#06B6D4', Icon: SiTailwindcss },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    skills: [
      { label: 'Node.js', brand: '#339933', Icon: SiNodedotjs },
      { label: 'Express.js', brand: '#FFFFFF', Icon: SiExpress },
      { label: 'Laravel', brand: '#FF2D20', Icon: SiLaravel },
      { label: 'PHP', brand: '#777BB3', Icon: SiPhp },
    ],
  },
  {
    id: 'database',
    label: 'DATABASE',
    skills: [
      { label: 'PostgreSQL', brand: '#4169E1', Icon: SiPostgresql },
      { label: 'MySQL', brand: '#00758F', Icon: SiMysql },
      { label: 'Supabase', brand: '#3ECF8E', Icon: SiSupabase },
      { label: 'Mongoose', brand: '#6366F1', Icon: SiMongoose },
    ],
  },
];

const CARD_REVEAL = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 340, damping: 30 },
} as const;

type Pos = { x: number; y: number; w: number; h: number };

type FlowPath = {
  id: string;
  d: string;
  delay: number;
};

const curve = (sx: number, sy: number, ex: number, ey: number, bend: number): string => {
  const mx = Math.round(((sx + ex) / 2) * 10) / 10;
  const my = Math.round((Math.max(sy, ey) + bend) * 10) / 10;
  return `M ${Math.round(sx * 10) / 10} ${Math.round(sy * 10) / 10} Q ${mx} ${my} ${Math.round(ex * 10) / 10} ${Math.round(ey * 10) / 10}`;
};

function CategoryBadge({ label, refId }: { label: string; refId: string }) {
  return (
    <motion.div
      ref={registerRef(refId)}
      {...CARD_REVEAL}
      className="rounded-xl bg-black/80 border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-cyan-300 px-8 py-3 font-bold text-xl text-center tracking-widest"
    >
      {label}
    </motion.div>
  );
}

function SkillCard({ item, brand, Icon, delay, refId }: { item: string; brand: string; Icon: React.ElementType; delay: number; refId: string }) {
  return (
    <motion.div
      ref={registerRef(refId)}
      {...CARD_REVEAL}
      transition={{ duration: 0.6, delay }}
      className="aspect-square rounded-2xl bg-slate-900/80 border border-white/10 p-4 flex flex-col items-center justify-center hover:scale-105 hover:border-cyan-400 transition-all duration-300 shadow-lg"
    >
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 border border-white/20 bg-white/5">
        <Icon color={brand} className="w-14 h-14" />
      </div>
      <span className="text-lg font-bold text-white text-center leading-tight">{item}</span>
    </motion.div>
  );
}

let registerRef: (id: string) => (el: HTMLElement | null) => void;

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<Map<string, HTMLElement>>(new Map());
  const [paths, setPaths] = useState<FlowPath[]>([]);

  registerRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) refs.current.set(id, el);
      else refs.current.delete(id);
    },
    []
  );

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cr = container.getBoundingClientRect();
    const getPos = (id: string): Pos | null => {
      const el = refs.current.get(id);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left - cr.left, y: r.top - cr.top, w: r.width, h: r.height };
    };

    const root = getPos('root');
    const next: FlowPath[] = [];
    let edgeIndex = 0;

    if (root) {
      BRANCHES.forEach((branch) => {
        const cat = getPos(`cat-${branch.id}`);
        if (cat) {
          next.push({
            id: `root-${branch.id}`,
            d: curve(root.x + root.w / 2, root.y + root.h, cat.x + cat.w / 2, cat.y, 70),
            delay: edgeIndex * 0.1,
          });
          edgeIndex += 1;

          branch.skills.forEach((skill) => {
            const card = getPos(`card-${branch.id}-${skill.label}`);
            if (card) {
              next.push({
                id: `cat-${branch.id}-${skill.label}`,
                d: curve(cat.x + cat.w / 2, cat.y + cat.h, card.x + card.w / 2, card.y + card.h / 2, 40),
                delay: 0.5 + edgeIndex * 0.04,
              });
              edgeIndex += 1;
            }
          });
        }
      });
    }

    setPaths(next);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="container relative z-10" ref={containerRef}>
        <div className="flex justify-center mb-12">
          <motion.div
            ref={registerRef('root')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-extrabold tracking-tighter text-white"
          >
            SKILLS
          </motion.div>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
          <defs>
            <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#22d3ee" />
              <stop offset="100%" stop-color="#0891b2" />
            </linearGradient>
            <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Base structural edges — dim so the animated glow pops */}
          <g fill="none" stroke="#22d3ee" strokeWidth="2" strokeOpacity={0.3}>
            {paths.map((p) => (
              <path key={`${p.id}-base`} d={p.d} />
            ))}
          </g>
          {/* Animated flowing light pulse — root → category → card, never stops */}
          <g fill="none" filter="url(#lineGlow)">
            {paths.map((p) => (
              <motion.path
                key={p.id}
                d={p.d}
                stroke="url(#flowGradient)"
                strokeWidth="2.5"
                strokeDasharray="8, 8"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'linear',
                  delay: p.delay,
                }}
              />
            ))}
          </g>
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mt-16 relative z-10">
          {BRANCHES.map((branch) => (
            <div key={branch.id} className="flex flex-col items-center w-full">
              <CategoryBadge label={branch.label} refId={`cat-${branch.id}`} />
              <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-xs">
                {branch.skills.map((skill) => (
                  <SkillCard
                    key={skill.label}
                    item={skill.label}
                    brand={skill.brand}
                    Icon={skill.Icon}
                    delay={0.6}
                    refId={`card-${branch.id}-${skill.label}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
