'use client';

import { useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { initTheme, setTheme, type Theme } from '@/lib/theme';

type ThemeToggleProps = {
  theme: Theme;
  toggle: () => void;
};

export function ThemeToggle({ theme, toggle }: ThemeToggleProps) {
  const handleClick = useCallback(() => {
    toggle();
  }, [toggle]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleClick}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className="theme-toggle-icon theme-toggle-icon--sun">
        <Sun size={16} strokeWidth={1.8} />
      </span>
      <span className="theme-toggle-icon theme-toggle-icon--moon">
        <Moon size={16} strokeWidth={1.8} />
      </span>
      <span className="visually-hidden">
        {isDark ? 'Dark mode is active' : 'Light mode is active'}
      </span>
    </button>
  );
}
