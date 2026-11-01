'use client';

import { ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-8 font-inter font-semibold rounded-full transition-all duration-200 ease-out border-transparent active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants: Record<string, string> = {
    primary:
      'bg-[#141414] text-[#F8F8F5] shadow-[0_20px_40px_-12px_rgba(20,20,20,0.25)] hover:bg-[#0B0B0B] hover:shadow-[0_24px_48px_-14px_rgba(20,20,20,0.30)]',
    outline:
      'border-[1.5px] border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#F8F8F5]',
    ghost: 'text-[#141414] hover:bg-[#F2EFE8]',
    dark:
      'bg-[#405CF5] text-[#F8F8F5] hover:bg-[#334DE0] shadow-[0_20px_40px_-12px_rgba(64,92,245,0.35)] hover:shadow-[0_24px_48px_-14px_rgba(64,92,245,0.40)]',
  };

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4.5 text-lg',
  };

  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], className)}
      aria-disabled={disabled}
    >
      {children}
      {href && !disabled && <ArrowRight size={16} strokeWidth={2.2} />}
    </Comp>
  );
}
