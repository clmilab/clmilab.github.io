import { useMemo, useState } from 'react';
import { RotateCcw, Search } from 'lucide-react';
import { PUBLICATIONS } from '../data/publications';
import { RESEARCH_AREAS } from '../data/researchAreas';
import { Publication, PublicationType } from '../data/types';
import { PageHeader } from '../components/PageHeader';
import { PublicationRow } from '../components/PublicationRow';

interface PublicationsPageProps {
  onInspectPublication: (pub: Publication) => void;
}

const PUBLICATION_TYPES: PublicationType[] = [
  'Conference Paper',
  'Journal Article',
  'Workshop Paper',
  'Preprint',
  'Dataset / Benchmark'
];

export function PublicationsPage({ onInspectPublication }: PublicationsPageProps) {
  const [query, setQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const years = useMemo(() => {
    const unique = Array.from(new Set(PUBLICATIONS.map((p) => p.year)));
    return unique.sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PUBLICATIONS.filter((pub) => {
      if (selectedYear !== 'all' && String(pub.year) !== selectedYear) return false;
      if (selectedArea !== 'all' && pub.researchAreaSlug !== selectedArea) return false;
      if (selectedType !== 'all' && pub.publicationType !== selectedType) return false;
      if (!q) return true;
      return (
        pub.title.toLowerCase().includes(q) ||
        pub.authors.some((a) => a.toLowerCase().includes(q)) ||
        pub.venue.toLowerCase().includes(q) ||
        pub.researchArea.toLowerCase().includes(q) ||
        pub.doi.toLowerCase().includes(q)
      );
    }).sort((a, b) => b.year - a.year);
  }, [query, selectedYear, selectedArea, selectedType]);

  const hasActiveFilters =
    query !== '' || selectedYear !== 'all' || selectedArea !== 'all' || selectedType !== 'all';

  const resetFilters = () => {
    setQuery('');
    setSelectedYear('all');
    setSelectedArea('all');
    setSelectedType('all');
  };

  return (
    <div>
      <PageHeader
        kicker="Bibliography & Archive"
        title="Publications"
        description="Searchable index of laboratory papers, benchmarks, and manuscripts. All entries shown below are clearly marked placeholder records structured for direct laboratory curation."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5">
              <label
                htmlFor="pub-search"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2"
              >
                Search Publications
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="pub-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Title, author, venue, or DOI..."
                  className="w-full pl-9 pr-3 py-2 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="pub-year"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2"
              >
                Year
              </label>
              <select
                id="pub-year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
              >
                <option value="all">All Years</option>
                {years.map((y) => (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="pub-area"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2"
              >
                Research Area
              </label>
              <select
                id="pub-area"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
              >
                <option value="all">All Research Areas</option>
                {RESEARCH_AREAS.map((area) => (
                  <option key={area.id} value={area.slug}>
                    {area.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="pub-type"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2"
              >
                Type
              </label>
              <select
                id="pub-type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAFBFD] dark:bg-[#070B14] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0F2942] dark:focus:border-blue-400"
              >
                <option value="all">All Types</option>
                {PUBLICATION_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono tabular-nums">
              Showing {filtered.length} of {PUBLICATIONS.length} records
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 font-medium text-[#0F2942] dark:text-blue-400 hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Typography-focused Bibliography List */}
        <div className="mt-8">
          {filtered.length > 0 ? (
            <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 px-6 sm:px-8 py-2">
              {filtered.map((pub) => (
                <PublicationRow key={pub.id} publication={pub} onInspect={onInspectPublication} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-12 text-center">
              <p className="text-base font-medium text-slate-900 dark:text-slate-100">
                No publications match your selected filters.
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Try clearing one or more filter criteria to view the full bibliography.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 px-4 py-2 text-xs font-semibold bg-[#0F2942] dark:bg-blue-600 text-white hover:bg-[#173B5E] dark:hover:bg-blue-500 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
