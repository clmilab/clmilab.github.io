import { useState } from 'react';
import { ArrowRight, Code2, Database } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { RESEARCH_PROJECTS } from '../data/projects';
import { PUBLICATIONS } from '../data/publications';
import { ProjectStatus } from '../data/types';
import { PageHeader } from '../components/PageHeader';
import { ResearchVisual } from '../components/ResearchVisual';

const PROJECT_FILTERS: Array<ProjectStatus | 'All'> = [
  'All',
  'Active',
  'Completed',
  'Collaborative',
  'Open-Source Tool & Dataset'
];

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectStatus | 'All'>('All');

  const filtered =
    filter === 'All'
      ? RESEARCH_PROJECTS
      : RESEARCH_PROJECTS.filter((project) => project.status === filter);

  return (
    <div>
      <PageHeader
        kicker="Research Portfolio"
        title="Projects & Open-Source Initiatives"
        description="Active investigations, completed research programs, collaborative working groups, and open-source software and benchmarks developed at CLMI Lab."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div
          role="tablist"
          aria-label="Filter projects by status"
          className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-200 dark:border-slate-800"
        >
          {PROJECT_FILTERS.map((status) => (
            <button
              key={status}
              type="button"
              role="tab"
              aria-selected={filter === status}
              onClick={() => setFilter(status)}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                filter === status
                  ? 'bg-[#0F2942] border-[#0F2942] text-white dark:bg-blue-600 dark:border-blue-600'
                  : 'bg-white dark:bg-[#0E1525] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
              }`}
            >
              {status === 'All' ? 'All Projects' : status}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((project) => {
            const linkedCount = PUBLICATIONS.filter((p) =>
              project.relatedPublicationIds.includes(p.id)
            ).length;

            return (
              <article
                key={project.id}
                className="group bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <div>
                  <ResearchVisual
                    src={project.image}
                    alt={project.title}
                    aspectClass="aspect-[16/9]"
                    className="mb-6"
                  />

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      {project.status}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.domain}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.timeframe}</span>
                  </div>

                  <h2 className="mt-2.5 text-xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.abstract}
                  </p>

                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    <strong className="font-semibold text-slate-700 dark:text-slate-200">
                      Team:
                    </strong>{' '}
                    {project.teamMembers.join(', ')}
                    {linkedCount > 0 && (
                      <>
                        {' · '}
                        <span className="font-mono tabular-nums">
                          {linkedCount} linked {linkedCount === 1 ? 'paper' : 'papers'}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F2942] dark:text-blue-400 hover:underline"
                  >
                    <span>View project details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.datasetUrl && (
                      <a
                        href={project.datasetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white"
                      >
                        <Database className="w-3.5 h-3.5" />
                        <span>Dataset</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
