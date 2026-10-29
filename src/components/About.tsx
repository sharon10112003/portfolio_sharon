import { Code2, Server, Database, ShieldCheck, Layers, GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  isMobileMockup?: boolean;
}

export function About({ isMobileMockup = false }: AboutProps) {
  const { personal, concepts } = portfolioData;

  const coreFocusAreas = [
    {
      icon: Code2,
      title: 'Responsive Frontend Engineering',
      description:
        'Crafting responsive single-page applications and interfaces with React.js, modern JavaScript (ES6+), HTML5, and CSS3/Tailwind/Bootstrap.',
    },
    {
      icon: Server,
      title: 'RESTful Backend & Authentication',
      description:
        'Building scalable server-side APIs with Node.js and Express.js, featuring stateless JWT authentication, bcrypt password hashing, and role-based access control (RBAC).',
    },
    {
      icon: Database,
      title: 'Relational & NoSQL Databases',
      description:
        'Designing structured data schemas, foreign key relationships in MySQL/SQL, and document modeling with MongoDB and Mongoose.',
    },
    {
      icon: ShieldCheck,
      title: 'CRUD, Analytics & Data Operations',
      description:
        'End-to-end CRUD pipelines, dynamic Excel/CSV data parsing, real-time visualization with Chart.js, and automated confirmation workflows.',
    },
  ];

  return (
    <section id="about" className={`${isMobileMockup ? 'py-12' : 'py-20 lg:py-28'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl ${isMobileMockup ? 'mb-8' : 'mb-16'}`}>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            01. Background & Philosophy
          </div>
          <h2 className={`${isMobileMockup ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'} font-bold tracking-tight text-white mb-4`}>
            About Me
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Full Stack & Web Developer pursuing Master of Computer Applications (MCA) at RVS College with a 9.3 CGPA, combining strong computational foundations with practical full-stack project delivery.
          </p>
        </div>

        {/* 2-Column Split: Detailed Story with Portrait vs Key Competencies */}
        <div className={`grid grid-cols-1 ${isMobileMockup ? '' : 'lg:grid-cols-12'} gap-8 items-start`}>
          {/* Left Column: Narrative Story & Career Objective */}
          <div className={`${isMobileMockup ? '' : 'lg:col-span-7'} space-y-6 text-zinc-300 leading-relaxed text-base`}>
            {/* Visual Portrait Card from Sharon's site */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 mb-6">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden ring-2 ring-emerald-400/80 shadow-2xl shrink-0 group bg-zinc-950">
                <img
                  src="/assets/aistudio/Profile2_39c053e6.jpeg"
                  alt="Sharon K G — Web Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/sharon/profile2.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="text-lg font-bold text-white">Sharon K G</div>
                <div className="text-xs font-semibold text-emerald-400 font-mono">
                  Master of Computer Applications · 9.3 CGPA
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  "I create interactive, responsive, and user-friendly websites that look great on all devices. My goal is to build projects that are both visually appealing and highly functional."
                </p>
              </div>
            </div>

            {personal.fullBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Career Objective Box */}
            <div className="mt-8 p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Career Objective</span>
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {personal.careerGoal}
              </p>
            </div>

            {/* Academic Track Record Summary */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Master of Computer Applications</div>
                  <div className="text-sm font-semibold text-zinc-100">RVS College · 9.3 CGPA</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">2025 – Present</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">B.Com (Accounting & Finance)</div>
                  <div className="text-sm font-semibold text-zinc-100">RVS College · 7.6 CGPA</div>
                  <div className="text-[11px] text-teal-300 mt-0.5">2022 – 2025</div>
                </div>
              </div>
            </div>

            {/* Core Architectural Concepts */}
            <div className="pt-4 border-t border-zinc-850">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Core Concepts & Engineering Patterns
              </div>
              <div className="flex flex-wrap items-center gap-y-2 text-xs text-zinc-300">
                {concepts.map((concept, idx) => (
                  <span key={idx} className="inline-flex items-center">
                    <span className="font-medium text-emerald-300">{concept}</span>
                    {idx < concepts.length - 1 && (
                      <span className="text-zinc-600 mx-2" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className={`${isMobileMockup ? 'mt-6' : 'lg:col-span-5'} space-y-4`}>
            <h3 className="text-base font-semibold text-zinc-100 mb-2">
              Engineering Disciplines & Problem Solving
            </h3>
            {coreFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-100 mb-1">
                        {area.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
