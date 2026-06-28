"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const blendingData = [
  { year: "2014-15", pct: 1.4 },
  { year: "2015-16", pct: 2.3 },
  { year: "2016-17", pct: 3.1 },
  { year: "2017-18", pct: 4.2 },
  { year: "2018-19", pct: 5.0 },
  { year: "2019-20", pct: 5.5 },
  { year: "2020-21", pct: 8.5 },
  { year: "2021-22", pct: 10.0 },
  { year: "2022-23", pct: 12.1 },
  { year: "2023-24", pct: 15.9 },
  { year: "2024-25", pct: 19.2 },
];

const petrolData = [
  { year: "2019-20", value: 32.1 },
  { year: "2020-21", value: 28.5 },
  { year: "2021-22", value: 33.8 },
  { year: "2022-23", value: 37.2 },
  { year: "2023-24", value: 41.5 },
  { year: "2024-25", value: 45.8 },
];

const ethanolVolumeData = [
  { year: "2014-15", value: 94 },
  { year: "2015-16", value: 111 },
  { year: "2016-17", value: 140 },
  { year: "2017-18", value: 166 },
  { year: "2018-19", value: 189 },
  { year: "2019-20", value: 213 },
  { year: "2020-21", value: 302 },
  { year: "2021-22", value: 407 },
  { year: "2022-23", value: 538 },
  { year: "2023-24", value: 760 },
  { year: "2024-25", value: 1003 },
];

const customTickStyle = { fill: "hsl(var(--muted-foreground))", fontSize: 11 };

export function BlendingChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={blendingData}>
        <defs>
          <linearGradient id="blendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="hsl(var(--border) / 0.4)" strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={customTickStyle} />
        <YAxis domain={[0, 25]} tick={customTickStyle} tickFormatter={(v) => `${v}%`} />
        <Tooltip
          contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }}
        />
        <Area type="monotone" dataKey="pct" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#blendGrad)" animationDuration={1200} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function PetrolChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={petrolData}>
        <CartesianGrid stroke="hsl(var(--border) / 0.4)" strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={customTickStyle} />
        <YAxis tick={customTickStyle} tickFormatter={(v) => `${v}B`} />
        <Tooltip
          contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }}
        />
        <Bar dataKey="value" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} animationDuration={1200} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function EthanolVolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={ethanolVolumeData}>
        <defs>
          <linearGradient id="ethanolGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3} />
            <stop offset="100%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="hsl(var(--border) / 0.4)" strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={customTickStyle} />
        <YAxis tick={customTickStyle} tickFormatter={(v) => `${v}Cr`} />
        <Tooltip
          contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }}
        />
        <Area type="monotone" dataKey="value" stroke="hsl(var(--chart-3))" strokeWidth={2.5} fill="url(#ethanolGrad)" animationDuration={1200} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const donutData = [
  { name: "Maize", pct: 48, color: "#22c55e" },
  { name: "FCI / surplus rice", pct: 18, color: "#3b82f6" },
  { name: "Sugarcane juice", pct: 16, color: "#f59e0b" },
  { name: "B-heavy molasses", pct: 13, color: "#8b5cf6" },
  { name: "Damaged grain", pct: 3, color: "#ec4899" },
  { name: "C-heavy molasses", pct: 2, color: "#64748b" },
];

export function DonutChart() {
  const total = donutData.reduce((s, d) => s + d.pct, 0);
  const arcs = donutData.map((d, i) => {
    const startAngle = (donutData.slice(0, i).reduce((s, x) => s + x.pct, 0) / total) * 360;
    const endAngle = (donutData.slice(0, i + 1).reduce((s, x) => s + x.pct, 0) / total) * 360;
    return { ...d, startAngle, endAngle };
  });

  const cx = 120, cy = 120, r = 90, ir = 55;

  function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function describeArc(startAngle: number, endAngle: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const startI = polarToCartesian(cx, cy, ir, endAngle);
    const endI = polarToCartesian(cx, cy, ir, startAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} L ${endI.x} ${endI.y} A ${ir} ${ir} 0 ${largeArc} 1 ${startI.x} ${startI.y} Z`;
  }

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 240 240" className="w-56 h-56 sm:w-64 sm:h-64">
        {arcs.map((d, i) => (
          <path
            key={i}
            d={describeArc(d.startAngle, d.endAngle)}
            fill={d.color}
            opacity={0.85}
            className="hover:opacity-100 transition-opacity cursor-pointer"
          />
        ))}
        <circle cx={cx} cy={cy} r={ir - 4} fill="hsl(var(--card))" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">Grain 69%</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Sugarcane 31%</text>
      </svg>
      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {donutData.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
            <span>{d.name}</span>
            <span className="font-medium text-foreground">{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
