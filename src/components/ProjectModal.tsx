import { X, Github, ExternalLink, Check, Layers, Code } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">
              {project.category} · {project.type || 'Engineering Project'}
            </span>
            {project.period && (
              <>
                <span className="text-zinc-600">·</span>
                <span className="text-xs text-zinc-400 font-mono">{project.period}</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="max-h-[75vh] overflow-y-auto p-6 space-y-6">
          {/* Project Image Banner */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 id="modal-project-title" className="text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-emerald-300 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Overview Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Implemented Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>Features & Functional Highlights</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Engineering Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Technical & Architecture Highlights</span>
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              {project.architectureHighlights.map((arch, idx) => (
                <li key={idx} className="flex items-start gap-2 pl-1">
                  <span className="text-emerald-400 font-mono text-xs">▸</span>
                  <span className="leading-relaxed">{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used (Unboxed text with separators) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-emerald-400" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span className="font-medium text-emerald-300">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-zinc-600 mx-2" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-zinc-950 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repo</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
