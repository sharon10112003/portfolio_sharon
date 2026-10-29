import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ConfigGuideModal } from './components/ConfigGuideModal';
import { NotificationToast } from './components/NotificationToast';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Project } from './types';
import { Sparkles, FileText, Smartphone, Monitor, Wifi, BatteryCharging } from 'lucide-react';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile');
  const [currentTime, setCurrentTime] = useState('9:41');
  const { currentTheme } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3500);
  };

  const isMobileMockup = viewMode === 'mobile';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300 ${
        isMobileMockup ? 'bg-zinc-950' : currentTheme.bgClass
      }`}
    >
      {/* Top Floating Control Bar for Mockup View on Desktop */}
      {isMobileMockup ? (
        <div className="w-full flex-1 flex flex-col items-center justify-start py-3 sm:py-6 px-2 sm:px-4 relative">
          {/* Subtle Ambient Glow Behind Device Mockup */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          {/* Top Mode Header Strip */}
          <div className="w-full max-w-[430px] mb-3 flex items-center justify-between px-3.5 py-2 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl backdrop-blur-md z-30">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-200">Mobile View</span>
              <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">(iPhone Mockup)</span>
            </div>

            <button
              onClick={() => setViewMode('desktop')}
              type="button"
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm border border-zinc-700/60"
              title="Expand to Full Desktop View"
            >
              <Monitor className="w-3.5 h-3.5 text-cyan-400" />
              <span>Desktop View</span>
            </button>
          </div>

          {/* Smartphone Frame Mockup */}
          <div className="relative w-full max-w-[430px] bg-zinc-950 rounded-none sm:rounded-[50px] border-0 sm:border-[10px] border-zinc-800 shadow-none sm:shadow-[0_25px_80px_rgba(0,0,0,0.9)] ring-0 sm:ring-1 sm:ring-zinc-700/60 overflow-hidden flex flex-col z-20">
            {/* iOS Status Bar & Dynamic Island (Shown on desktop/tablet wrapper) */}
            <div className="relative z-40 bg-zinc-950 pt-2.5 px-6 pb-2 border-b border-zinc-900/60 flex items-center justify-between text-[11px] font-semibold text-zinc-300 select-none">
              <span className="font-mono tracking-tight">{currentTime}</span>
              {/* Dynamic Island */}
              <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center gap-1.5 border border-zinc-800 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-zinc-900 ring-1 ring-zinc-800" />
              </div>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Wifi className="w-3 h-3 text-zinc-300" />
                <span className="text-[10px] font-mono">5G</span>
                <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Scrollable Mobile Screen Content */}
            <div className="overflow-y-auto max-h-none sm:max-h-[78vh] scroll-smooth overscroll-contain flex-1 flex flex-col">
              <Navbar
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenGuide={() => setIsGuideOpen(true)}
                isMobileMockup={true}
              />
              <main className="flex-1">
                <Hero
                  onOpenResume={() => setIsResumeOpen(true)}
                  onOpenGuide={() => setIsGuideOpen(true)}
                  isMobileMockup={true}
                />
                <About isMobileMockup={true} />
                <Skills isMobileMockup={true} />
                <Projects
                  onSelectProject={(project) => setSelectedProject(project)}
                  isMobileMockup={true}
                />
                <Education onOpenGuide={() => setIsGuideOpen(true)} isMobileMockup={true} />
                <Contact onShowToast={showToast} isMobileMockup={true} />
              </main>
              <Footer isMobileMockup={true} />
            </div>

            {/* iPhone Bottom Home Indicator */}
            <div className="relative z-40 py-2.5 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-900/60 flex justify-center">
              <div className="w-28 h-1 bg-zinc-600 rounded-full" />
            </div>
          </div>
        </div>
      ) : (
        /* Full Desktop View */
        <>
          {/* Top Floating Switcher to Toggle Back to Mobile View */}
          <div className="fixed top-20 right-6 z-40 hidden sm:block">
            <button
              onClick={() => setViewMode('mobile')}
              type="button"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-zinc-900/95 hover:bg-zinc-850 text-emerald-400 border border-emerald-500/40 shadow-2xl backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
              title="Switch to Centered Mobile Device View"
            >
              <Smartphone className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Switch to Mobile View</span>
            </button>
          </div>

          <Navbar
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenGuide={() => setIsGuideOpen(true)}
            isMobileMockup={false}
          />
          <main className="flex-1">
            <Hero
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenGuide={() => setIsGuideOpen(true)}
              isMobileMockup={false}
            />
            <About isMobileMockup={false} />
            <Skills isMobileMockup={false} />
            <Projects
              onSelectProject={(project) => setSelectedProject(project)}
              isMobileMockup={false}
            />
            <Education onOpenGuide={() => setIsGuideOpen(true)} isMobileMockup={false} />
            <Contact onShowToast={showToast} isMobileMockup={false} />
          </main>
          <Footer isMobileMockup={false} />

          {/* Floating Quick Action Buttons on Desktop */}
          <div className="no-print fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
            <div className="shadow-xl rounded-full">
              <ThemeSwitcher />
            </div>

            <button
              onClick={() => setIsResumeOpen(true)}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-xl backdrop-blur-md text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="View Sharon's Resume"
            >
              <FileText className="w-3.5 h-3.5 fill-current" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setIsGuideOpen(true)}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 shadow-xl backdrop-blur-md text-xs font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Open Customization & Free Deployment Guide"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Guide & Deploy</span>
            </button>
          </div>
        </>
      )}

      {/* Modals (Work in both mobile mockup and desktop view) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ConfigGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onShowToast={showToast}
      />

      {/* Action Toast Feedback */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
