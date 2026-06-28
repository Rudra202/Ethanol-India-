"use client";

import { useRef, useCallback } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  chartId: string;
}

export function ChartCard({ title, subtitle, children, chartId }: ChartCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTweet = useCallback(() => {
    const text = encodeURIComponent(`📊 ${title} — Ethanol India\n\nCheck out the data: https://e20watch.in\n#EthanolIndia #E20`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "noopener,noreferrer");
  }, [title]);

  return (
    <div
      ref={cardRef}
      id={chartId}
      className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-5 sm:p-6 group/chart"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          {subtitle && <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{subtitle}</div>}
        </div>
        <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover/chart:opacity-100 transition-opacity">
          <button
            onClick={handleTweet}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
            title="Share on X / Twitter"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <button
            onClick={() => { navigator.clipboard.writeText(`https://e20watch.in#${chartId}`); }}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
            title="Copy link to chart"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
