import { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, Moon, Sun, Terminal } from 'lucide-react';
import { useTheme, themes, ThemeId } from '../context/ThemeContext';

export function ThemeSwitcher() {
  const { currentTheme, themeId, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = (id: ThemeId) => {
    switch (id) {
      case 'light':
        return <Sun className="w-3.5 h-3.5 text-amber-500" />;
      case 'obsidian':
        return <Moon className="w-3.5 h-3.5 text-emerald-400" />;
      case 'cyberpunk':
        return <Sparkles className="w-3.5 h-3.5 text-rose-400" />;
      case 'matrix':
        return <Terminal className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Switcher Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer shadow-sm bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border-zinc-750"
        title={`Change Theme (Current: ${currentTheme.name})`}
        aria-expanded={isOpen}
      >
        <Palette className="w-3.5 h-3.5 text-cyan-400" />
        <span className="hidden sm:inline">{currentTheme.name}</span>
        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-800 border border-zinc-700 text-zinc-400">
          {currentTheme.badge}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 p-2 rounded-2xl bg-zinc-900/95 border border-zinc-700/80 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-2 border-b border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span>Select Theme</span>
            </span>
            <span className="text-[10px] font-mono text-zinc-500">5 styles</span>
          </div>

          <div className="mt-1 space-y-1">
            {(Object.keys(themes) as ThemeId[]).map((id) => {
              const t = themes[id];
              const isSelected = themeId === id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    setTheme(id);
                    setIsOpen(false);
                  }}
                  type="button"
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-zinc-800 text-white shadow-sm ring-1 ring-cyan-500/50'
                      : 'text-zinc-300 hover:bg-zinc-850 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-lg bg-gradient-to-tr ${t.colorPreview} ring-1 ring-white/20 shrink-0 flex items-center justify-center`}
                    >
                      {getThemeIcon(id)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold flex items-center gap-1.5">
                        <span className="truncate">{t.name}</span>
                        {t.badge === 'Signature' && (
                          <span className="text-[9px] font-mono px-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            Signature
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate leading-tight mt-0.5">
                        {t.description}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
