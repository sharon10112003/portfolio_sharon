import { useState } from 'react';
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
import { Sparkles, FileText, Palette } from 'lucide-react';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { currentTheme } = useTheme();

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3500);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300 ${currentTheme.bgClass}`}
    >
      {/* Top Navbar with ThemeSwitcher */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenGuide={() => setIsGuideOpen(true)}
        />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education onOpenGuide={() => setIsGuideOpen(true)} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
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

      {/* Modals */}
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
