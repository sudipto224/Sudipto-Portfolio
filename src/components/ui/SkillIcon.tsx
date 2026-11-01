'use client';

import * as React from 'react';
import {
  Bot,
  Code2,
  Database,
  GitBranch,
  Github,
  Layout,
  Lock,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { cn } from '@/lib/cn';

const ICON_MAP: Record<string, React.ElementType> = {
  html: Code2,
  css: Code2,
  javascript: Code2,
  typescript: Code2,
  react: Code2,
  nextjs: Code2,
  tailwind: Code2,
  php: Code2,
  laravel: Code2,
  api: Code2,
  mysql: Database,
  postgres: Database,
  supabase: Database,
  git: GitBranch,
  github: Github,
  vercel: Monitor,
  vscode: Layout,
  ai: Bot,
  auth: Lock,
  responsive: Smartphone,
  'database integration': Database,
};

export function SkillIcon({ name, size = 16 }: { name: string; size?: number }) {
  const Comp = ICON_MAP[name.toLowerCase()] || Code2;
  return <Comp size={size} strokeWidth={1.8} />;
}
