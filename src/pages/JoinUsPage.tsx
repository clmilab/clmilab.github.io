import { useState } from 'react';
import { ArrowRight, Check, Copy, Mail } from 'lucide-react';
import { OPPORTUNITY_ROLES } from '../data/opportunities';
import { SITE_CONFIG } from '../data/site';
import { Link } from '../context/RouterContext';
import { PageHeader } from '../components/PageHeader';
import { ResearchVisual } from '../components/ResearchVisual';

export function JoinUsPage() {
  const [selectedRoleId, setSelectedRoleId] = useState(OPPORTUNITY_ROLES[0].id);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const activeRole =
    OPPORTUNITY_ROLES.find((r) => r.id === selectedRoleId) ?? OPPORTUNITY_ROLES[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('join@clmi-lab.org');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div>
      <PageHeader
        kicker="Research Opportunities"
        title="Join CLMI Lab"
        description="We recruit motivated students and researchers excited to investigate casual language, multimodal intelligence, retrieval grounding, and trustworthy AI in a collaborative academic setting."
      />

      {/* Research Environment */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Research Environment
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Mentorship, Open Science &amp; Shared Inquiry
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                CLMI Lab fosters a collegial, intellectually rigorous culture emphasizing first-principles thinking,
                open-source reproducibility, and close faculty-student mentorship. Researchers participate in weekly
                reading groups, cross-disciplinary project teams, and collaborative benchmark engineering.
              </p>
              <div className="pt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    Seminar Cadence:
                  </strong>{' '}
                  {SITE_CONFIG.contact.seminarSchedule}
                </p>
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    Admissions Inquiries:
                  </strong>{' '}
                  {SITE_CONFIG.contact.admissionsEmail}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ResearchVisual
                src={SITE_CONFIG.labEnvironmentImage}
                alt="CLMI Lab collaborative research space and seminar room"
                aspectClass="aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Role Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Available Tracks
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Opportunities by Academic Stage
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Track Selector */}
          <div
            role="tablist"
            aria-label="Academic opportunity tracks"
            className="lg:col-span-4 flex flex-col border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1525] divide-y divide-slate-200 dark:divide-slate-800"
          >
            {OPPORTUNITY_ROLES.map((role) => {
              const selected = role.id === activeRole.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setSelectedRoleId(role.id)}
                  className={`text-left px-5 py-4 transition-colors ${
                    selected
                      ? 'bg-[#0F2942] text-white dark:bg-blue-600'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-900/60 text-slate-900 dark:text-slate-100'
                  }`}
                >
                  <span className="block text-sm font-semibold">{role.title}</span>
                  <span
                    className={`mt-1 block text-xs ${
                      selected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {role.level}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Track Details */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="pb-5 border-b border-slate-200 dark:border-slate-800">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {activeRole.level} · {activeRole.commitment}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {activeRole.title}
              </h3>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeRole.summary}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Expected Qualifications
              </h4>
              <ul className="mt-3 space-y-2.5">
                {activeRole.qualifications.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <span className="font-mono text-xs text-slate-400 tabular-nums shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Application Instructions
              </h4>
              <ul className="mt-3 space-y-2.5">
                {activeRole.applicationSteps.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <span className="font-mono text-xs text-slate-400 tabular-nums shrink-0">
                      →
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#0F2942] hover:bg-[#173B5E] dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Research Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied join@clmi-lab.org' : 'Copy Admissions Email'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
