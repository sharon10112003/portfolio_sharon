import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'midnight' | 'obsidian' | 'cyberpunk' | 'light' | 'matrix';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  badge: string;
  description: string;
  colorPreview: string; // CSS gradient or color for the selector badge
  bgClass: string;
  cardBgClass: string;
  borderClass: string;
  textPrimaryClass: string;
  textSecondaryClass: string;
  accentClass: string;
  accentGradient: string;
  glowColor: string;
}

export const themes: Record<ThemeId, ThemeConfig> = {
  midnight: {
    id: 'midnight',
    name: 'Midnight Cosmic',
    badge: 'Signature',
    description: "Sharon's GitHub Pages signature deep midnight & electric cyan",
    colorPreview: 'from-[#0f111a] via-[#1c1b3a] to-[#4facfe]',
    bgClass: 'bg-[#0b0f19] text-slate-100',
    cardBgClass: 'bg-[#111827]/80 backdrop-blur-xl',
    borderClass: 'border-slate-800/80',
    textPrimaryClass: 'text-white',
    textSecondaryClass: 'text-slate-400',
    accentClass: 'text-cyan-400',
    accentGradient: 'from-[#4facfe] via-[#a855f7] to-[#43e97b]',
    glowColor: 'bg-cyan-500/10',
  },
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian Emerald',
    badge: 'Dark',
    description: 'Clean obsidian black with neon emerald and mint accents',
    colorPreview: 'from-zinc-950 via-zinc-900 to-emerald-500',
    bgClass: 'bg-zinc-950 text-zinc-100',
    cardBgClass: 'bg-zinc-900/80 backdrop-blur-xl',
    borderClass: 'border-zinc-800/80',
    textPrimaryClass: 'text-white',
    textSecondaryClass: 'text-zinc-400',
    accentClass: 'text-emerald-400',
    accentGradient: 'from-emerald-400 via-teal-300 to-cyan-300',
    glowColor: 'bg-emerald-500/10',
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk Sunset',
    badge: 'Neon',
    description: 'Deep violet night with radiant rose, amber, and neon fuchsia',
    colorPreview: 'from-[#0b0914] via-[#1e1035] to-[#f43f5e]',
    bgClass: 'bg-[#0c0915] text-purple-100',
    cardBgClass: 'bg-[#171126]/80 backdrop-blur-xl',
    borderClass: 'border-purple-900/60',
    textPrimaryClass: 'text-white',
    textSecondaryClass: 'text-purple-300/80',
    accentClass: 'text-rose-400',
    accentGradient: 'from-rose-400 via-fuchsia-400 to-amber-300',
    glowColor: 'bg-rose-500/10',
  },
  light: {
    id: 'light',
    name: 'Clean Studio Light',
    badge: 'Light',
    description: 'Crisp Apple & Stripe style minimalist daylight theme',
    colorPreview: 'from-white via-slate-100 to-sky-500',
    bgClass: 'bg-slate-50 text-slate-900',
    cardBgClass: 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50',
    borderClass: 'border-slate-200',
    textPrimaryClass: 'text-slate-900',
    textSecondaryClass: 'text-slate-600',
    accentClass: 'text-sky-600',
    accentGradient: 'from-sky-600 via-indigo-600 to-emerald-600',
    glowColor: 'bg-sky-500/5',
  },
  matrix: {
    id: 'matrix',
    name: 'Terminal Matrix',
    badge: 'Hacker',
    description: 'Pure hacker aesthetic with deep night green & phosphor glow',
    colorPreview: 'from-[#030a05] via-[#081a0c] to-[#22c55e]',
    bgClass: 'bg-[#030905] text-emerald-100 font-mono',
    cardBgClass: 'bg-[#07170a]/80 backdrop-blur-xl',
    borderClass: 'border-emerald-900/60',
    textPrimaryClass: 'text-emerald-50',
    textSecondaryClass: 'text-emerald-400/70',
    accentClass: 'text-emerald-400',
    accentGradient: 'from-emerald-400 via-green-300 to-teal-300',
    glowColor: 'bg-emerald-500/15',
  },
};

interface ThemeContextType {
  currentTheme: ThemeConfig;
  themeId: ThemeId;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: themes.midnight,
  themeId: 'midnight',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sharon_portfolio_theme') as ThemeId;
      if (saved && themes[saved]) return saved;
    }
    return 'midnight'; // Default to Sharon's Midnight Cosmic theme
  });

  const setTheme = (id: ThemeId) => {
    if (themes[id]) {
      setThemeId(id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('sharon_portfolio_theme', id);
        document.documentElement.setAttribute('data-theme', id);
        if (id === 'light') {
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
        }
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeId);
    if (themeId === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ currentTheme: themes[themeId], themeId, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
