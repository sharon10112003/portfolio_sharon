import { useState } from 'react';
import { Layout, Server, Database, Wrench, Code2, CheckCircle2, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface SkillsProps {
  isMobileMockup?: boolean;
}

export function Skills({ isMobileMockup = false }: SkillsProps) {
  const { skills, concepts } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-teal-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-400" />;
      default:
        return <Layout className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skills
      : skills.filter((cat) => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-zinc-950/60 border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              02. Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Skills & Technology Stack
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Curated capabilities across programming languages, frontend interfaces, backend servers, databases, and developer tools—demonstrated through practical full-stack project implementations.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-xl border border-zinc-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All (5)
            </button>
            <button
              onClick={() => setSelectedCategory('programming')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'programming'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setSelectedCategory('frontend')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'frontend'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectedCategory('backend')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'backend'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setSelectedCategory('database')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'database'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setSelectedCategory('tool')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'tool'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className={`grid grid-cols-1 ${isMobileMockup ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {filteredCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between ${
                filteredCategories.length % 2 !== 0 && catIdx === filteredCategories.length - 1
                  ? 'md:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-zinc-850">
                  <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/40 shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-100">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Items in this Category */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group p-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-850/60 border border-zinc-850/80 hover:border-zinc-750 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500 text-right truncate">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed pl-5">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Architectural Concepts Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            <Shield className="w-4 h-4" />
            <span>Architecture & Key Concepts Mastered</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-300">
            {concepts.map((concept, idx) => (
              <span key={idx} className="inline-flex items-center">
                <span className="font-medium text-zinc-200">{concept}</span>
                {idx < concepts.length - 1 && (
                  <span className="text-zinc-600 ml-4" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
