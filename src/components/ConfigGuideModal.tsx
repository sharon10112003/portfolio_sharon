import { useState } from 'react';
import { X, Copy, Check, Terminal, Globe, FileCode2, BookOpen, ExternalLink } from 'lucide-react';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export function ConfigGuideModal({ isOpen, onClose, onShowToast }: ConfigGuideModalProps) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'placeholders' | 'local' | 'deploy'>('placeholders');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const copySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    onShowToast('Code copied to clipboard!');
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const placeholdersList = [
    {
      section: 'Personal Details & Location',
      file: 'src/data/portfolioData.ts',
      fields: [
        { label: 'Location', placeholder: "India (Open to Remote, Hybrid & Relocation)", note: 'Update to your actual city/state.' },
        { label: 'Resume File', placeholder: "Sharon_KG_Resume.pdf", note: 'Drop your PDF into /public folder or use the built-in printable PDF.' },
      ],
    },
    {
      section: 'Contact & Profile Links',
      file: 'src/data/portfolioData.ts',
      fields: [
        { label: 'GitHub Profile', placeholder: "https://github.com/sharon10112003", note: 'Connected to your active GitHub account.' },
        { label: 'LinkedIn Profile', placeholder: "https://linkedin.com/in/sharongk693", note: 'Connected to your LinkedIn profile.' },
        { label: 'Primary Email', placeholder: "sharongilbert2003@gmail.com", note: 'Direct contact email.' },
        { label: 'Contact Phone', placeholder: "+91 8903544693", note: 'Direct phone number for recruiter calls.' },
      ],
    },
    {
      section: 'Project Repositories & Demos',
      file: 'src/data/portfolioData.ts',
      fields: [
        { label: 'E-Commerce Website', placeholder: "https://sharon10112003.github.io/E-Commerce-Website/", note: 'Active live demo on GitHub Pages.' },
        { label: 'Campus Vote', placeholder: "https://github.com/sharon10112003/campus-vote", note: 'Full-stack election voting system repository.' },
        { label: 'Ticket Management System', placeholder: "https://github.com/sharon10112003/ticket-management-system", note: 'MERN ticket tracking platform repository.' },
        { label: 'FreshMart (Mobile)', placeholder: "https://github.com/sharon10112003/freshmart-grocery-app", note: 'React Native & Expo mobile application repository.' },
      ],
    },
    {
      section: 'Education & Academic Record',
      file: 'src/data/portfolioData.ts',
      fields: [
        { label: 'MCA Degree', placeholder: "RVS College · 9.3 CGPA (2025 – Present)", note: 'Master of Computer Applications academic track.' },
        { label: 'B.Com (Accounting & Finance)', placeholder: "RVS College · 7.6 CGPA (2022 – 2025)", note: 'Undergraduate business and computational foundations.' },
        { label: 'Higher Secondary (HSC)', placeholder: "83% (2022)", note: 'State Board 12th standard completion.' },
        { label: 'Secondary (SSLC)', placeholder: "80% (2020)", note: 'State Board 10th standard completion.' },
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-title"
    >
      <div
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 id="guide-title" className="text-sm font-bold text-white">
                Portfolio Customization & Deployment Guide
              </h2>
              <p className="text-[11px] text-zinc-400">
                Created for Sharon K. G. · Easy 2-minute maintenance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close guide modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-zinc-800 bg-zinc-950/40">
          <button
            onClick={() => setActiveTab('placeholders')}
            type="button"
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'placeholders'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>1. Edit Your Placeholders</span>
          </button>

          <button
            onClick={() => setActiveTab('local')}
            type="button"
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'local'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>2. Run Locally</span>
          </button>

          <button
            onClick={() => setActiveTab('deploy')}
            type="button"
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'deploy'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>3. Free Deployment</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="max-h-[68vh] overflow-y-auto p-6 text-xs text-zinc-300">
          {/* TAB 1: PLACEHOLDERS */}
          {activeTab === 'placeholders' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/50 text-emerald-300">
                <span className="font-semibold block mb-1">
                  Single File for All Customizations:
                </span>
                All information is organized inside <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-200 font-mono">src/data/portfolioData.ts</code>. Simply open that file and update the items marked below:
              </div>

              {placeholdersList.map((group, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-850">
                    <span className="font-bold text-zinc-100">{group.section}</span>
                    <span className="text-[11px] font-mono text-zinc-500">{group.file}</span>
                  </div>

                  <div className="space-y-3">
                    {group.fields.map((field, fIdx) => (
                      <div key={fIdx} className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="font-semibold text-zinc-200">{field.label}</div>
                          <div className="text-[11px] text-zinc-400">{field.note}</div>
                        </div>
                        <div className="font-mono text-[11px] text-amber-300 bg-zinc-950 px-2 py-1 rounded border border-zinc-800 truncate max-w-xs">
                          {field.placeholder}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: LOCAL SETUP */}
          {activeTab === 'local' && (
            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed">
                Follow these standard steps to clone and run the portfolio on your local machine using Node.js and Vite:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-zinc-200">
                      Step 1: Clone the repository & enter folder
                    </span>
                    <button
                      onClick={() => copySnippet('clone', 'git clone https://github.com/your-username/portfolio.git\ncd portfolio')}
                      className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white"
                    >
                      {copiedCodeId === 'clone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="p-3 rounded-lg bg-zinc-900 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                    git clone https://github.com/your-username/portfolio.git{"\n"}cd portfolio
                  </pre>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-zinc-200">
                      Step 2: Install project dependencies
                    </span>
                    <button
                      onClick={() => copySnippet('install', 'npm install')}
                      className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white"
                    >
                      {copiedCodeId === 'install' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="p-3 rounded-lg bg-zinc-900 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                    npm install
                  </pre>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-zinc-200">
                      Step 3: Start the local development server
                    </span>
                    <button
                      onClick={() => copySnippet('dev', 'npm run dev')}
                      className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white"
                    >
                      {copiedCodeId === 'dev' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="p-3 rounded-lg bg-zinc-900 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                    npm run dev
                  </pre>
                  <p className="text-[11px] text-zinc-400 mt-2">
                    Open <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="text-emerald-400 underline">http://localhost:5173</a> in your browser. Any edits in <code className="text-zinc-200 font-mono">portfolioData.ts</code> will update instantly!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FREE DEPLOYMENT */}
          {activeTab === 'deploy' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                <h3 className="font-bold text-zinc-100 text-sm mb-2 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs">Recommended</span>
                  <span>Option A: Free Deploy with Vercel</span>
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-zinc-300">
                  <li>Push your code to your GitHub account (<code className="font-mono text-emerald-300">git push origin main</code>).</li>
                  <li>Sign up or log into <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline inline-flex items-center gap-1">Vercel.com <ExternalLink className="w-3 h-3" /></a> with your GitHub account.</li>
                  <li>Click <strong>"Add New"</strong> &gt; <strong>"Project"</strong> and select your portfolio repository.</li>
                  <li>Vercel automatically detects Vite. Simply click <strong>"Deploy"</strong>.</li>
                  <li>Your portfolio will be live at a fast, secure domain like <code className="font-mono text-zinc-200">sharonkg.vercel.app</code> in under 60 seconds!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                <h3 className="font-bold text-zinc-100 text-sm mb-2">
                  Option B: Free Deploy with Netlify
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-zinc-300">
                  <li>Run <code className="font-mono text-emerald-300">npm run build</code> locally to produce the production-ready <code className="font-mono text-zinc-200">dist/</code> folder.</li>
                  <li>Log in to <a href="https://netlify.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline inline-flex items-center gap-1">Netlify.com <ExternalLink className="w-3 h-3" /></a>.</li>
                  <li>Drag and drop the <code className="font-mono text-zinc-200">dist</code> folder into the Netlify Drop area, OR connect your GitHub repository for automated continuous deployment.</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                <h3 className="font-bold text-zinc-100 text-sm mb-2">
                  Option C: GitHub Pages
                </h3>
                <p className="text-zinc-300 leading-relaxed mb-2">
                  You can also host directly on GitHub by installing <code className="font-mono text-emerald-300">gh-pages</code> and setting <code className="font-mono text-emerald-300">base: '/repo-name/'</code> in <code className="font-mono text-zinc-200">vite.config.ts</code>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-zinc-800 bg-zinc-950">
          <span className="text-[11px] text-zinc-500">
            Sharon K. G. · Master of Computer Applications (MCA)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
