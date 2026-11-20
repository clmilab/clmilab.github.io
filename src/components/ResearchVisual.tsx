import { useState } from 'react';
import { ResearchArea } from '../data/types';

interface ResearchVisualProps {
  src: string;
  alt: string;
  motif?: ResearchArea['motif'];
  aspectClass?: string;
  className?: string;
}

export function ResearchVisual({
  src,
  alt,
  motif = 'lattice',
  aspectClass = 'aspect-[4/3]',
  className = ''
}: ResearchVisualProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${aspectClass} ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/40 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/30 p-6">
          <MotifSvg motif={motif} />
        </div>
      )}
    </div>
  );
}

function MotifSvg({ motif }: { motif: ResearchArea['motif'] }) {
  return (
    <svg
      viewBox="0 0 160 120"
      className="w-28 h-24 text-slate-400 dark:text-slate-600"
      fill="none"
      aria-hidden="true"
    >
      <rect x="12" y="12" width="136" height="96" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      {motif === 'lattice' || motif === 'lingual' ? (
        <>
          <circle cx="44" cy="40" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="80" cy="60" r="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="116" cy="40" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="116" cy="84" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M50 43 L73 56 M88 56 L110 43 M87 65 L110 81" stroke="currentColor" strokeWidth="1.2" />
        </>
      ) : motif === 'crossmodal' || motif === 'spatial' ? (
        <>
          <rect x="34" y="28" width="44" height="44" stroke="currentColor" strokeWidth="1.4" />
          <rect x="64" y="46" width="58" height="44" stroke="currentColor" strokeWidth="1.4" />
          <line x1="34" y1="28" x2="64" y2="46" stroke="currentColor" strokeWidth="1" />
          <line x1="78" y1="72" x2="122" y2="90" stroke="currentColor" strokeWidth="1" />
        </>
      ) : (
        <>
          <path d="M36 86 C56 32, 104 32, 124 86" stroke="currentColor" strokeWidth="1.5" />
          <line x1="28" y1="86" x2="132" y2="86" stroke="currentColor" strokeWidth="1" />
          <circle cx="80" cy="46" r="4" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
