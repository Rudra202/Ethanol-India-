"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const statesData: Record<string, { price: number; vatPct: number; base: number; excise: number; dealer: number }> = {
  "Andhra Pradesh": { price: 112.43, vatPct: 21.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Arunachal Pradesh": { price: 96.37, vatPct: 15.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Assam": { price: 99.12, vatPct: 16.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Bihar": { price: 107.86, vatPct: 19.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Chhattisgarh": { price: 104.71, vatPct: 18.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Delhi": { price: 102.12, vatPct: 19.4, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Goa": { price: 97.63, vatPct: 15.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Gujarat": { price: 100.57, vatPct: 16.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Haryana": { price: 103.28, vatPct: 17.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Himachal Pradesh": { price: 101.45, vatPct: 17.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Jharkhand": { price: 103.85, vatPct: 18.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Karnataka": { price: 107.18, vatPct: 19.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Kerala": { price: 108.92, vatPct: 19.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Madhya Pradesh": { price: 107.46, vatPct: 19.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Maharashtra": { price: 111.21, vatPct: 20.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Manipur": { price: 104.38, vatPct: 18.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Meghalaya": { price: 100.24, vatPct: 16.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Mizoram": { price: 100.57, vatPct: 16.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Nagaland": { price: 99.78, vatPct: 16.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Odisha": { price: 103.04, vatPct: 17.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Punjab": { price: 105.37, vatPct: 18.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Rajasthan": { price: 108.27, vatPct: 19.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Sikkim": { price: 98.46, vatPct: 15.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Tamil Nadu": { price: 105.70, vatPct: 18.8, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Telangana": { price: 109.86, vatPct: 20.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Tripura": { price: 99.95, vatPct: 16.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Uttar Pradesh": { price: 106.61, vatPct: 19.0, base: 64.20, excise: 21.00, dealer: 4.40 },
  "Uttarakhand": { price: 100.74, vatPct: 16.5, base: 64.20, excise: 21.00, dealer: 4.40 },
  "West Bengal": { price: 106.03, vatPct: 18.5, base: 64.20, excise: 21.00, dealer: 4.40 },
};

const sortedStates = Object.keys(statesData).sort();

const ethanolPrices = [
  { feedstock: "C-heavy molasses", price: "₹57.97" },
  { feedstock: "B-heavy molasses", price: "₹60.73" },
  { feedstock: "FCI surplus rice", price: "₹60.32" },
  { feedstock: "Sugarcane juice / syrup", price: "₹65.61" },
  { feedstock: "Maize", price: "₹71.86" },
];

export function PricesSection() {
  const ref = useScrollReveal<HTMLElement>();
  const [selectedState, setSelectedState] = useState("Delhi");

  const state = statesData[selectedState];
  const vatAmt = state.base * (state.vatPct / 100);
  const totalCalc = state.base + state.excise + state.dealer + vatAmt;

  const breakdown = [
    { label: "Refinery base price + freight", value: `₹${state.base.toFixed(2)}` },
    { label: "Central excise duty", value: `₹${state.excise.toFixed(2)}` },
    { label: "Dealer commission", value: `₹${state.dealer.toFixed(2)}` },
    { label: `State VAT (${state.vatPct}%)`, value: `₹${vatAmt.toFixed(2)}` },
  ];

  return (
    <section id="prices" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Follow the money
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          What you pay at the pump — and what ethanol costs
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Select your state to see the exact petrol price break-up, VAT, and how it compares to ethanol procurement prices.
        </p>

        <div className="mt-8 sm:mt-10">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[220px]">
              <label htmlFor="state-select" className="block text-xs font-medium text-muted-foreground mb-1.5">
                Select state / UT
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm font-medium text-foreground outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
              >
                {sortedStates.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
            <div className="rounded-xl border border-border bg-card px-5 py-3 min-w-[160px]">
              <div className="text-xs text-muted-foreground">Petrol price</div>
              <div className="mt-0.5 text-2xl sm:text-3xl font-bold tabular-nums text-accent">
                ₹{state.price.toFixed(2)}
                <span className="text-sm font-normal text-muted-foreground">/L</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">{selectedState} price break-up</h3>
            <div className="text-xs text-muted-foreground">eff. 28 Jun 2026</div>
            <div className="mt-4 text-xl sm:text-2xl font-bold">
              ₹{totalCalc.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">Per litre · total</span>
            </div>

            <div className="mt-6 space-y-3">
              {breakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>{item.label}</span>
                    <span className="font-medium tabular-nums">{item.value}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-accent/70"
                      style={{ width: `${(parseFloat(item.value.replace("₹", "")) / totalCalc) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-secondary/30 p-3">
                <div className="text-[10px] text-muted-foreground">Tax component</div>
                <div className="text-lg font-bold tabular-nums text-warning">
                  ₹{(state.excise + vatAmt).toFixed(2)}
                </div>
                <div className="text-[10px] text-muted-foreground">{(((state.excise + vatAmt) / totalCalc) * 100).toFixed(0)}% of pump price</div>
              </div>
              <div className="rounded-lg bg-secondary/30 p-3">
                <div className="text-[10px] text-muted-foreground">Non-tax cost</div>
                <div className="text-lg font-bold tabular-nums text-primary">
                  ₹{(state.base + state.dealer).toFixed(2)}
                </div>
                <div className="text-[10px] text-muted-foreground">{(((state.base + state.dealer) / totalCalc) * 100).toFixed(0)}% of pump price</div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-secondary/20 p-3 text-xs text-muted-foreground">
              <strong>Note:</strong> VAT rates vary by state — from 15% (Arunachal, Goa) to 21.5% (Andhra Pradesh). This tool uses each state&apos;s applicable VAT rate. Source: PPAC.
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold">Central excise on petrol</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold tabular-nums text-primary">₹3</span>
                <span className="text-xs text-muted-foreground">current · per litre</span>
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                <span className="line-through mr-1">₹13</span>cut 27 Mar 2026
              </div>
              <div className="mt-3 rounded-lg bg-warning/5 border border-warning/30 p-3 text-xs">
                Central excise on petrol was cut from ₹13 to ₹3 per litre on 27 March 2026 to offset a global crude spike.
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold">Ethanol procurement price</h3>
              <div className="text-xs text-muted-foreground">₹ per litre paid by OMCs · ESY 2025-26</div>
              <div className="mt-4 space-y-2">
                {ethanolPrices.map((ep) => (
                  <div key={ep.feedstock} className="flex justify-between border-b border-border/50 pb-1.5 text-xs sm:text-sm last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{ep.feedstock}</span>
                    <span className="font-semibold tabular-nums">{ep.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold">Indian crude basket</h3>
              <div className="mt-2 text-xl sm:text-2xl font-bold tabular-nums">$109.35</div>
              <div className="text-xs text-muted-foreground">/barrel · 2026-05 (monthly avg; range $97.5-118.7)</div>
              <div className="mt-2 text-xs sm:text-sm">₹94.7/USD</div>
              <div className="mt-3 rounded-lg border border-accent/30 bg-accent/5 p-3 text-xs">
                <strong>Is ethanol cheaper than petrol?</strong> On a pure ₹/litre pre-tax basis, ethanol (₹58-72) is currently around or below petrol&apos;s pre-tax base cost (~₹72) — but only because June-2026 crude is very high.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
