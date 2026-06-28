"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export function SuppliersSection() {
  const ref = useScrollReveal<HTMLElement>();

  const suppliers = [
    { name: "Balrampur Chini Mills", state: "Uttar Pradesh", feedstock: "Sugarcane", capacity: "560 KLPD", ticker: "BALRAMCHIN" },
    { name: "Shree Renuka Sugars", state: "Maharashtra / Karnataka", feedstock: "Sugarcane", capacity: "1250 KLPD", ticker: "RENUKA" },
    { name: "Triveni Engineering", state: "Uttar Pradesh", feedstock: "Multi-feed", capacity: "860 KLPD", ticker: "TRIVENI" },
    { name: "Dalmia Bharat Sugar", state: "UP / Maharashtra", feedstock: "Multi-feed", capacity: "850 KLPD", ticker: "DALMIASUG" },
    { name: "Bajaj Hindusthan Sugar", state: "Uttar Pradesh", feedstock: "Sugarcane", capacity: "800 KLPD", ticker: "BAJAJHIND" },
    { name: "EID Parry (India)", state: "Tamil Nadu", feedstock: "Multi-feed", capacity: "582 KLPD", ticker: "EIDPARRY" },
    { name: "Godavari Biorefineries", state: "Maharashtra / Karnataka", feedstock: "Multi-feed", capacity: "600 KLPD", ticker: "GODAVARI" },
    { name: "DCM Shriram", state: "Delhi (UP plants)", feedstock: "Multi-feed", capacity: "560 KLPD", ticker: "DCMSHRIRAM" },
    { name: "India Glycols", state: "UP / Uttarakhand", feedstock: "Multi-feed", capacity: "900 KLPD", ticker: "INDIAGLYCO" },
    { name: "BCL Industries", state: "Punjab", feedstock: "Grain", capacity: "700 KLPD", ticker: "BCLIND" },
    { name: "Globus Spirits", state: "Rajasthan / WB", feedstock: "Grain", capacity: "500 KLPD", ticker: "GLOBUSSPR" },
    { name: "Gulshan Polyols", state: "Delhi / Assam", feedstock: "Grain", capacity: "560 KLPD", ticker: "GULPOLY" },
    { name: "Piccadily Agro", state: "Haryana", feedstock: "Grain", capacity: "220 KLPD", ticker: "PICCADIL" },
    { name: "Dwarikesh Sugar", state: "Uttar Pradesh", feedstock: "Sugarcane", capacity: "337 KLPD", ticker: "DWARKESH" },
    { name: "Bannari Amman Sugars", state: "TN / Karnataka", feedstock: "Sugarcane", capacity: "217 KLPD", ticker: "BANARISUG" },
    { name: "Praj Industries", state: "—", feedstock: "Technology", capacity: "—", ticker: "PRAJIND" },
  ];

  return (
    <section id="suppliers" ref={ref} className="reveal scroll-mt-20 border-y border-border/50 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Who supplies the ethanol
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          The companies behind India&apos;s ethanol
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Oil marketing companies buy ethanol from hundreds of distilleries through government tenders. These are the largest listed producers.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {suppliers.map((s) => (
            <div key={s.name} className="rounded-xl border border-border bg-card p-4 sm:p-5 transition-colors hover:bg-secondary/40 hover:border-border/80">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold truncate">{s.name}</h3>
                  <div className="text-[10px] sm:text-xs text-muted-foreground truncate">{s.state}</div>
                </div>
                <span className="shrink-0 rounded-md border border-border bg-secondary/40 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.ticker}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-secondary/20 px-2 py-0.5">{s.feedstock}</span>
                {s.capacity !== "—" && (
                  <span className="rounded-full border border-border bg-secondary/20 px-2 py-0.5">{s.capacity}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 rounded-xl border border-warning/40 bg-warning/5 p-3 sm:p-4 text-xs">
          <strong className="text-warning">Transparency caveat:</strong> No public per-company &apos;share of OMC supply&apos; exists — the government publishes only feedstock-wise and state-wise splits.
        </div>
      </div>
    </section>
  );
}
