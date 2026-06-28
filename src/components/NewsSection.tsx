"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export function NewsSection() {
  const ref = useScrollReveal<HTMLElement>();

  const articles = [
    { date: "Jun 2026", title: "India's reservoirs at 28% capacity as monsoon becomes crucial", source: "Down To Earth", category: "Reservoirs" },
    { date: "20 Jun 2026", title: "'40 days to empty': Mumbai's reservoirs fall below 10%", source: "Business Today", category: "Urban water" },
    { date: "18 May 2026", title: "Thirteen major reservoirs below 50% as river basins record rapid decline", source: "Down To Earth", category: "Reservoirs" },
    { date: "22 Aug 2025", title: "Ethanol push sparks concerns about food security, environment and health", source: "Mongabay-India", category: "Ethanol-Water" },
    { date: "29 Jan 2026", title: "Fuel over food: Economic Survey 2025-26 flags ethanol reshaping crop priorities", source: "Down To Earth", category: "Food-vs-Fuel" },
    { date: "13 Jun 2026", title: "Ethanol beyond E20: India's fuel plan needs a water-use audit", source: "Business Standard", category: "Ethanol-Water" },
    { date: "Jun 2024", title: "Tanker economy: Marathwada's sugarcane farming & water dependence", source: "Down To Earth", category: "Sugarcane" },
    { date: "14 Mar 2024", title: "Bengaluru running dry as borewells fail", source: "CNN", category: "Urban water" },
    { date: "2024", title: "India's water depletion worsens as paddy takes a toll on groundwater", source: "Down To Earth", category: "Groundwater" },
    { date: "Jan 2025", title: "Government report highlights groundwater contamination across India", source: "Mongabay-India", category: "Groundwater" },
    { date: "2026", title: "~200 districts flagged for weak-monsoon impact", source: "Down To Earth", category: "Drought" },
    { date: "Jun 2022", title: "Accelerating groundwater depletion in Punjab worries farmers", source: "Mongabay-India", category: "Groundwater" },
  ];

  const categoryColors: Record<string, string> = {
    "Reservoirs": "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Urban water": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    "Ethanol-Water": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "Food-vs-Fuel": "bg-orange-500/10 text-orange-400 border-orange-500/30",
    "Sugarcane": "bg-green-500/10 text-green-400 border-green-500/30",
    "Groundwater": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "Drought": "bg-red-500/10 text-red-400 border-red-500/30",
  };

  return (
    <section id="news" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          In the news
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          India&apos;s water stress, in the headlines
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          A curated, dated feed of credible reporting on India&apos;s water shortages — with a focus on the link to agriculture, sugarcane, paddy and ethanol.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {articles.map((article, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-4 sm:p-5 transition-all hover:border-border/80 hover:bg-secondary/40"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${categoryColors[article.category] || "bg-secondary/40 text-muted-foreground border-border"}`}>
                  {article.category}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="mt-3 text-xs sm:text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="mt-3 text-[10px] sm:text-xs text-muted-foreground">
                {article.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
