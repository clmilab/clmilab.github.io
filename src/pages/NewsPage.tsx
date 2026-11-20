import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { NEWS_ITEMS } from '../data/news';
import { NewsCategory } from '../data/types';
import { PageHeader } from '../components/PageHeader';

const NEWS_CATEGORIES: Array<NewsCategory | 'All'> = [
  'All',
  'Publications',
  'Conference Acceptances',
  'Research Awards',
  'Team',
  'Workshops & Seminars',
  'Collaborations',
  'Releases'
];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'All'>('All');

  const filtered =
    selectedCategory === 'All'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <PageHeader
        kicker="Dispatches & Milestones"
        title="News & Updates"
        description="Laboratory announcements covering manuscript acceptances, open-source releases, seminars, visiting collaborations, and new researchers joining CLMI Lab."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div
          role="tablist"
          aria-label="Filter news by category"
          className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-200 dark:border-slate-800"
        >
          {NEWS_CATEGORIES.map((category) => (
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
              {category === 'All' ? 'All Updates' : category}
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <article key={item.id} className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-3 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <time dateTime={item.isoDate} className="block font-mono tabular-nums font-medium text-slate-700 dark:text-slate-300">
                    {item.date}
                  </time>
                  <span className="block">{item.category}</span>
                </div>

                <div className="md:col-span-9 space-y-2.5">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                    {item.summary}
                  </p>
                  {item.linkPath && item.linkLabel && (
                    <div className="pt-1">
                      <Link
                        to={item.linkPath}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F2942] dark:text-blue-400 hover:underline"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="p-12 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                No updates currently listed under {selectedCategory}.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className="mt-4 px-4 py-2 text-xs font-semibold bg-[#0F2942] dark:bg-blue-600 text-white"
              >
                Show all updates
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
