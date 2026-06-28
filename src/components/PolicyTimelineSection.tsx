"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const timeline = [
  { year: "2003", event: "EBP programme launched", detail: "Ethanol Blended Petrol programme begins with E5 target in 9 states and 4 UTs." },
  { year: "2006", event: "E5 mandate expanded nationally", detail: "5% ethanol blending mandated across India; OMCs directed to procure ethanol." },
  { year: "2014", event: "ESY system introduced", detail: "Ethanol Supply Year (Dec-Nov) framework established for OMC procurement." },
  { year: "2018", event: "E20 target set (original: 2030)", detail: "NITI Aayog roadmap sets 20% blending target by 2030, with E10 by 2022." },
  { year: "2019", event: "E10 achieved early", detail: "India hits 10% blending ahead of schedule, prompting accelerated targets." },
  { year: "2021", event: "E20 target advanced to 2025", detail: "Government advances E20 target from 2030 to 2025; ethanol产能 expansion." },
  { year: "2023", event: "E20 material-compliant vehicles", detail: "All new vehicles from Apr 2023 must have E20-compatible fuel system materials." },
  { year: "2024", event: "Grain feedstocks cross 50%", detail: "Curb on cane juice diversion; maize becomes single largest ethanol feedstock." },
  { year: "2025", event: "E20 achieved (monthly peak)", detail: "India hits 19.97% monthly blend in Oct 2025; full-year avg reaches 19.2%." },
  { year: "2026", event: "E20 mandated nationwide", detail: "E20 becomes the only standard petrol grade across India from April 2026." },
  { year: "2027", event: "E30 feasibility study (expected)", detail: "Government to commission study on E30 blend feasibility and infrastructure needs." },
  { year: "2030", event: "E30 target (proposed)", detail: "Potential E30 mandate target; would require FFVs and significant infrastructure." },
];

export function PolicyTimelineSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="timeline" ref={ref} className="reveal scroll-mt-20 border-y border-border/50 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Timeline
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          India&apos;s ethanol blending journey
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          From the launch of the EBP programme in 2003 to the E20 mandate in 2026 and beyond — key milestones in India&apos;s ethanol blending policy.
        </p>

        <div className="mt-8 sm:mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <div className={`hidden sm:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-4 inline-block max-w-md hover:border-primary/30 hover:shadow-[0_0_30px_-12px_hsl(var(--primary)/0.25)] transition-all duration-300">
                    <h3 className="text-sm font-semibold">{item.event}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-3 sm:flex-col">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs sm:text-sm font-bold text-primary shadow-[0_0_12px_-4px_hsl(var(--primary)/0.4)]">
                    {item.year.slice(2)}
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground sm:hidden">{item.year}</span>
                </div>

                <div className="sm:hidden flex-1">
                  <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-4">
                    <h3 className="text-sm font-semibold">{item.event}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>

                <div className={`hidden sm:block flex-1 ${i % 2 === 0 ? "text-left" : "text-right"}`}>
                  <div className="text-xs font-semibold text-muted-foreground mb-1">{item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
