"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { stateData, type StateData } from "@/data/indiaMap";
import { waterStressData, getStressColor } from "@/data/waterStress";

type MapMode = "ethanol" | "water" | "distilleries";

const labelPositions: Record<string, { x: number; y: number }> = {
  JK: { x: 228, y: 50 }, HP: { x: 238, y: 74 }, UK: { x: 258, y: 86 },
  PB: { x: 220, y: 74 }, HR: { x: 224, y: 90 }, DL: { x: 230, y: 96 },
  RJ: { x: 178, y: 116 }, UP: { x: 254, y: 114 }, BR: { x: 294, y: 126 },
  SK: { x: 316, y: 94 }, AR: { x: 352, y: 62 }, NL: { x: 340, y: 82 },
  MN: { x: 350, y: 96 }, MZ: { x: 356, y: 112 }, TR: { x: 334, y: 108 },
  ML: { x: 316, y: 96 }, AS: { x: 310, y: 78 }, WB: { x: 304, y: 142 },
  JH: { x: 288, y: 150 }, OD: { x: 284, y: 182 }, CG: { x: 256, y: 158 },
  MP: { x: 220, y: 154 }, GJ: { x: 156, y: 156 }, MH: { x: 208, y: 196 },
  TS: { x: 264, y: 198 }, AP: { x: 264, y: 228 }, KA: { x: 200, y: 236 },
  GA: { x: 190, y: 224 }, KL: { x: 192, y: 284 }, TN: { x: 234, y: 270 },
};

export function IndiaMapSection() {
  const ref = useScrollReveal<HTMLElement>();
  const [mode, setMode] = useState<MapMode>("ethanol");
  const [selected, setSelected] = useState<StateData | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const maxEthanol = Math.max(...stateData.map((s) => s.ethanolProduction));
  const maxDistilleries = Math.max(...stateData.map((s) => s.distilleries));

  function getFill(d: StateData): string {
    if (hovered === d.name) return "hsl(var(--accent))";
    if (selected?.name === d.name) return "hsl(var(--primary))";
    if (mode === "ethanol") {
      const intensity = d.ethanolProduction / maxEthanol;
      if (intensity === 0) return "hsl(0 0% 18%)";
      const l = 70 - intensity * 50;
      return `hsl(160 ${50 + intensity * 40}% ${l}%)`;
    }
    if (mode === "water") {
      const ws = waterStressData.find((w) => w.state === d.name);
      if (!ws) return "hsl(0 0% 18%)";
      const c = getStressColor(ws.stressIndex);
      return c;
    }
    const intensity = d.distilleries / maxDistilleries;
    if (intensity === 0) return "hsl(0 0% 18%)";
    const l = 70 - intensity * 50;
    return `hsl(200 ${40 + intensity * 40}% ${l}%)`;
  }

  function getOpacity(d: StateData): number {
    if (!selected) return 1;
    return selected.name === d.name ? 1 : 0.35;
  }

  const currentWater = selected ? waterStressData.find((w) => w.state === selected.name) : null;

  return (
    <section id="india-map" ref={ref} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Interactive map
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          India&apos;s ethanol landscape by state
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Explore ethanol production, water stress, and distillery concentration across India. Click any state for details.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {([["ethanol", "Ethanol production"], ["water", "Water stress"], ["distilleries", "Distilleries"]] as [MapMode, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => { setMode(key); setSelected(null); }}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                mode === key
                  ? "bg-primary text-primary-foreground shadow-[0_0_12px_-4px_hsl(var(--primary)/0.5)]"
                  : "bg-secondary/40 text-muted-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 flex justify-center">
            <svg viewBox="0 0 400 330" className="w-full max-w-xl h-auto">
              {stateData.map((d) => (
                <g key={d.id}>
                  <path
                    d={d.path}
                    fill={getFill(d)}
                    stroke="hsl(var(--background))"
                    strokeWidth={1.5}
                    opacity={getOpacity(d)}
                    className="transition-all duration-300 cursor-pointer hover:brightness-110"
                    onMouseEnter={() => setHovered(d.name)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(d)}
                  />
                  <text
                    x={labelPositions[d.id]?.x ?? 200}
                    y={labelPositions[d.id]?.y ?? 160}
                    textAnchor="middle"
                    fill={`hsl(var(--foreground) / ${getOpacity(d) * 0.8})`}
                    fontSize="7"
                    fontWeight="500"
                    pointerEvents="none"
                    className="select-none"
                  >
                    {d.name.length > 8 ? d.id : d.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div>
            {selected ? (
              <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{selected.name}</h3>
                  <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between border-b border-border/50 pb-2 text-sm">
                    <span className="text-muted-foreground">Ethanol production</span>
                    <span className="font-semibold tabular-nums">{selected.ethanolProduction} Cr L/yr</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2 text-sm">
                    <span className="text-muted-foreground">Distilleries</span>
                    <span className="font-semibold tabular-nums">{selected.distilleries}</span>
                  </div>
                  {currentWater && (
                    <>
                      <div className="flex justify-between border-b border-border/50 pb-2 text-sm">
                        <span className="text-muted-foreground">Water stress index</span>
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: getStressColor(currentWater.stressIndex) }} />
                          <span className="font-semibold tabular-nums">{(currentWater.stressIndex * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2 text-sm">
                        <span className="text-muted-foreground">GW decline / yr</span>
                        <span className="font-semibold tabular-nums">{currentWater.groundwaterDecline} m</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{currentWater.description}</p>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-5 text-sm text-muted-foreground">
                <p>Click a state on the map to see its ethanol, water stress, and distillery data.</p>
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">Legend</h4>
                  {mode === "ethanol" && (
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded" style={{background: "hsl(160,70%,35%)"}} /><span>High production</span></div>
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded" style={{background: "hsl(160,50%,75%)"}} /><span>Medium</span></div>
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded" style={{background: "hsl(0,0%,18%)"}} /><span>None / low</span></div>
                    </div>
                  )}
                  {mode === "water" && (
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded bg-red-500" /><span>Severe stress</span></div>
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded bg-amber-500" /><span>Moderate</span></div>
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded bg-green-500" /><span>Low stress</span></div>
                    </div>
                  )}
                  {mode === "distilleries" && (
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded" style={{background: "hsl(200,70%,30%)"}} /><span>50+ distilleries</span></div>
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded" style={{background: "hsl(200,50%,70%)"}} /><span>1-10</span></div>
                      <div className="flex items-center gap-2 text-xs"><div className="h-3 w-6 rounded" style={{background: "hsl(0,0%,18%)"}} /><span>None</span></div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
