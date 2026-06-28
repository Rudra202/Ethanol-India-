"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export function VehiclesSection() {
  const ref = useScrollReveal<HTMLElement>();

  const manufacturers = [
    { name: "Maruti Suzuki", date: "Apr 2023" },
    { name: "Honda", date: "Jan 2009 (material)" },
    { name: "Toyota", date: "Apr 2023" },
    { name: "Tata Motors", date: "Apr 2020 (material)" },
    { name: "Hyundai", date: "Apr 2020 (material)" },
    { name: "Mahindra", date: "Apr 2020 (material)" },
    { name: "Hero MotoCorp", date: "Apr 2023" },
    { name: "Bajaj Auto", date: "2017 (BS4 material)" },
    { name: "TVS Motor", date: "2023" },
    { name: "Royal Enfield", date: "2020 (BS6)" },
  ];

  return (
    <section id="vehicles" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          On the road
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          What E20 means for your vehicle
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          E20 became the standard petrol grade in 2025-26. Owners of older (pre-2023) vehicles report lower mileage and worry about engine parts, insurance and the lack of a pure-petrol option.
        </p>

        <div className="mt-6 sm:mt-8 rounded-xl border border-warning/40 bg-warning/5 p-3 sm:p-4 text-xs sm:text-sm">
          <strong>How to read this.</strong> Everything here is presented as ATTRIBUTED claims, with the government and industry rebuttals shown alongside.
        </div>

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">Mileage &amp; efficiency</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Government&apos;s acknowledged drop</span>
                <span className="text-sm font-semibold text-primary">1-2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">NITI Aayog&apos;s 2021 estimate</span>
                <span className="text-sm font-semibold text-warning">6-7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">What owners report</span>
                <span className="text-sm font-semibold">~1 in 2 report drop</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">Is your vehicle compatible?</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-border bg-secondary/20 p-3">
                <div className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-muted-foreground">E10 material-compliant</div>
                <div className="text-xs sm:text-sm">Sold before 1 Apr 2023</div>
              </div>
              <div className="rounded-lg border border-border bg-secondary/20 p-3">
                <div className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-muted-foreground">E20 material-compliant</div>
                <div className="text-xs sm:text-sm">From 1 Apr 2023</div>
              </div>
              <div className="rounded-lg border border-border bg-secondary/20 p-3">
                <div className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-muted-foreground">E20-tuned (calibrated)</div>
                <div className="text-xs sm:text-sm">From 1 Apr 2025</div>
              </div>
              <div className="text-xs text-muted-foreground">
                ~20% — Only about 20% of petrol vehicles sold in the last 15 years are E20-compliant.
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">Insurance</h3>
            <div className="mt-3 rounded-lg border border-primary/30 bg-primary/5 p-3 text-xs sm:text-sm">
              <strong className="text-primary">&lsquo;E20 voids your insurance&rsquo; — officially FAKE</strong>
              <p className="mt-1 text-xs text-muted-foreground">
                PIB Fact Check (Govt of India) debunked the viral claim: motor-insurance policies remain valid with E20.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">Automakers &amp; warranty</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              SIAM: &apos;Whatever warranty is committed by OEMs will be fully honoured for E20 usage&apos;.
            </p>
            <div className="mt-4 max-h-[280px] sm:max-h-[360px] space-y-1 overflow-y-auto">
              {manufacturers.map((m) => (
                <div key={m.name} className="flex items-center justify-between rounded-lg bg-secondary/20 p-2 text-xs">
                  <span className="font-medium">{m.name}</span>
                  <span className="text-muted-foreground">{m.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">Pricing</h3>
            <p className="mt-1 text-xs sm:text-sm">
              Same pump price, less energy — so you pay more per km.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              E20 sells at the same retail price while delivering ~6% less energy per litre.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-sm font-semibold">Choice</h3>
            <p className="mt-1 text-xs sm:text-sm">
              No pure-petrol option and no price differentiation.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Most pumps now sell only E20; IOC says it has no plans to offer non-blended petrol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
