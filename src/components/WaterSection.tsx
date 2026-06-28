"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export function WaterSection() {
  const ref = useScrollReveal<HTMLElement>();

  const feedstocks = [
    { name: "Sugarcane (juice / syrup)", water: 2860, range: "2,000–3,000", yield: "70 L/t", price: "₹65.61/L", share: "16%", color: "bg-chart-1" },
    { name: "Maize (corn)", water: 4500, range: "1,910–5,630", yield: "380 L/t", price: "₹71.86/L", share: "48%", color: "bg-chart-2" },
    { name: "FCI / broken rice", water: 10790, range: "6,000–12,000", yield: "450 L/t", price: "₹60.32/L", share: "18%", color: "bg-chart-3" },
    { name: "B-heavy molasses", water: 2000, range: "1,500–2,860", yield: "300 L/t", price: "₹60.73/L", share: "13%", color: "bg-chart-4" },
    { name: "C-heavy molasses", water: 1500, range: "1,200–2,000", yield: "225 L/t", price: "₹57.97/L", share: "2%", color: "bg-chart-5" },
  ];

  return (
    <section id="water" ref={ref} className="reveal scroll-mt-20 border-y border-border/50 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Water cost
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          How much water does ethanol really drink?
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          This is the most misunderstood number in the whole debate. The headline figures count the water needed to grow the crop — mostly rainfall plus irrigation. A distillery&apos;s own fresh-water use is a tiny fraction of that.
        </p>

        <div className="mt-6 sm:mt-8 rounded-xl border border-warning/40 bg-warning/5 p-3 sm:p-4 text-xs sm:text-sm">
          <strong className="text-warning">Read this first.</strong> Headline water figures are <strong>TOTAL CROP WATER</strong> (rainfall + irrigation needed to grow the feedstock), not distillery process water. A distillery&apos;s own fresh-water use is only ~3-5 litres per litre of ethanol.
        </div>

        <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">Total crop water per litre of ethanol</h3>
            <div className="mt-1 text-xs text-muted-foreground">
              Litres of water (rainfall + irrigation) to grow the feedstock for 1 litre of ethanol
            </div>

            <div className="mt-6 space-y-4">
              {feedstocks.map((f) => (
                <div key={f.name}>
                  <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                    <span className="min-w-0 truncate">{f.name}</span>
                    <span className="font-semibold tabular-nums text-accent shrink-0">
                      {f.water.toLocaleString()} L/L
                    </span>
                  </div>
                  <div className="mt-1 h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full ${f.color} transition-all duration-700`}
                      style={{ width: `${(f.water / 12000) * 100}%` }}
                    />
                  </div>
                  <div className="mt-0.5 flex justify-between text-[10px] sm:text-xs text-muted-foreground">
                    <span>Range {f.range}</span>
                    <span>Yield {f.yield}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold">Crop water vs distillery water</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Crop water (rice, headline)</span>
                    <span className="font-semibold text-destructive">~10,790 L / L</span>
                  </div>
                  <div className="mt-1 h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-destructive/30" style={{ width: "90%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Distillery process water</span>
                    <span className="font-semibold text-primary">3–5 L / L</span>
                  </div>
                  <div className="mt-1 h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: "0.05%" }} />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-3 text-xs">
                CPCB caps molasses distilleries at 15 L/L and requires Zero Liquid Discharge. Modern Indian distilleries use ~3-5 litres of fresh process water per litre of ethanol.
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold">Key context</h3>
              <div className="mt-4 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/20 p-3">
                  <span className="text-base sm:text-lg shrink-0">🌾</span>
                  <div>
                    <strong>70%</strong> — Sugarcane and paddy together use roughly 70% of India&apos;s irrigation water.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/20 p-3">
                  <span className="text-base sm:text-lg shrink-0">💧</span>
                  <div>
                    <strong>+50 billion m³ / year</strong> — CSTEP — additional irrigation-water demand from rising ethanol.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/20 p-3">
                  <span className="text-base sm:text-lg shrink-0">📊</span>
                  <div>
                    <strong>+348 billion m³</strong> — Stanford — extra water to hit 20% blending via the molasses route.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
