import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Research', to: '/research' },
  { label: 'Publications', to: '/publications' },
  { label: 'People', to: '/people' },
  { label: 'Projects', to: '/projects' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' }
];

export function Navbar() {
  const { path } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === '/') return path === '/';
    return path === to || path.startsWith(`${to}/`);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#070B14]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Brand mark & laboratory name */}
        <Link
          to="/"
          aria-label="CLMI Lab — Casual Language and Multimodal Intelligence Lab"
          className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:focus-visible:ring-blue-400"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 text-[#0F2942] dark:text-blue-400 shrink-0"
            fill="none"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="21" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13.5 13.5 L18.5 18.5 M21 11 L11 21" stroke="currentColor" strokeWidth="1.25" />
          </svg>
          <span className="font-editorial text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            CLMI Lab
          </span>
          <span className="hidden xl:inline text-xs font-medium text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-3">
            Casual Language &amp; Multimodal Intelligence Lab
          </span>
        </Link>

        {/* Zone 2: Single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'text-[#0F2942] dark:text-blue-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[19px] h-[2px] bg-[#0F2942] dark:bg-blue-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Theme toggle & Join Us primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            to="/join"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide bg-[#0F2942] hover:bg-[#173B5E] dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-colors whitespace-nowrap shrink-0"
          >
            Join Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070B14] px-4 py-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {[...NAV_LINKS, { label: 'Join Us', to: '/join' }].map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-slate-100 dark:bg-slate-800/80 text-[#0F2942] dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
