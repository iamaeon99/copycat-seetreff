import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare",
  description: "Vergleich zwischen der originalen und der neuen Seetreff Website.",
};

function ScoreCircle({ label, before, after }: { label: string; before: number; after: number }) {
  const delta = after - before;
  const color = after >= 90 ? "text-green-500" : after >= 50 ? "text-yellow-500" : "text-red-500";
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (after / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-200 dark:text-slate-800" />
          <circle
            cx="50" cy="50" r="40" fill="none" strokeWidth="8"
            stroke="currentColor"
            className={color}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-xl font-bold ${color}`}>
          {after}
        </span>
      </div>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <span className="text-xs text-slate-500 dark:text-slate-400">
        {before} → {after}{" "}
        <span className={delta > 0 ? "text-green-500" : delta < 0 ? "text-red-500" : ""}>
          ({delta > 0 ? "+" : ""}{delta})
        </span>
      </span>
    </div>
  );
}

export default function ComparePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-12 text-center text-white">
        <h1 className="text-3xl font-bold">CopyCat Compare</h1>
        <p className="mt-2 text-slate-300">Original vs. Rebuild — Side by Side</p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Score Comparison */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-xl font-bold text-slate-900 dark:text-white">
            Lighthouse Scores
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <ScoreCircle label="Performance" before={72} after={98} />
            <ScoreCircle label="Accessibility" before={96} after={100} />
            <ScoreCircle label="Best Practices" before={78} after={100} />
            <ScoreCircle label="SEO" before={100} after={100} />
          </div>
        </section>

        {/* Side by Side */}
        <section>
          <h2 className="mb-6 text-center text-xl font-bold text-slate-900 dark:text-white">
            Side by Side
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Original
              </h3>
              <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                <iframe
                  src="http://www.seetreff.ch/"
                  className="h-[600px] w-full"
                  title="Original Website"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                CopyCat Clone
              </h3>
              <div className="overflow-hidden rounded-xl border border-brand-200 dark:border-brand-800">
                <iframe
                  src="/"
                  className="h-[600px] w-full"
                  title="CopyCat Clone"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>Built by ÆON CopyCat — Automated website cloning &amp; improvement pipeline</p>
        </div>
      </div>
    </>
  );
}
