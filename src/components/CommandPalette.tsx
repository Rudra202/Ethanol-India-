"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Fuse from "fuse.js";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

const items: SearchItem[] = [
  { id: "overview", title: "Overview — India's ethanol programme", description: "State of play, blending stats, feedstock breakdown", href: "#overview", category: "Sections" },
  { id: "simulator", title: "E0–E100 Blend Simulator", description: "Interactive simulator for water, land, CO₂, forex", href: "#simulator", category: "Sections" },
  { id: "water", title: "Water cost of ethanol", description: "How much water ethanol feedstocks consume", href: "#water", category: "Sections" },
  { id: "calculator", title: "Vehicle Cost Calculator", description: "Compare E0 vs E20 running costs", href: "#calculator", category: "Sections" },
  { id: "prices", title: "Petrol prices by state", description: "State-wise fuel price breakdown with VAT", href: "#prices", category: "Sections" },
  { id: "vehicles", title: "E20 vehicle compatibility guide", description: "Which cars are E20-ready and mileage impact", href: "#vehicles", category: "Sections" },
  { id: "suppliers", title: "Ethanol suppliers", description: "Companies supplying ethanol to OMCs", href: "#suppliers", category: "Sections" },
  { id: "news", title: "Water stress in the news", description: "Headlines about India's water crisis", href: "#news", category: "Sections" },
  { id: "comparison", title: "Global blending comparison", description: "How India compares to Brazil, US, EU, China", href: "#comparison", category: "Sections" },
  { id: "issues", title: "Open questions & issues", description: "Food vs fuel, water stress, policy gaps", href: "#issues", category: "Sections" },
  { id: "timeline", title: "Policy timeline", description: "India's ethanol blending journey 2003–2030", href: "#timeline", category: "Sections" },
  { id: "map", title: "Interactive India map", description: "State-wise ethanol, water stress & distillery data", href: "#india-map", category: "Sections" },
  { id: "distilleries", title: "Distillery directory", description: "Searchable list of ethanol distilleries across India", href: "#distilleries", category: "Sections" },
  { id: "prices-history", title: "Price history charts", description: "Petrol price trends over 12 months per state", href: "#prices-history", category: "Sections" },
  { id: "story", title: "Data storytelling", description: "Scroll through key insights about ethanol blending", href: "#story", category: "Sections" },
  { id: "contribute", title: "Contribute on GitHub", description: "Star, fork, or open an issue", href: "#contribute", category: "Sections" },
  { id: "stat-1", title: "₹1,44,000 Cr — forex saved", description: "Cumulative foreign exchange saved through ethanol blending", href: "#overview", category: "Stats" },
  { id: "stat-2", title: "186 LMT — crude substituted", description: "Lakh metric tonnes of crude oil displaced by ethanol", href: "#overview", category: "Stats" },
  { id: "stat-3", title: "428 LMT — CO₂ reduced", description: "Emissions reduction equal to ~86 crore trees", href: "#overview", category: "Stats" },
  { id: "stat-4", title: "₹1,05,000 Cr — paid to farmers", description: "Cumulative payments to farmers for ethanol feedstock", href: "#overview", category: "Stats" },
  { id: "blend-20", title: "E20 achieved — 19.2% blend", description: "Full-year average ethanol blending reached 19.2% in ESY 2024-25", href: "#overview", category: "Stats" },
  { id: "blend-20p", title: "E20 mandated from April 2026", description: "E20 is now the only standard petrol grade across India", href: "#timeline", category: "Stats" },
];

const fuse = new Fuse(items, {
  keys: ["title", "description", "category"],
  threshold: 0.35,
  includeScore: true,
});

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const results = query.trim() ? fuse.search(query).slice(0, 10).map((r) => r.item) : items.slice(0, 8);

  const handleSelect = useCallback((href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <svg className="h-4 w-4 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, stats, topics..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">ESC</kbd>
        </div>

        <div className="max-h-72 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">No results found</div>
          ) : (
            <div className="space-y-0.5">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  className="flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-secondary"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{item.description}</div>
                  </div>
                  <span className="mt-0.5 shrink-0 rounded-md border border-border bg-secondary/30 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border px-4 py-2 text-[10px] text-muted-foreground flex items-center gap-4">
          <span>↑↓ Navigate</span>
          <span>↵ Open</span>
          <span>⌘K Toggle</span>
        </div>
      </div>
    </div>
  );
}
