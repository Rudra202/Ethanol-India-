"use client";

import { useState, useMemo } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { distilleries, feedstocks, statesWithDistilleries, type Distillery } from "@/data/distilleries";

export function DistilleryDirectory() {
  const ref = useScrollReveal<HTMLElement>();
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [filterFeedstock, setFilterFeedstock] = useState("All");
  const [sortKey, setSortKey] = useState<"name" | "capacity" | "state">("capacity");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [selected, setSelected] = useState<Distillery | null>(null);

  const filtered = useMemo(() => {
    let list = [...distilleries];
    if (filterState !== "All") list = list.filter((d) => d.state === filterState);
    if (filterFeedstock !== "All") list = list.filter((d) => d.feedstock.includes(filterFeedstock));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((d) => d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q) || d.state.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "name") cmp = a.name.localeCompare(b.name);
      else if (sortKey === "state") cmp = a.state.localeCompare(b.state);
      else cmp = a.capacity - b.capacity;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return list;
  }, [search, filterState, filterFeedstock, sortKey, sortDir]);

  return (
    <section id="distilleries" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Directory
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          India&apos;s ethanol distilleries
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          {distilleries.length} operational and upcoming ethanol distilleries across India. Search by name, city, or state.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search distilleries..."
            className="min-w-0 flex-1 rounded-xl border border-input bg-card px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
          />
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            className="rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="All">All states</option>
            {statesWithDistilleries.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            value={filterFeedstock}
            onChange={(e) => setFilterFeedstock(e.target.value)}
            className="rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="All">All feedstocks</option>
            {feedstocks.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                {(["name", "state", "capacity"] as const).map((key) => (
                  <th
                    key={key}
                    onClick={() => {
                      if (sortKey === key) setSortDir((d) => d === "asc" ? "desc" : "asc");
                      else { setSortKey(key); setSortDir("desc"); }
                    }}
                    className="cursor-pointer px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
                  >
                    {key === "name" ? "Name" : key === "state" ? "State" : "Capacity (KLPD)"}
                    {sortKey === key && <span className="ml-1">{sortDir === "desc" ? "↓" : "↑"}</span>}
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Feedstock</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d) => (
                <tr
                  key={d.id}
                  onClick={() => setSelected(selected?.id === d.id ? null : d)}
                  className={`border-b border-border/50 transition-colors cursor-pointer hover:bg-secondary/20 ${
                    selected?.id === d.id ? "bg-secondary/30" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium">{d.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{d.state}</td>
                  <td className="px-4 py-3 tabular-nums">{d.capacity}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    <div className="flex flex-wrap gap-1">
                      {d.feedstock.map((f) => (
                        <span key={f} className="rounded-full border border-border bg-secondary/30 px-1.5 py-0.5 text-[10px]">{f}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      d.status === "operational" ? "bg-primary/10 text-primary" :
                      d.status === "under-construction" ? "bg-accent/10 text-accent" :
                      "bg-muted-foreground/10 text-muted-foreground"
                    }`}>
                      {d.status === "operational" ? "Active" : d.status === "under-construction" ? "Building" : "Proposed"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">No distilleries match your filters.</div>
          )}
        </div>

        {selected && (
          <div className="mt-4 rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{selected.name}</h4>
                <p className="text-xs text-muted-foreground">{selected.city}, {selected.state}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div><span className="text-muted-foreground">Capacity</span><div className="font-semibold tabular-nums">{selected.capacity} KLPD</div></div>
              <div><span className="text-muted-foreground">Status</span><div className="font-semibold capitalize">{selected.status.replace("-", " ")}</div></div>
              <div className="col-span-2"><span className="text-muted-foreground">Feedstock</span><div className="font-semibold">{selected.feedstock.join(", ")}</div></div>
            </div>
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">Showing {filtered.length} of {distilleries.length} distilleries. Data indicative — compiled from public sources.</p>
      </div>
    </section>
  );
}
