import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, Send, ExternalLink, MessageSquare, Phone, PhoneCall } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
  isMobileMockup?: boolean;
}

export function Contact({ onShowToast, isMobileMockup = false }: ContactProps) {
  const { personal, socialLinks } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    onShowToast('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setStatusMessage('Please provide your email address and message.');
      return;
    }

    // Construct standard mailto link to Sharon's inbox
    const subjectEncoded = encodeURIComponent(
      formData.subject || `Full Stack Developer Opportunity for Sharon K G from ${formData.name || 'Recruiter'}`
    );
    const bodyEncoded = encodeURIComponent(
      `Hi Sharon,\n\n${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`
    );

    const mailtoUrl = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setStatusMessage('Your email client is opening with your formatted message!');
    onShowToast('Opening email client...');
  };

  const handleCopyMessage = () => {
    if (!formData.message) {
      setStatusMessage('Please enter a message before copying.');
      return;
    }

    const formatted = `Hi Sharon,\n\n${formData.message}\n\nFrom: ${formData.name || 'Anonymous'} (${formData.email || 'No email provided'})`;
    navigator.clipboard.writeText(formatted);
    onShowToast('Message copied to clipboard! Ready to paste into LinkedIn or email.');
    setStatusMessage('Message copied! You can paste it anywhere.');
  };

  const githubLink = socialLinks.find((l) => l.platform === 'GitHub');
  const linkedinLink = socialLinks.find((l) => l.platform === 'LinkedIn');

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            05. Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Contact & Opportunities
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I am actively seeking software development roles to apply my technical expertise, develop scalable applications, and contribute to effective solutions. Feel free to call, email, or connect on LinkedIn.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className={`grid grid-cols-1 ${isMobileMockup ? '' : 'lg:grid-cols-12'} gap-8 items-start`}>
          {/* Left Column: Direct Contact Info & Socials */}
          <div className={`${isMobileMockup ? '' : 'lg:col-span-5'} space-y-4`}>
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                Primary Contact Email
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-bold text-zinc-100 hover:text-emerald-400 transition-colors break-all"
              >
                {personal.email}
              </a>
              <p className="text-xs text-zinc-400 mt-2">
                Fastest response for interview invitations and project discussions.
              </p>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${personal.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
                    title="Direct Call"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                Direct Phone
              </div>
              <a
                href={`tel:${personal.phone}`}
                className="text-base sm:text-lg font-bold font-mono text-zinc-100 hover:text-teal-400 transition-colors"
              >
                {personal.phoneDisplay}
              </a>
              <p className="text-xs text-zinc-400 mt-2">
                Available for phone interviews and hiring discussions.
              </p>
            </div>

            {/* Social & Profile Channels */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Professional Profiles
              </h3>

              {/* LinkedIn */}
              {linkedinLink && (
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-850 hover:border-zinc-750 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">
                        {linkedinLink.displayValue}
                      </div>
                    </div>
                  </div>
                  <a
                    href={linkedinLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title="Open Sharon's LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* GitHub */}
              {githubLink && (
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-850 hover:border-zinc-750 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800 text-zinc-200">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">
                        GitHub Profile & Repos
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">
                        {githubLink.displayValue}
                      </div>
                    </div>
                  </div>
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title="Open Sharon's GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-850">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-200">
                    Location & Mobility
                  </div>
                  <div className="text-xs text-zinc-400">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Composer */}
          <div className={`${isMobileMockup ? 'mt-6' : 'lg:col-span-7'}`}>
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-zinc-100">
                  Send a Direct Message to Sharon
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the details below to launch your email client with this message pre-formatted, or copy the drafted text with a single click.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      Your Name / Company
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. HR Manager / Tech Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      Your Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-zinc-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Full Stack Developer Role / Interview Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-zinc-300 mb-1.5"
                  >
                    Your Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Hi Sharon, we reviewed your projects (Campus Vote, Ticket Management System) and would like to invite you for an interview..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300">
                    {statusMessage}
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Formatted Text</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
