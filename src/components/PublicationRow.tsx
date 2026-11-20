import { Code2, ExternalLink, FileText, Quote } from 'lucide-react';
import { Publication } from '../data/types';

interface PublicationRowProps {
  publication: Publication;
  onInspect: (pub: Publication) => void;
}

export function PublicationRow({ publication, onInspect }: PublicationRowProps) {
  return (
    <article className="py-6 border-b border-slate-200 dark:border-slate-800/90 first:pt-2 last:border-b-0">
      <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-4">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono tabular-nums font-medium text-slate-700 dark:text-slate-300">
              {publication.year}
            </span>
            <span aria-hidden="true">·</span>
            <span>{publication.publicationType}</span>
            <span aria-hidden="true">·</span>
            <span>{publication.researchArea}</span>
            {publication.isPlaceholderRecord && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-500 dark:text-slate-400">Sample Entry</span>
              </>
            )}
          </div>

          <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            <button
              type="button"
              onClick={() => onInspect(publication)}
              className="text-left hover:text-blue-700 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {publication.title}
            </button>
          </h3>

          <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {publication.authors.join(', ')}
          </p>

          <p className="mt-1 text-sm italic text-slate-600 dark:text-slate-400">
            {publication.venue}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1">
          <button
            type="button"
            onClick={() => onInspect(publication)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            <Quote className="w-3.5 h-3.5" />
            <span>Abstract &amp; BibTeX</span>
          </button>

          <button
            type="button"
            onClick={() => onInspect(publication)}
            title={`DOI: ${publication.doi}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>DOI</span>
          </button>

          <button
            type="button"
            onClick={() => onInspect(publication)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>

          {publication.codeUrl && (
            <a
              href={publication.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
