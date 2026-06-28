"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { BlendingChart, PetrolChart, EthanolVolumeChart, DonutChart } from "./Charts";

export function OverviewSection() {
  const ref = useScrollReveal<HTMLElement>();

  const stats = [
    { label: "Foreign exchange saved", value: "₹1,44,000", sub: "₹ crore (cumulative)" },
    { label: "Crude oil substituted", value: "186", sub: "Lakh metric tonnes (LMT)" },
    { label: "CO₂ emissions reduced", value: "428", sub: "LMT (~86 crore trees)" },
    { label: "Payments to farmers", value: "₹1,05,000", sub: "₹ crore (to Oct 2025)" },
  ];

  return (
    <section id="overview" ref={ref} className="reveal scroll-mt-20 border-y border-border/50 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          State of play
        </div>

        <h2 className="max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          India&apos;s ethanol blending programme, by the numbers
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Blending petrol with ethanol (the EBP programme) hit 20% around mid-2025 — roughly five years early — and became the mandated nationwide grade from April 2026. Here is the trajectory and what the government says it has gained.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-4 sm:p-5 reveal reveal-delay-${i + 1} hover:border-primary/30 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.2)] transition-all duration-300`}
            >
              <div className="text-[11px] sm:text-xs text-muted-foreground">{stat.label}</div>
              <div className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">Blending % achieved</h3>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">E20 now</div>
            <div className="mt-4 w-full">
              <BlendingChart />
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              ESY 2024-25 full-year average was 19.2%; the monthly figure peaked at 19.97% in October 2025.
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">Petrol (MS) consumption</h3>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
              India now burns ~45.8 billion litres of petrol a year
            </div>
            <div className="mt-4 w-full">
              <PetrolChart />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold">Ethanol blended per year</h3>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Crore litres supplied to oil marketing companies
            </div>
            <div className="mt-4 w-full">
              <EthanolVolumeChart />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold">What ethanol is made from</h3>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground mb-2">
              Grain-based feedstocks now dominate (~69%)
            </div>
            <DonutChart />
          </div>
        </div>
      </div>
    </section>
  );
}
