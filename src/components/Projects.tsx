import { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Smartphone, Globe, Layers, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  isMobileMockup?: boolean;
}

export function Projects({ onSelectProject, isMobileMockup = false }: ProjectsProps) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<ProjectCategory>('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'Full-Stack':
        return <Layers className="w-3.5 h-3.5" />;
      case 'Web':
        return <Globe className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              03. Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Projects & Engineering Work
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Real deployed web applications, full-stack systems, and mobile interfaces built with JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL—featuring live demos on GitHub Pages and cloud platforms.
            </p>
          </div>

          {/* Interactive Filter Segmented Controls */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-xl border border-zinc-800 self-start md:self-auto">
            {(['All', 'Web', 'Full-Stack', 'Mobile'] as ProjectCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === category
                    ? 'bg-zinc-800 text-emerald-400 shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 2-column responsive layout */}
        <div className={`grid grid-cols-1 ${isMobileMockup ? '' : 'lg:grid-cols-2'} gap-8`}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              {/* Media Preview Box */}
              <div
                className="relative aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer"
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (project.id === 'ecommerce-website' && !target.src.includes('ecommerce_modern_mockup')) {
                      target.src = '/assets/images/ecommerce_modern_mockup_1793015715916.jpg';
                    } else if (project.id === 'calculator-app' && !target.src.includes('calculator_modern_mockup')) {
                      target.src = '/assets/images/calculator_modern_mockup_1793015734453.jpg';
                    } else if (project.id === 'todo-list-app' && !target.src.includes('todolist_modern_mockup')) {
                      target.src = '/assets/images/todolist_modern_mockup_1793015749370.jpg';
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

                {/* Category tag & Project Type */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-lg bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-[11px] font-medium text-emerald-300 flex items-center gap-1.5">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  {project.type && (
                    <div className="px-2.5 py-1 rounded-lg bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-[11px] font-medium text-zinc-300">
                      {project.type}
                    </div>
                  )}
                </div>

                {/* Duration indicator */}
                {project.period && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-850 text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    <span>{project.period.split(' (')[0]}</span>
                  </div>
                )}

                {/* "Quick View" hover overlay prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/40 pointer-events-none">
                  <span className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700 text-xs font-semibold text-white shadow-xl">
                    View Project Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title and subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-400/90 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key implemented highlights list */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-850">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                      Key Highlights Implemented
                    </div>
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">·</span>
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Metadata (Zero-pill discipline: unboxed text with separators) */}
                  <div className="text-xs text-zinc-400 pt-3 border-t border-zinc-850">
                    <span className="text-zinc-500 font-medium mr-2">Stack:</span>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="inline-block">
                        <span className="text-zinc-300 font-medium">{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span className="text-zinc-600 mx-1.5" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="mt-6 pt-4 border-t border-zinc-850 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>Full Details & Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition-colors"
                        title={`Open Live Demo for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
