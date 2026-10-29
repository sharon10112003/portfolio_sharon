import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenGuide: () => void;
}

export function Navbar({ onOpenResume, onOpenGuide }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Clean single-element Brand wordmark with Sharon's Photo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
            aria-label={`${portfolioData.personal.name} Home`}
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1.5 ring-emerald-400/80 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0 bg-zinc-900">
              <img
                src="/public/assets/aistudio/Profile2_39c053e6.jpeg"
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm ${
                    isActive ? 'text-emerald-400 font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme Selector */}
            <ThemeSwitcher />

            {/* Guide & Customize button */}
            <button
              onClick={onOpenGuide}
              type="button"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
              title="View deployment guide & customize placeholders"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Guide & Deploy</span>
            </button>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-850 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 mt-2 bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-zinc-800 text-emerald-400 font-semibold'
                    : 'text-zinc-300 hover:bg-zinc-850 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full py-2 px-3 text-xs font-medium rounded-lg bg-zinc-850 text-zinc-300 flex items-center justify-center gap-1.5"
                type="button"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Guide & Deploy</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
