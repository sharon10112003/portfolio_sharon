import { useState } from 'react';
import {
  ArrowDown,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  Phone,
  CheckCircle2,
  Box,
  User,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ThreeScene } from './ThreeScene';

interface HeroProps {
  onOpenResume: () => void;
  onOpenGuide: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { personal, socialLinks } = portfolioData;
  const [visualMode, setVisualMode] = useState<'portrait' | 'blackcoat' | 'studio' | '3d'>('portrait');

  const githubLink = socialLinks.find((l) => l.platform === 'GitHub');
  const linkedinLink = socialLinks.find((l) => l.platform === 'LinkedIn');

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background ambient lighting from Sharon's portfolio: Teal, Sky Blue, and Deep Indigo */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[450px] h-[380px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-purple-500/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy inspired by Sharon's GitHub Pages */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Sharon's Starting Profile Photo & Introduction Badge */}
            <div className="flex items-center gap-4 mb-6 p-2.5 sm:p-3 pr-6 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-xl w-fit shadow-2xl shadow-emerald-500/10">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden ring-2 ring-emerald-400 shadow-md shrink-0 bg-zinc-950">
                <img
                  src="/public/assets/aistudio/Profile2_39c053e6.jpeg"
                  alt="Sharon K. G."
                  className="w-full h-full object-cover object-top"
                />
                <span
                  className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-zinc-950 animate-pulse"
                  title="Available for immediate software roles"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base sm:text-xl font-extrabold text-white tracking-tight">
                    Sharon K. G.
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-mono">
                    MCA (9.3 CGPA)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-0.5">
                  Full-Stack & Web Developer · React & Node.js
                </p>
                <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>RVS College of Arts and Science</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-emerald-400 font-medium">Available for Hire</span>
                </div>
              </div>
            </div>

            {/* Greeting Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400 mb-3 tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">Welcome to my official portfolio</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">sharon10112003.github.io</span>
            </div>

            {/* Main Headline with Sharon's signature gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] via-[#a855f7] to-[#43e97b]">
                Sharon
              </span>{' '}
              — Web & Full Stack Developer
            </h1>

            {/* Subtitle from Sharon's GitHub Pages portfolio */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-6 font-normal">
              {personal.headline}
            </p>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mb-8">
              {personal.shortBio}
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Eye className="w-4 h-4 fill-current" />
                <span>See My Projects</span>
              </a>

              <a
                href="/Sharon_KG_Resume.pdf"
                download="Sharon_KG_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                title="Download Sharon's Resume PDF"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-900/60 hover:bg-zinc-850 border border-zinc-800/80 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                title="Preview Resume in browser"
              >
                <span>Preview</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-850 border border-zinc-800/80 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Contact Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-zinc-850 text-xs sm:text-sm text-zinc-400">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
                title={`Send email to ${personal.email}`}
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors font-mono"
                title="Call Sharon K G"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>{personal.phoneDisplay}</span>
              </a>

              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-zinc-200 transition-colors"
                  title="Sharon's GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span>sharon10112003</span>
                </a>
              )}

              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                  title="Sharon's LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>sharongk693</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Showcase (Multi-Mode: Black Coat / Studio Portrait / Three.js 3D) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative backplate glow */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-75"
                aria-hidden="true"
              />

              {/* Main Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/90 shadow-2xl">
                {/* Visual Header bar with Mode Switcher */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/70">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Mode Tabs */}
                  <div className="flex items-center gap-1 p-0.5 bg-zinc-900 rounded-lg border border-zinc-800">
                    <button
                      type="button"
                      onClick={() => setVisualMode('portrait')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                        visualMode === 'portrait'
                          ? 'bg-zinc-800 text-emerald-400 shadow-sm font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                      title="New Portrait"
                    >
                      <User className="w-3 h-3" />
                      <span>Portrait</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisualMode('blackcoat')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                        visualMode === 'blackcoat'
                          ? 'bg-zinc-800 text-emerald-400 shadow-sm font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                      title="Portfolio Photo (Black Coat)"
                    >
                      <User className="w-3 h-3" />
                      <span>Black Coat</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisualMode('3d')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                        visualMode === '3d'
                          ? 'bg-zinc-800 text-emerald-400 shadow-sm font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                      title="Three.js 3D WebGL Model"
                    >
                      <Box className="w-3 h-3" />
                      <span>3D Core</span>
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                {visualMode === 'portrait' ? (
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[560px] bg-zinc-950 overflow-hidden group">
                    <img
                      src="/public/assets/aistudio/Profile2_39c053e6.jpeg"
                      alt="Sharon K. G. — Full Stack Developer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle bottom gradient resting over shirt */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none" />

                    {/* Bottom Info Bar positioned cleanly over lower shirt */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Sharon K. G. (MCA Graduate)</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-0.5">
                          RVS College · 9.3 CGPA · Full Stack Dev
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available for Hire</span>
                      </div>
                    </div>
                  </div>
                ) : visualMode === 'blackcoat' ? (
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[560px] bg-zinc-950 overflow-hidden group">
                    <img
                      src="/assets/sharon/blackcoat.jpeg"
                      alt="Sharon K. G. — Black Coat Portrait"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Sharon K. G.</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-0.5">
                          Full-Stack Web Developer
                        </p>
                      </div>

                      <span className="text-[11px] font-mono text-emerald-400">RVS College</span>
                    </div>
                  </div>
                ) : visualMode === 'studio' ? (
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[560px] bg-zinc-950 overflow-hidden group">
                    <img
                      src="/public/assets/aistudio/Profilepic_c694042d.jpeg"
                      alt="Sharon K. G. — Profile"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Sharon K. G.</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-0.5">
                          Full-Stack Web Developer
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">Tamil Nadu, India</span>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[3/4] sm:aspect-[4/5] max-h-[560px] w-full bg-zinc-950">
                    <ThreeScene />
                  </div>
                )}

                {/* Tech Highlights strip */}
                <div className="p-4 bg-zinc-950/80 border-t border-zinc-800/60">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                    <span className="text-zinc-200 font-medium">Core Stack:</span>
                    <span>HTML5</span>
                    <span className="text-zinc-700">·</span>
                    <span>CSS3</span>
                    <span className="text-zinc-700">·</span>
                    <span>JavaScript</span>
                    <span className="text-zinc-700">·</span>
                    <span>React.js</span>
                    <span className="text-zinc-700">·</span>
                    <span>Node.js</span>
                    <span className="text-zinc-700">·</span>
                    <span>MongoDB</span>
                    <span className="text-zinc-700">·</span>
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="Scroll down to About section"
          >
            <span>Explore background, education & projects</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400/80" />
          </a>
        </div>
      </div>
    </section>
  );
}
