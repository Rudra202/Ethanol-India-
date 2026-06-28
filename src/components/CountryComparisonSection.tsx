"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const countries = [
  {
    name: "India",
    flag: "🇮🇳",
    currentBlend: "E20",
    mandate: "20% nationwide since Apr 2026",
    nextTarget: "E30 by 2030 (proposed)",
    feedstocks: "Sugarcane, maize, rice, molasses",
    waterConcern: "High — 2,860–10,790 L/L crop water",
    flexFuel: "No FFVs; ~20% vehicles E20-compliant",
    color: "border-primary/30",
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    currentBlend: "E27",
    mandate: "27% blend (mandated); up to E100 available",
    nextTarget: "E30 under discussion",
    feedstocks: "Sugarcane (dominant)",
    waterConcern: "Low — mostly rain-fed, ~1,500 L/L",
    flexFuel: "~85% of car fleet are FFVs",
    color: "border-chart-1/30",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    currentBlend: "E10",
    mandate: "10% (national); E15 allowed in some states",
    nextTarget: "Sustainable aviation fuel (SAF) push",
    feedstocks: "Maize (corn) ~95%",
    waterConcern: "Moderate — ~1,910 L/L global avg",
    flexFuel: "~20M FFVs on road, but E85 usage is low",
    color: "border-accent/30",
  },
  {
    name: "European Union",
    flag: "🇪🇺",
    currentBlend: "E5 / E10",
    mandate: "Varies by country (E10 in France, Germany, etc.)",
    nextTarget: "Renewable Energy Directive III (2030)",
    feedstocks: "Wheat, maize, sugar beet, waste oils",
    waterConcern: "Low-moderate — mostly rain-fed wheat/beet",
    flexFuel: "Limited FFV adoption; mainly in Sweden/France",
    color: "border-warning/30",
  },
  {
    name: "China",
    flag: "🇨🇳",
    currentBlend: "E10",
    mandate: "E10 in 12 provinces (not national)",
    nextTarget: "Expanding to more provinces",
    feedstocks: "Maize, cassava, crop residues",
    waterConcern: "Moderate-high — groundwater stress in north",
    flexFuel: "Minimal FFV penetration",
    color: "border-destructive/30",
  },
];

export function CountryComparisonSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="comparison" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Global perspective
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          How India&apos;s ethanol push compares globally
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          India has jumped from E10 to E20 faster than most major economies. Here is how its blend mandate, feedstocks, water footprint, and flex-fuel adoption stack up against Brazil, the US, the EU, and China.
        </p>

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {countries.map((c) => (
            <div
              key={c.name}
              className={`rounded-xl border ${c.color} bg-card p-5 sm:p-6 transition-all hover:bg-secondary/40`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">{c.name}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/40 px-2 py-0.5 text-xs font-medium">
                    Currently {c.currentBlend}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground shrink-0">Mandate:</span>
                  <span className="text-right">{c.mandate}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground shrink-0">Target:</span>
                  <span className="text-right">{c.nextTarget}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground shrink-0">Feedstocks:</span>
                  <span className="text-right">{c.feedstocks}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground shrink-0">Water:</span>
                  <span className="text-right">{c.waterConcern}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground shrink-0">Flex-fuel:</span>
                  <span className="text-right">{c.flexFuel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 rounded-xl border border-border bg-card p-4 sm:p-5">
          <h3 className="text-sm font-semibold">Key takeaway</h3>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            India&apos;s E20 mandate is ambitious — leapfrogging the US (E10) and approaching Brazil (E27) in blend target — but does so with some of the most water-intensive feedstocks in the world and minimal flex-fuel vehicle adoption. Brazil achieves E27 with ~85% FFV fleet and rain-fed sugarcane at ~1,500 L/L; India&apos;s current feedstock mix averages ~5,000 L/L.
          </p>
        </div>
      </div>
    </section>
  );
}
