'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
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
  children, variant='primary', size='md', href, external=false, onClick, className, disabled=false,
}: ButtonProps) {
  const classes = cn('ui-button', 'ui-button--' + variant, 'ui-button--' + size, className);
  const contents = <>{children}<ArrowUpRight size={16} aria-hidden="true" /></>;
  if (href && !disabled) {
    if (external) return <a className={classes} href={href} target="_blank" rel="noopener noreferrer">{contents}</a>;
    return <Link className={classes} href={href}>{contents}</Link>;
  }
  return <button type="button" disabled={disabled} onClick={onClick} className={classes}>{contents}</button>;
}
