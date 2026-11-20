interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
}

export function PageHeader({ kicker, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A101D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          {kicker}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 max-w-4xl text-balance">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
