import React, { useState } from 'react';
import { CheckCircle2, ExternalLink, Mail, MapPin, Send } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { PageHeader } from '../components/PageHeader';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Prospective Student / Researcher');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.affiliation.coordinates.lat},${SITE_CONFIG.affiliation.coordinates.lng}`;

  return (
    <div>
      <PageHeader
        kicker="Location & Inquiries"
        title="Contact CLMI Lab"
        description="Reach out regarding research collaborations, academic seminars, dataset access, or prospective student applications."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Address, Affiliation, Profiles & Campus Location */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Laboratory Address &amp; Affiliation
                </h2>
                <div className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    {SITE_CONFIG.fullName}
                  </p>
                  <p>{SITE_CONFIG.affiliation.department}</p>
                  <p>{SITE_CONFIG.affiliation.university}</p>
                  <p>{SITE_CONFIG.affiliation.building}</p>
                  <p>{SITE_CONFIG.affiliation.street}</p>
                  <p>{SITE_CONFIG.affiliation.cityRegion}</p>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-[#0F2942] dark:text-blue-400 shrink-0" />
                  <span>
                    General: <strong className="font-medium">{SITE_CONFIG.contact.generalEmail}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-[#0F2942] dark:text-blue-400 shrink-0" />
                  <span>
                    Prospective Researchers:{' '}
                    <strong className="font-medium">{SITE_CONFIG.contact.admissionsEmail}</strong>
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                  Office Hours: {SITE_CONFIG.contact.officeHours}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Academic &amp; Social Profiles
                </h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {SITE_CONFIG.socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-3 py-2 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        <span>{social.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Campus Location Schematic & External Maps Link */}
            <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Campus Location &amp; Directions
                  </h2>
                  <p className="mt-1 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                    {SITE_CONFIG.affiliation.coordinates.label}
                  </p>
                </div>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 transition-colors whitespace-nowrap shrink-0"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Clean Architectural Campus Grid Schematic */}
              <div className="mt-5 relative h-60 bg-[#F8FAFC] dark:bg-[#070B14] border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
                <svg
                  viewBox="0 0 600 260"
                  className="w-full h-full text-slate-300 dark:text-slate-800"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M0 65 H600 M0 130 H600 M0 195 H600" stroke="currentColor" strokeWidth="1" />
                  <path d="M120 0 V260 M240 0 V260 M360 0 V260 M480 0 V260" stroke="currentColor" strokeWidth="1" />
                  <rect x="248" y="74" width="104" height="50" className="fill-slate-200/70 dark:fill-slate-800/70 stroke-slate-400 dark:stroke-slate-600" strokeWidth="1.2" />
                  <rect x="132" y="140" width="96" height="44" className="fill-slate-100 dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
                  <rect x="372" y="140" width="96" height="44" className="fill-slate-100 dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
                  <div className="w-9 h-9 bg-[#0F2942] dark:bg-blue-600 text-white flex items-center justify-center shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="mt-2 bg-white/95 dark:bg-[#0E1525]/95 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                      CLMI Lab · {SITE_CONFIG.affiliation.university}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      Interactive map embed disabled; use Google Maps link above for live directions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Academic Inquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Send an Academic Inquiry
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Use this form to compose a structured inquiry regarding research collaborations, student
              opportunities, or laboratory publications.
            </p>

            {submitted ? (
              <div className="mt-6 p-6 bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-[#0F2942] dark:text-blue-400 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Inquiry Recorded (Template Preview)</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your inquiry under <strong>{topic}</strong> has been
                  formatted locally. Once connected to an institutional mail endpoint, submissions will route
                  directly to {SITE_CONFIG.contact.generalEmail}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 transition-colors"
                >
                  Compose another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. / Mx. Full Name"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2"
                  >
                    Academic / Institutional Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="researcher@university.edu"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2"
                  >
                    Inquiry Category
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
                  >
                    <option value="Prospective Student / Researcher">
                      Prospective Student / Researcher
                    </option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Datasets & Open-Source Code">Datasets &amp; Open-Source Code</option>
                    <option value="Speaking & Seminar Invitation">Speaking &amp; Seminar Invitation</option>
                    <option value="General Laboratory Inquiry">General Laboratory Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your research background, proposal, or inquiry..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#0F2942] hover:bg-[#173B5E] dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
