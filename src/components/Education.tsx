import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface EducationProps {
  onOpenGuide: () => void;
}

export function Education({ onOpenGuide }: EducationProps) {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 relative bg-zinc-950/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              04. Academic Background & Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Education & Verified Credentials
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Academic excellence in Computer Applications (MCA - 9.3 CGPA) paired with foundational studies in Accounting & Finance and certified coursework in Python, MySQL, and C.
            </p>
          </div>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Main Degree Cards */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Academic Degrees & Schooling</span>
            </h3>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-750 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3 pb-3 border-b border-zinc-850">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-100">
                        {item.degree}
                      </h4>
                      <div className="text-sm font-medium text-emerald-400 mt-0.5">
                        {item.institution}
                      </div>
                    </div>
                  </div>

                  {/* Year & Score */}
                  <div className="flex flex-wrap items-center gap-2 sm:self-start">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.year}</span>
                    </div>
                    {item.gradeOrCgpa && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-bold">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.gradeOrCgpa}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 text-xs text-zinc-400 pt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono text-xs">▸</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Specialized Training */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certifications & Workshops</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-100 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-emerald-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Education Badge */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 text-xs text-zinc-300 space-y-2">
              <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Academic Distinction</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-[11px]">
                Consistently scored 9.3 CGPA in MCA at RVS College, with a disciplined transition from Accounting & Finance (7.6 CGPA) into Full-Stack Software Engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
