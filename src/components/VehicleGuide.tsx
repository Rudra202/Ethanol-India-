"use client";

import { useState, useMemo } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { vehicles, makes } from "@/data/vehicles";

export function VehicleGuide() {
  const ref = useScrollReveal<HTMLElement>();
  const [selectedMake, setSelectedMake] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = [...vehicles];
    if (selectedMake !== "All") list = list.filter((v) => v.make === selectedMake);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((v) => v.model.toLowerCase().includes(q) || v.make.toLowerCase().includes(q));
    }
    return list;
  }, [selectedMake, search]);

  const compatColors: Record<string, string> = {
    yes: "bg-primary/10 text-primary border-primary/30",
    partial: "bg-accent/10 text-accent border-accent/30",
    no: "bg-destructive/10 text-destructive border-destructive/30",
    check: "bg-warning/10 text-warning border-warning/30",
  };
  const compatLabels: Record<string, string> = {
    yes: "E20 Ready",
    partial: "Check",
    no: "Not recommended",
    check: "Verify",
  };

  return (
    <section id="vehicle-guide" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Vehicle guide
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          Is your car E20 ready?
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Search by make and model to check E20 compatibility and estimated mileage impact.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="All">All makes</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search models..."
            className="min-w-0 flex-1 rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-ring"
          />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <div key={`${v.make}-${v.model}-${v.yearStart}`} className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-4 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-medium text-muted-foreground">{v.make}</div>
                  <div className="text-sm font-semibold">{v.model}</div>
                </div>
                <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${compatColors[v.e20Compatible]}`}>
                  {compatLabels[v.e20Compatible]}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{v.yearStart}–{v.yearEnd}</span>
                <span className="text-border">|</span>
                <span className={v.mileageDropE20 > 2 ? "text-warning" : ""}>-{v.mileageDropE20}% mileage</span>
              </div>
              <p className="mt-1.5 text-[11px] text-muted-foreground leading-relaxed">{v.notes}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">No models match your search.</div>
        )}

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary/40" /> E20 Ready — fully compatible</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent/40" /> Check — may need inspection</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-warning/40" /> Verify — confirm before filling</span>
        </div>
      </div>
    </section>
  );
}
