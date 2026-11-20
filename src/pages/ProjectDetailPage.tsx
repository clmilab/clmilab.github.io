import { ArrowLeft, Code2, Database } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { RESEARCH_PROJECTS } from '../data/projects';
import { PUBLICATIONS } from '../data/publications';
import { Publication } from '../data/types';
import { ResearchVisual } from '../components/ResearchVisual';
import { PublicationRow } from '../components/PublicationRow';

interface ProjectDetailPageProps {
  slug: string;
  onInspectPublication: (pub: Publication) => void;
}

export function ProjectDetailPage({ slug, onInspectPublication }: ProjectDetailPageProps) {
  const project = RESEARCH_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
          Project Not Found
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
          The requested project dossier could not be found.
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0F2942] dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>
      </div>
    );
  }

  const relatedPubs = PUBLICATIONS.filter((p) => project.relatedPublicationIds.includes(p.id));

  return (
    <div>
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Laboratory Projects</span>
          </Link>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {project.status}
                </span>
                <span aria-hidden="true">·</span>
                <span>{project.domain}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{project.timeframe}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 leading-tight text-balance">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.abstract}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#0F2942] hover:bg-[#173B5E] dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Code Repository</span>
                  </a>
                )}
                {project.datasetUrl && (
                  <a
                    href={project.datasetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 transition-colors"
                  >
                    <Database className="w-4 h-4" />
                    <span>Dataset &amp; Artifacts</span>
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResearchVisual
                src={project.image}
                alt={project.title}
                aspectClass="aspect-[4/3]"
              />
              <div className="mt-4 bg-[#FAFBFD] dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-4 text-xs space-y-2">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500 dark:text-slate-400">Research Area</span>
                  <Link
                    to={`/research/${project.researchAreaSlug}`}
                    className="font-medium text-[#0F2942] dark:text-blue-400 hover:underline text-right"
                  >
                    {project.domain}
                  </Link>
                </div>
                <div className="flex justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-2">
                  <span className="text-slate-500 dark:text-slate-400">Contributors</span>
                  <span className="text-slate-800 dark:text-slate-200 text-right">
                    {project.teamMembers.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800 bg-[#FAFBFD] dark:bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Research Methodology
              </h2>
              <ul className="mt-5 space-y-4">
                {project.methodology.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <span className="font-mono text-xs text-slate-400 tabular-nums shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Research Deliverables &amp; Outcomes
              </h2>
              <ul className="mt-5 space-y-3">
                {project.expectedOutcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-b-0 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {relatedPubs.length > 0 && (
        <section className="bg-white dark:bg-[#0A101D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
              Associated Publications
            </h2>
            <div>
              {relatedPubs.map((pub) => (
                <PublicationRow key={pub.id} publication={pub} onInspect={onInspectPublication} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
