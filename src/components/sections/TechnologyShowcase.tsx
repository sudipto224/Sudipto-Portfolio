'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import Image from 'next/image';

// Genuine brand logos via simple-icons.
import html5 from 'simple-icons/icons/html5.svg';
import css3 from 'simple-icons/icons/css.svg';
import javascript from 'simple-icons/icons/javascript.svg';
import typescript from 'simple-icons/icons/typescript.svg';
import react from 'simple-icons/icons/react.svg';
import nextdotjs from 'simple-icons/icons/nextdotjs.svg';
import tailwindcss from 'simple-icons/icons/tailwindcss.svg';
import php from 'simple-icons/icons/php.svg';
import laravel from 'simple-icons/icons/laravel.svg';
import nodedotjs from 'simple-icons/icons/nodedotjs.svg';
import mysql from 'simple-icons/icons/mysql.svg';
import postgresql from 'simple-icons/icons/postgresql.svg';
import supabase from 'simple-icons/icons/supabase.svg';
import git from 'simple-icons/icons/git.svg';
import github from 'simple-icons/icons/github.svg';
import vercel from 'simple-icons/icons/vercel.svg';

const LOGO_MAP: Record<string, string> = {
  html5, css3, javascript, typescript, react, nextjs: nextdotjs, tailwindcss,
  php, laravel, nodejs: nodedotjs, mysql, postgresql, supabase,
  git, github, vercel,
};

type TechItem = {
  name: string;
  group: string;
  logo: string;
  inline?: boolean;
};

const TECHNOLOGIES: TechItem[] = [
  { name: 'HTML5', group: 'Frontend', logo: LOGO_MAP.html5 },
  { name: 'CSS3', group: 'Frontend', logo: LOGO_MAP.css3 },
  { name: 'JavaScript', group: 'Frontend', logo: LOGO_MAP.javascript },
  { name: 'TypeScript', group: 'Frontend', logo: LOGO_MAP.typescript },
  { name: 'React.js', group: 'Frontend', logo: LOGO_MAP.react },
  { name: 'Next.js', group: 'Frontend', logo: LOGO_MAP.nextjs },
  { name: 'Tailwind CSS', group: 'Frontend', logo: LOGO_MAP.tailwindcss },
  { name: 'PHP', group: 'Backend', logo: LOGO_MAP.php },
  { name: 'Laravel', group: 'Backend', logo: LOGO_MAP.laravel },
  { name: 'Node.js', group: 'Backend', logo: LOGO_MAP.nodejs },
  { name: 'REST APIs', group: 'Backend', logo: '', inline: true },
  { name: 'MySQL', group: 'Database', logo: LOGO_MAP.mysql },
  { name: 'PostgreSQL', group: 'Database', logo: LOGO_MAP.postgresql },
  { name: 'Supabase', group: 'Database', logo: LOGO_MAP.supabase },
  { name: 'Git', group: 'Tools & Platforms', logo: LOGO_MAP.git },
  { name: 'GitHub', group: 'Tools & Platforms', logo: LOGO_MAP.github },
  { name: 'VS Code', group: 'Tools & Platforms', logo: '', inline: true },
  { name: 'Vercel', group: 'Tools & Platforms', logo: LOGO_MAP.vercel },
  { name: 'Groq AI', group: 'AI & Integration', logo: '', inline: true },
  { name: 'AI API Integration', group: 'AI & Integration', logo: '', inline: true },
];

function InlineLogo({ name, size = 36 }: { name: string; size?: number }) {
  switch (name) {
    case 'REST APIs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 12h6" />
          <path d="M12 12l3.46-2" />
          <path d="M12 12l-3.46-2" />
        </svg>
      );
    case 'VS Code':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#007ACC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="M12 6l4.5 8L12 18" />
          <path d="M12 6l-4.5 8L12 18" />
        </svg>
      );
    case 'Groq AI':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F44336" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12h8" />
          <path d="M12 12l3 3-3 3" />
          <circle cx="16" cy="16" r="1.6" fill="#F44336" />
        </svg>
      );
    case 'AI API Integration':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2l2.5 7.5L19 12l-2.5 7.5L12 22l-2.5-7.5L5 12z" />
          <circle cx="12" cy="12" r="3" fill="#6366F1" />
        </svg>
      );
    default:
      return null;
  }
}

export function TechnologyShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = TECHNOLOGIES.length;
  const logoSize = 40;
  const radius = 210;

  return (
    <section className="technology-showcase" aria-labelledby="technology-showcase-heading">
      <div className="container technology-header">
        <div className="technology-kicker">03 / TECHNOLOGY</div>
        <h2 id="technology-showcase-heading" className="technology-heading">
          Technologies I Work With
        </h2>
        <p className="technology-subtitle">
          Tools and technologies I use to design, develop and deliver modern digital solutions.
        </p>
      </div>

      <div className="container technology-body">
        {/* Desktop: premium circular orbit */}
        <div
          className="technology-orbit-wrap"
          ref={containerRef}
        >
          <div
            className="technology-orbit"
            style={{ width: radius * 2 + 140, height: radius * 2 + 140 }}
          >
            {TECHNOLOGIES.map((tech, i) => {
              const angle = (i / total) * 360;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <div
                  key={tech.name}
                  className="technology-item"
                  data-tip={tech.name}
                  aria-label={tech.name}
                  title={tech.name}
                  onMouseEnter={() => setHoveredName(tech.name)}
                  onMouseLeave={() => setHoveredName(null)}
                  style={{
                    left: '50%',
                    top: '50%',
                    width: logoSize,
                    height: logoSize,
                    marginLeft: -logoSize / 2,
                    marginTop: -logoSize / 2,
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                  }}
                >
                  <div className="technology-logo">
                    {tech.inline ? (
                      <InlineLogo name={tech.name} />
                    ) : (
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={logoSize}
                        height={logoSize}
                        className="technology-image"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {shouldReduceMotion ? (
            <div className="technology-static-fallback">
              {TECHNOLOGIES.map((tech) => (
                <span key={tech.name} className="technology-static-chip" title={tech.name} aria-label={tech.name}>
                  {tech.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Mobile: animated horizontal track */}
        <div className="technology-mobile-track">
          <div className="technology-track">
            {TECHNOLOGIES.map((tech) => (
              <div key={tech.name} className="technology-track-item" title={tech.name} aria-label={tech.name}>
                {tech.inline ? (
                  <InlineLogo name={tech.name} size={36} />
                ) : (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="technology-track-logo"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
            {TECHNOLOGIES.map((tech) => (
              <div key={tech.name + '-dup'} className="technology-track-item" title={tech.name} aria-label={tech.name}>
                {tech.inline ? (
                  <InlineLogo name={tech.name} size={36} />
                ) : (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="technology-track-logo"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="technology-groups">
          {[
            'Frontend',
            'Backend',
            'Database',
            'Tools & Platforms',
            'AI & Integration',
          ].map((group) => (
            <div key={group} className="technology-group">
              <span className="technology-group-label">{group}</span>
              <div className="technology-group-items">
                {TECHNOLOGIES.filter((t) => t.group === group).map((t) => (
                  <span key={t.name} className="technology-group-chip" title={t.name} aria-label={t.name}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
