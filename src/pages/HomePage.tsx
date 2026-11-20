import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SITE_CONFIG } from '../data/site';
import { RESEARCH_AREAS } from '../data/researchAreas';
import { RESEARCH_PROJECTS } from '../data/projects';
import { PUBLICATIONS } from '../data/publications';
import { NEWS_ITEMS } from '../data/news';
import { Publication } from '../data/types';
import { ResearchVisual } from '../components/ResearchVisual';
import { PublicationRow } from '../components/PublicationRow';

interface HomePageProps {
  onInspectPublication: (pub: Publication) => void;
}

export function HomePage({ onInspectPublication }: HomePageProps) {
  const featuredProjects = RESEARCH_PROJECTS.filter((p) => p.featured);
  const recentPublications = PUBLICATIONS.slice(0, 4);
  const latestNews = NEWS_ITEMS.slice(0, 4);

  return (
    <div>
      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-[#080E1A] text-white border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0">
          <img
            src={SITE_CONFIG.heroImage}
            alt="Abstract multimodal representation showing interconnected linguistic and visual manifolds"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-55"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/80 to-[#070B14]/45"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-blue-300">
              {SITE_CONFIG.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-white leading-[1.12] text-balance">
              {SITE_CONFIG.heroHeadline}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {SITE_CONFIG.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-white text-[#0A1628] hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Our Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/people"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-slate-400/70 text-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Meet Our Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Laboratory Introduction */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Laboratory Mission
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50 leading-snug text-balance">
                {SITE_CONFIG.introHeading}
              </h2>
              <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {SITE_CONFIG.introParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                {SITE_CONFIG.introPillars.map((pillar) => (
                  <div key={pillar.index} className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-500 tabular-nums shrink-0">
                      {pillar.index}.
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure>
                <ResearchVisual
                  src={SITE_CONFIG.labEnvironmentImage}
                  alt="University AI research laboratory and seminar room with natural daylight"
                  aspectClass="aspect-[16/10]"
                />
                <figcaption className="mt-3 text-xs text-slate-500 dark:text-slate-400 italic">
                  Fig. 0 — Collaborative seminar and computational research environment ({SITE_CONFIG.affiliation.university}).
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Research Areas */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-[#FAFBFD] dark:bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-slate-200 dark:border-slate-800">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Research Directions
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Core Research Areas
              </h2>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2942] dark:text-blue-400 hover:underline whitespace-nowrap shrink-0"
            >
              <span>Explore full research agenda</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
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
                    aspectClass="aspect-[16/10]"
                    className="mb-5"
                  />
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                    <span>{area.index}</span>
                    <span aria-hidden="true">/</span>
                    <span>Research Area</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {area.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {area.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
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
        </div>
      </section>

      {/* 5. Featured Research Projects */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-slate-200 dark:border-slate-800">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Selected Inquiries
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Featured Research Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2942] dark:text-blue-400 hover:underline whitespace-nowrap shrink-0"
            >
              <span>All laboratory projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {featuredProjects.map((project) => {
              const linkedPubs = PUBLICATIONS.filter((p) => project.relatedPublicationIds.includes(p.id));
              return (
                <article key={project.id} className="py-8 first:pt-8 last:pb-2">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-3 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                      <p className="font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        {project.status}
                      </p>
                      <p>{project.domain}</p>
                      <p className="font-mono tabular-nums">{project.timeframe}</p>
                    </div>

                    <div className="lg:col-span-9 space-y-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                        {project.abstract}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                        <span>
                          <strong className="font-medium text-slate-700 dark:text-slate-200">Team:</strong>{' '}
                          {project.teamMembers.join(', ')}
                        </span>
                        {linkedPubs.length > 0 && (
                          <span>
                            <strong className="font-medium text-slate-700 dark:text-slate-200">
                              Related papers:
                            </strong>{' '}
                            {linkedPubs.map((p) => `${p.year}`).join(', ')} ({linkedPubs.length})
                          </span>
                        )}
                      </div>

                      <div className="pt-2">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2942] dark:text-blue-400 hover:underline"
                        >
                          <span>View project details</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Recent Publications */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-[#FAFBFD] dark:bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Scholarly Output
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Recent Publications
              </h2>
            </div>
            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2942] dark:text-blue-400 hover:underline whitespace-nowrap shrink-0"
            >
              <span>Search publication database</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-4">
            {recentPublications.map((pub) => (
              <PublicationRow key={pub.id} publication={pub} onInspect={onInspectPublication} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Latest News */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Dispatches &amp; Events
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Latest News &amp; Updates
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2942] dark:text-blue-400 hover:underline whitespace-nowrap shrink-0"
            >
              <span>All news &amp; announcements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((item) => (
              <article
                key={item.id}
                className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <time dateTime={item.isoDate} className="font-mono tabular-nums">
                      {item.date}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {item.linkPath && item.linkLabel && (
                  <div className="mt-4">
                    <Link
                      to={item.linkPath}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#0F2942] dark:text-blue-400 hover:underline"
                    >
                      <span>{item.linkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Join the Laboratory CTA */}
      <section className="bg-[#0F2942] dark:bg-[#0C1629] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-blue-200">
                Prospective Researchers
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
                Collaborate and Conduct Research at CLMI Lab
              </h2>
              <p className="text-base text-slate-200 max-w-2xl leading-relaxed">
                We welcome curious undergraduate, master’s, and doctoral students as well as visiting scholars
                passionate about language understanding, multimodal learning, and trustworthy machine intelligence.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-4">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-white text-[#0F2942] hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-blue-200/50 text-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Contact the Lab</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
