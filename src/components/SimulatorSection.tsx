"use client";

import { useState } from "react";

const petrolConsumptionBL = 54;

const feedstocks = [
  { id: "current", label: "Current feedstock mix (ESY 24-25)", water: 5000, co2PerL: 1.2, landPerB: 1200 },
  { id: "sugarcane", label: "100% sugarcane (juice/syrup)", water: 2860, co2PerL: 1.8, landPerB: 800 },
  { id: "maize", label: "100% maize (corn)", water: 4500, co2PerL: 1.0, landPerB: 1500 },
  { id: "rice", label: "100% FCI / broken rice", water: 10790, co2PerL: 0.9, landPerB: 2000 },
  { id: "b-heavy", label: "B-heavy molasses", water: 2000, co2PerL: 1.5, landPerB: 600 },
  { id: "c-heavy", label: "C-heavy molasses", water: 1500, co2PerL: 1.3, landPerB: 500 },
  { id: "cellulosic", label: "Cellulosic / 2G (future)", water: 800, co2PerL: 0.5, landPerB: 300 },
];

const blendPresets = [0, 10, 20, 50, 80, 100];

const blendLabels: Record<number, string> = {
  0: "E0 (pure petrol)",
  10: "E10",
  20: "E20 (current)",
  50: "E50",
  80: "E80",
  100: "E100 (pure ethanol)",
};

export function SimulatorSection() {
  const [blendLevel, setBlendLevel] = useState(20);
  const [feedstock, setFeedstock] = useState("current");

  const selectedFeedstock = feedstocks.find((f) => f.id === feedstock)!;
  const blendRatio = blendLevel / 100;

  const ethanolNeededBL = Math.round(petrolConsumptionBL * (blendLevel / 20));
  const petrolDisplacedBL = Math.round(petrolConsumptionBL * (blendLevel / 20) * 0.97);
  const waterNeededTL = Math.round((ethanolNeededBL * selectedFeedstock.water) / 1000);
  const forexSavedCr = Math.round(70114 * (blendLevel / 20));
  const co2AvoidedMt = Math.round(15.1 * (blendLevel / 20) * (selectedFeedstock.co2PerL / 1.2));
  const landNeededHa = Math.round(ethanolNeededBL * selectedFeedstock.landPerB);
  const energyContentPct = Math.round(100 - blendRatio * 34);
  const feedstockTonnes = Math.round(ethanolNeededBL * 1.5);

  return (
    <section id="simulator" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Interactive
        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient-heading">
          Change the blend, watch the water move
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Drag the slider to set a blending level from E0 to E100 and pick a feedstock scenario. See — live — how much ethanol India would need, the water that takes to grow, and the fuel, forex, land, and CO₂ trade-offs.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Blending level</h3>
                <span className="text-xs text-muted-foreground">
                  {blendLabels[blendLevel as keyof typeof blendLabels] || `E${blendLevel}`}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-4xl font-extrabold text-primary tabular-nums">
                  E{blendLevel}
                </span>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Energy vs petrol</div>
                  <div className="text-sm font-semibold">{energyContentPct}%</div>
                </div>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={blendLevel}
                onChange={(e) => setBlendLevel(Number(e.target.value))}
                className="mt-4 w-full"
              />

              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                {blendPresets.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBlendLevel(b)}
                    className={`rounded px-1.5 py-0.5 transition-colors ${
                      blendLevel === b
                        ? "bg-primary/20 text-primary font-semibold"
                        : "hover:text-foreground"
                    }`}
                  >
                    E{b}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-medium">Feedstock scenario</h3>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {feedstocks.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFeedstock(f.id)}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                      feedstock === f.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <div className="font-medium truncate">{f.label}</div>
                    <div className="text-[11px] text-muted-foreground">
                      ~{f.water.toLocaleString()} L/L
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Water intensity</span>
                <span className="text-sm font-semibold">
                  {selectedFeedstock.water.toLocaleString()} L / L ethanol
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-300"
                  style={{ width: `${Math.min((selectedFeedstock.water / 12000) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">
                    Water needed to grow this much ethanol, per year
                  </div>
                  <div className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-accent">
                    {waterNeededTL.toLocaleString()}
                    <span className="text-xl font-medium text-muted-foreground">
                      {" "}trillion L
                    </span>
                  </div>
                </div>
                <div className="rounded-lg bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                  {blendLevel}% blend
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-secondary/40 px-2 py-0.5">
                  &asymp; {(waterNeededTL / 0.0025).toLocaleString()} Olympic pools
                </span>
                <span className="rounded-full border border-border bg-secondary/40 px-2 py-0.5">
                  &asymp; {Math.round(waterNeededTL / 0.55).toLocaleString()} Cr people&apos;s yearly water
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Ethanol needed</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums">{ethanolNeededBL.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">billion L</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Petrol displaced</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums">{petrolDisplacedBL.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">billion L</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Forex saved (est.)</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums text-primary">₹{forexSavedCr.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">cr</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">CO₂ avoided (est.)</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums text-accent">{co2AvoidedMt.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">M t</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Land required</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums">{landNeededHa.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">thousand ha</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Feedstock needed</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums">{feedstockTonnes.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">M tonnes</div>
              </div>
            </div>

            <div className="rounded-xl border border-warning/40 bg-warning/5 p-4 text-xs text-muted-foreground">
              <strong className="text-warning">Note:</strong> All outputs are indicative estimates for public understanding. At blends above E20, significant engine modifications (FFV) and infrastructure changes would be required. E85/E100 scenarios assume flex-fuel vehicle adoption.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
