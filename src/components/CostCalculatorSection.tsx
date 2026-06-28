"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function CostCalculatorSection() {
  const ref = useScrollReveal<HTMLElement>();
  const [kmMonth, setKmMonth] = useState(1000);
  const [mileageE0, setMileageE0] = useState(18);
  const [fuelPrice, setFuelPrice] = useState(102.12);

  const mileageDropPct = 6;
  const mileageE20 = mileageE0 * (1 - mileageDropPct / 100);
  const litresE0 = kmMonth / mileageE0;
  const litresE20 = kmMonth / mileageE20;
  const costE0 = litresE0 * fuelPrice;
  const costE20 = litresE20 * fuelPrice;
  const extraCost = costE20 - costE0;
  const extraYearly = extraCost * 12;

  return (
    <section id="calculator" ref={ref} className="reveal scroll-mt-20 border-y border-border/50 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Your cost
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          What does E20 cost <em className="text-gradient not-italic">you</em>?
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Enter your mileage, monthly driving, and local fuel price to see how much E20 costs you vs what E0 would.
        </p>

        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-medium">Your vehicle</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground">Monthly km driven</label>
                  <div className="mt-1 flex items-center gap-3">
                    <input
                      type="range"
                      min={100}
                      max={5000}
                      step={100}
                      value={kmMonth}
                      onChange={(e) => setKmMonth(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="min-w-[5rem] text-right text-sm font-semibold tabular-nums">{kmMonth.toLocaleString()} km</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground">Your car&apos;s mileage on E0 (km/L)</label>
                  <div className="mt-1 flex items-center gap-3">
                    <input
                      type="range"
                      min={8}
                      max={30}
                      step={0.5}
                      value={mileageE0}
                      onChange={(e) => setMileageE0(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="min-w-[3rem] text-right text-sm font-semibold tabular-nums">{mileageE0} km/L</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground">Fuel price (₹/L)</label>
                  <div className="mt-1 flex items-center gap-3">
                    <input
                      type="range"
                      min={90}
                      max={130}
                      step={0.5}
                      value={fuelPrice}
                      onChange={(e) => setFuelPrice(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="min-w-[4.5rem] text-right text-sm font-semibold tabular-nums">₹{fuelPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-warning/40 bg-warning/5 p-4 text-xs">
              Mileage drop for older (pre-2023) vehicles is estimated at ~3-6%. We use <strong>6%</strong> here as a conservative upper bound. E20-tuned cars see only ~1-2% drop.
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">On E0 (ideal)</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums">₹{costE0.toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">/mo · {litresE0.toFixed(0)} L</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">On E20 (actual)</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums text-warning">₹{costE20.toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">/mo · {litresE20.toFixed(0)} L</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Extra cost / month</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums text-destructive">+₹{extraCost.toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">{((extraCost / costE0) * 100).toFixed(0)}% more</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Extra cost / year</div>
                <div className="mt-1 text-lg sm:text-xl font-bold tabular-nums text-destructive">+₹{extraYearly.toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">over 12 months</div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold">Breakdown</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Mileage on E0</span>
                    <span className="font-medium">{mileageE0} km/L</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Mileage on E20 (~{mileageDropPct}% drop)</span>
                    <span className="font-medium">{mileageE20.toFixed(1)} km/L</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary/70" style={{ width: `${(mileageE20 / mileageE0) * 100}%` }} />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
                    <span>E0 efficiency</span>
                    <span>E20 efficiency</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground">
              <strong>Note:</strong> This calculator uses a ~6% mileage drop (upper estimate for older vehicles). Your actual mileage depends on driving habits, traffic, AC usage, and vehicle condition. E20-tuned cars (post Apr 2025) see only ~1-2% drop.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
