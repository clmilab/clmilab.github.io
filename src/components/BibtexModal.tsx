import { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { Publication } from '../data/types';

interface BibtexModalProps {
  publication: Publication | null;
  onClose: () => void;
}

export function BibtexModal({ publication, onClose }: BibtexModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!publication) return;
    setCopied(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [publication, onClose]);

  if (!publication) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(publication.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-[2px] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bibtex-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0E1525] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Citation &amp; Abstract · {publication.year}
            </p>
            <h3
              id="bibtex-modal-title"
              className="mt-1.5 text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug"
            >
              {publication.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close citation dialog"
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 space-y-5">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Abstract
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {publication.abstract}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                BibTeX Record
              </h4>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied BibTeX' : 'Copy BibTeX'}</span>
              </button>
            </div>
            <pre className="mt-2 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 overflow-x-auto leading-relaxed">
              {publication.bibtex}
            </pre>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono">DOI: {publication.doi}</span>
            <span>{publication.isPlaceholderRecord ? 'Sample Placeholder Entry' : 'Verified Record'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
