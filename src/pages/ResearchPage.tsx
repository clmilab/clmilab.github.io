import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { RESEARCH_AREAS } from '../data/researchAreas';
import { RESEARCH_PROJECTS } from '../data/projects';
import { PUBLICATIONS } from '../data/publications';
import { Publication } from '../data/types';
import { PageHeader } from '../components/PageHeader';
import { ResearchVisual } from '../components/ResearchVisual';
import { PublicationRow } from '../components/PublicationRow';

interface ResearchPageProps {
  slug?: string;
  onInspectPublication: (pub: Publication) => void;
}

export function ResearchPage({ slug, onInspectPublication }: ResearchPageProps) {
  if (slug) {
    const area = RESEARCH_AREAS.find((a) => a.slug === slug);
    if (!area) {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-sm font-mono text-slate-500">Research Area Not Found</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
            The requested research direction could not be located.
          </h1>
          <Link
            to="/research"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0F2942] dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to all research areas</span>
          </Link>
        </div>
      );
    }

    const relatedProjects = RESEARCH_PROJECTS.filter((p) => p.researchAreaSlug === area.slug);
    const relatedPubs = PUBLICATIONS.filter((p) => p.researchAreaSlug === area.slug);

    return (
      <div>
        <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Research Areas</span>
            </Link>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-5">
                <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 tabular-nums">
                  Research Theme {area.index}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-slate-50 text-balance">
                  {area.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {area.overview}
                </p>
              </div>

              <div className="lg:col-span-5">
                <figure>
                  <ResearchVisual
                    src={area.image}
                    alt={area.title}
                    motif={area.motif}
                    aspectClass="aspect-[4/3]"
                  />
                  <figcaption className="mt-2.5 text-xs italic text-slate-500 dark:text-slate-400">
                    {area.figureCaption}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 dark:border-slate-800 bg-[#FAFBFD] dark:bg-[#070B14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Core Research Questions
                </h2>
                <ul className="mt-5 space-y-4">
                  {area.keyQuestions.map((question, idx) => (
                    <li key={idx} className="flex items-baseline gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="font-mono text-xs text-slate-400 tabular-nums shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Methodological Foundations
                </h2>
                <ul className="mt-5 space-y-3">
                  {area.methodologies.map((method) => (
                    <li
                      key={method}
                      className="py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-b-0 text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                Associated Projects
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((proj) => (
                  <article
                    key={proj.id}
                    className="border border-slate-200 dark:border-slate-800 p-6 bg-[#FAFBFD] dark:bg-[#0E1525]"
                  >
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {proj.status} · {proj.timeframe}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {proj.abstract}
                    </p>
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F2942] dark:text-blue-400 hover:underline"
                    >
                      <span>Project dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedPubs.length > 0 && (
          <section className="bg-[#FAFBFD] dark:bg-[#070B14]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                Selected Publications in {area.shortTitle}
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

  return (
    <div>
      <PageHeader
        kicker="Research Agenda"
        title="Research Areas"
        description="CLMI Lab investigates nine interconnected pillars spanning foundational machine learning, natural language pragmatics, multimodal perception, retrieval grounding, and trustworthy deployment."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area) => (
            <article
              key={area.id}
              className="group flex flex-col justify-between bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 p-6 transition-colors hover:border-slate-400 dark:hover:border-slate-600"
            >
              <div>
                <ResearchVisual
                  src={area.image}
                  alt={area.title}
                  motif={area.motif}
                  aspectClass="aspect-[4/3]"
                  className="mb-5"
                />
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                  <span>{area.index}</span>
                  <span aria-hidden="true">/</span>
                  <span>Research Pillar</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {area.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Focus: {area.methodologies.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  to={`/research/${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F2942] dark:text-blue-400 hover:underline"
                >
                  <span>Explore area</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
