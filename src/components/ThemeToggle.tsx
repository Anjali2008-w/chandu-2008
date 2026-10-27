import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Check localStorage first
    const savedTheme = localStorage.getItem('altitude-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      return;
    }

    // 2. Default to system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = systemPrefersDark ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('altitude-theme', nextTheme);
  };

  if (!mounted) {
    return (
      <div className={`w-10 h-10 ${className}`} aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className={`relative w-10 h-10 flex items-center justify-center radius-btn text-[var(--text-primary)] hover:bg-[var(--surface)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] border border-[var(--border)] overflow-hidden ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        >
          <Sun size={20} strokeWidth={1.5} className="text-[var(--accent)]" />
        </span>

        {/* Moon Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        >
          <Moon size={20} strokeWidth={1.5} className="text-[var(--accent)]" />
        </span>
      </div>
    </button>
  );
};

