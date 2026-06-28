"use client";

import { useState, useMemo } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { featuredStates, generatePriceHistory } from "@/data/prices";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const colors = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

export function PriceHistorySection() {
  const ref = useScrollReveal<HTMLElement>();
  const [selectedStates, setSelectedStates] = useState(["Delhi", "Mumbai", "Bengaluru", "Chennai"]);

  const toggleState = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const chartData = useMemo(() => {
    const months = ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];
    return months.map((month, i) => {
      const point: Record<string, string | number> = { month };
      selectedStates.forEach((state) => {
        const history = generatePriceHistory(state);
        point[state] = history[i]?.price ?? 0;
      });
      return point;
    });
  }, [selectedStates]);

  return (
    <section id="prices-history" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Price trends
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          Petrol price history by state
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Track petrol price movements over the last 12 months across Indian states. Select up to 4 states to compare.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {featuredStates.map((state) => (
            <button
              key={state}
              onClick={() => toggleState(state)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                selectedStates.includes(state)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/40 text-muted-foreground hover:bg-secondary"
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-5 sm:p-6">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={chartData}>
              <CartesianGrid stroke="hsl(var(--border) / 0.4)" strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
              <YAxis domain={["dataMin - 2", "dataMax + 2"]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} tickFormatter={(v) => `₹${v}`} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }}
              />
              {selectedStates.map((state, i) => (
                <Line
                  key={state}
                  type="monotone"
                  dataKey={state}
                  stroke={colors[i % colors.length]}
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 5 }}
                  animationDuration={1200}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          Prices are indicative, modelled from public data. Actual prices vary by city and dealer within each state.
        </div>
      </div>
    </section>
  );
}
