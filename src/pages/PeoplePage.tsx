import { useState } from 'react';
import { ExternalLink, Globe, GraduationCap } from 'lucide-react';
import { MEMBER_CATEGORIES, TEAM_MEMBERS } from '../data/people';
import { MemberCategory } from '../data/types';
import { PageHeader } from '../components/PageHeader';

export function PeoplePage() {
  const [selectedCategory, setSelectedCategory] = useState<MemberCategory | 'All'>('All');

  const visibleCategories =
    selectedCategory === 'All'
      ? MEMBER_CATEGORIES
      : MEMBER_CATEGORIES.filter((cat) => cat === selectedCategory);

  return (
    <div>
      <PageHeader
        kicker="Research Community"
        title="People"
        description="Faculty, postdoctoral fellows, graduate and undergraduate researchers, and alumni contributing to CLMI Lab. Profile entries below are clearly marked placeholders awaiting verified member biographies and photographs."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter team members by academic role"
          className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-200 dark:border-slate-800"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'All'}
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'All'
                ? 'bg-[#0F2942] border-[#0F2942] text-white dark:bg-blue-600 dark:border-blue-600'
                : 'bg-white dark:bg-[#0E1525] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
            }`}
          >
            All Members
          </button>
          {MEMBER_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === category
                  ? 'bg-[#0F2942] border-[#0F2942] text-white dark:bg-blue-600 dark:border-blue-600'
                  : 'bg-white dark:bg-[#0E1525] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Team Groups */}
        <div className="mt-12 space-y-14">
          {visibleCategories.map((category) => {
            const members = TEAM_MEMBERS.filter((m) => m.category === category);
            if (members.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-baseline justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                    {category}
                  </h2>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                    {members.length} {members.length === 1 ? 'Profile' : 'Profiles'}
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {members.map((member) => (
                    <article
                      key={member.id}
                      className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 flex flex-col sm:flex-row gap-6"
                    >
                      {/* Academic Portrait Placeholder Frame */}
                      <div className="w-24 h-28 sm:w-28 sm:h-32 shrink-0 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center p-2">
                        <span className="font-editorial text-2xl font-semibold text-[#0F2942] dark:text-blue-400">
                          {member.initials}
                        </span>
                        <span className="mt-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Photo Slot
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#0F2942] dark:text-blue-400">
                          {member.position}
                        </p>
                        {member.affiliationNote && (
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                            {member.affiliationNote}
                          </p>
                        )}

                        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                          <strong className="font-semibold text-slate-700 dark:text-slate-300">
                            Interests:
                          </strong>{' '}
                          {member.interests.join(' · ')}
                        </p>

                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {member.biography}
                        </p>

                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                          {member.links.googleScholar && (
                            <a
                              href={member.links.googleScholar}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 hover:text-[#0F2942] dark:hover:text-blue-400 transition-colors"
                            >
                              <GraduationCap className="w-3.5 h-3.5" />
                              <span>Google Scholar</span>
                            </a>
                          )}
                          {member.links.orcid && (
                            <a
                              href={member.links.orcid}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 hover:text-[#0F2942] dark:hover:text-blue-400 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>ORCID</span>
                            </a>
                          )}
                          {member.links.github && (
                            <a
                              href={member.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 hover:text-[#0F2942] dark:hover:text-blue-400 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>GitHub</span>
                            </a>
                          )}
                          {member.links.website && (
                            <a
                              href={member.links.website}
                              className="inline-flex items-center gap-1 hover:text-[#0F2942] dark:hover:text-blue-400 transition-colors"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              <span>Website</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
