import { X, Printer, Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal, skills, concepts, projects, education, certifications, socialLinks } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const githubLink = socialLinks.find((l) => l.platform === 'GitHub');
  const linkedinLink = socialLinks.find((l) => l.platform === 'LinkedIn');

  const academicProjects = projects.filter((p) => p.type === 'Academic Project');
  const personalProjects = projects.filter((p) => p.type === 'Personal Project');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-zinc-300">
              Resume Preview · {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/Sharon_KG_Resume.pdf"
              download="Sharon_KG_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg shadow-sm transition-colors cursor-pointer"
              title="Download Original PDF Resume"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-10 bg-white text-zinc-900 font-sans print:max-h-none print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-4 mb-4 text-center">
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 uppercase">
              {personal.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-700 mt-2 font-medium">
              <span>GitHub: <a href="https://github.com/sharon10112003" target="_blank" rel="noreferrer" className="text-zinc-900 underline">sharon10112003</a></span>
              <span className="text-zinc-400">—</span>
              <span>LinkedIn: <a href="https://linkedin.com/in/sharongk693" target="_blank" rel="noreferrer" className="text-zinc-900 underline">sharongk693</a></span>
              <span className="text-zinc-400">—</span>
              <span><a href={`mailto:${personal.email}`} className="text-zinc-900 underline">{personal.email}</a></span>
              <span className="text-zinc-400">—</span>
              <span>{personal.phone}</span>
            </div>
          </div>

          {/* Career Objective */}
          <section className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5 mb-1.5">
              Career Objective
            </h2>
            <p className="text-xs text-zinc-800 leading-relaxed text-justify">
              {personal.shortBio} {personal.careerGoal}
            </p>
          </section>

          {/* Education */}
          <section className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5 mb-1.5">
              Education
            </h2>
            <div className="space-y-1.5 text-xs">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-zinc-900">{edu.degree}</span>
                    <span className="text-zinc-600">, {edu.institution}</span>
                  </div>
                  <div className="text-zinc-700 font-mono text-[11px] shrink-0 sm:text-right">
                    <span>{edu.year}</span>
                    {edu.gradeOrCgpa && <span className="font-bold text-zinc-900 ml-2">{edu.gradeOrCgpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5 mb-1.5">
              Skills
            </h2>
            <div className="space-y-1 text-xs">
              {skills.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline">
                  <span className="font-semibold text-zinc-900 w-44 shrink-0">{cat.title}:</span>
                  <span className="text-zinc-800">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row sm:items-baseline">
                <span className="font-semibold text-zinc-900 w-44 shrink-0">Concepts:</span>
                <span className="text-zinc-800">
                  {concepts.join(', ')}
                </span>
              </div>
            </div>
          </section>

          {/* Academic Projects */}
          <section className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5 mb-1.5">
              Academic Projects
            </h2>
            <div className="space-y-3">
              {academicProjects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-900">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span>{proj.title}</span>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-800 underline font-normal font-mono text-[11px]"
                      >
                        [GitHub: {proj.githubUrl.split('github.com/')[1]}]
                      </a>
                      {proj.liveDemoUrl && (
                        <a
                          href={proj.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-teal-800 underline font-normal font-mono text-[11px]"
                        >
                          [Live Demo]
                        </a>
                      )}
                    </div>
                    {proj.period && (
                      <span className="text-[11px] font-mono text-zinc-600 font-normal shrink-0">
                        {proj.period}
                      </span>
                    )}
                  </div>
                  <ul className="list-disc list-inside text-zinc-800 space-y-0.5 mt-1 pl-1">
                    {proj.keyFeatures.slice(0, 3).map((f, i) => (
                      <li key={i} className="leading-snug">{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Projects */}
          <section className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5 mb-1.5">
              Personal Projects
            </h2>
            <div className="space-y-3">
              {personalProjects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-900">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span>{proj.title} – <span className="font-normal italic text-zinc-700">{proj.subtitle}</span></span>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-800 underline font-normal font-mono text-[11px]"
                      >
                        [GitHub: {proj.githubUrl.split('github.com/')[1]}]
                      </a>
                      {proj.liveDemoUrl && (
                        <a
                          href={proj.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-teal-800 underline font-normal font-mono text-[11px]"
                        >
                          [Live Demo]
                        </a>
                      )}
                    </div>
                    {proj.period && (
                      <span className="text-[11px] font-mono text-zinc-600 font-normal shrink-0">
                        {proj.period}
                      </span>
                    )}
                  </div>
                  <ul className="list-disc list-inside text-zinc-800 space-y-0.5 mt-1 pl-1">
                    {proj.keyFeatures.slice(0, 4).map((f, i) => (
                      <li key={i} className="leading-snug">{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-0.5 mb-1.5">
              Certifications & Workshops
            </h2>
            <div className="space-y-1 text-xs">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold text-zinc-900">{cert.title}</span>
                    <span className="text-zinc-600"> – {cert.issuer}</span>
                  </div>
                  <span className="text-zinc-600 font-mono text-[11px] shrink-0">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal Bottom Instructions */}
        <div className="no-print p-4 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-emerald-400" />
            <span>
              Matches your official resume. Click <strong>Print / Save as PDF</strong> to generate a clean PDF document.
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
