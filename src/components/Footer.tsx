import { Link } from '../context/RouterContext';
import { RESEARCH_AREAS } from '../data/researchAreas';
import { SITE_CONFIG } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#05080F] text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Branding & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 32 32"
                className="w-6 h-6 text-[#0F2942] dark:text-blue-400 shrink-0"
                fill="none"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="21" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13.5 13.5 L18.5 18.5 M21 11 L11 21" stroke="currentColor" strokeWidth="1.25" />
              </svg>
              <span className="font-editorial text-lg font-semibold text-slate-900 dark:text-slate-100">
                {SITE_CONFIG.shortName}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {SITE_CONFIG.fullName}
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              Advancing foundational and applied research in natural language processing, multimodal intelligence,
              computer vision, and trustworthy AI systems.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed max-w-sm">
              {SITE_CONFIG.affiliation.department}
              <br />
              {SITE_CONFIG.affiliation.university}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Laboratory
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  People
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  News &amp; Updates
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Research Themes
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {RESEARCH_AREAS.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link
                    to={`/research/${area.slug}`}
                    className="hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/research"
                  className="text-[#0F2942] dark:text-blue-400 font-medium hover:underline"
                >
                  All 9 research areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Academic Profiles */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Contact &amp; Profiles
            </h3>
            <div className="text-sm space-y-1.5">
              <p>{SITE_CONFIG.affiliation.building}</p>
              <p>{SITE_CONFIG.affiliation.cityRegion}</p>
              <p className="pt-1">
                <Link
                  to="/contact"
                  className="text-[#0F2942] dark:text-blue-400 font-medium hover:underline"
                >
                  {SITE_CONFIG.contact.generalEmail}
                </Link>
              </p>
            </div>
            <ul className="pt-2 space-y-1.5 text-sm">
              {SITE_CONFIG.socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName} ({SITE_CONFIG.shortName}). All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">{SITE_CONFIG.placeholderNotice}</p>
        </div>
      </div>
    </footer>
  );
}
