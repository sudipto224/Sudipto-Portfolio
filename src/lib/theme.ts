export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'portfolio-theme';

export function getSavedTheme(): Theme | null {
  if (typeof localStorage === 'undefined') return null;
  const value = localStorage.getItem(THEME_STORAGE_KEY);
  return value === 'light' || value === 'dark' ? value : null;
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveTheme(): Theme {
  return getSavedTheme() ?? getSystemTheme();
}

export function setTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable; ignore
  }
}

export function initTheme(): Theme {
  const theme = resolveTheme();
  setTheme(theme);
  return theme;
}
