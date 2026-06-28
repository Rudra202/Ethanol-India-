"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export function Footer() {
  const ref = useScrollReveal<HTMLElement>();

  const sections = [
    { href: "#overview", label: "Overview" },
    { href: "#simulator", label: "Simulator" },
    { href: "#water", label: "Water cost" },
    { href: "#prices", label: "Prices" },
    { href: "#vehicles", label: "Vehicles" },
    { href: "#suppliers", label: "Suppliers" },
    { href: "#news", label: "News" },
    { href: "#issues", label: "Open questions" },
  ];

  const sources = [
    { href: "#", label: "PPAC — Snapshot of India&apos;s Oil & Gas Data" },
    { href: "#", label: "PIB / Ministry of Petroleum" },
    { href: "#", label: "NITI Aayog — Ethanol Roadmap" },
    { href: "#", label: "MoPNG — Ethanol Portal" },
  ];

  return (
    <footer ref={ref} className="reveal border-t border-border/60 bg-card/60 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ethanol India
            </div>
            <p className="mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Transparent, sourced data on India&apos;s petrol, ethanol blending and the water it really costs.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Data updated 28 Jun 2026.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explore</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {sections.map((s) => (
                <a key={s.href} href={s.href} className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary sources</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {sources.map((s, i) => (
                <a key={i} href={s.href} className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-border/50 pt-6">
          <div className="rounded-xl border border-warning/30 bg-warning/5 p-3 sm:p-4 text-xs leading-relaxed text-muted-foreground">
            <strong>Please note:</strong> Always confirm against the primary source linked on each figure before citing.
            <br /><br />
            Water-footprint numbers are &apos;total crop water&apos; (rainfall + irrigation needed to grow the feedstock) unless stated otherwise. A distillery&apos;s own process water is only about 3-5 litres per litre of ethanol.
            <br /><br />
            Several figures are genuinely contested between industry bodies and independent researchers. Where that is the case we show the range and both positions.
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
            <p>&copy; 2026 Ethanol India &middot; Open data project.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Rudra202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                @Rudra202
              </a>
              <span>Built with open data &middot; by Rudy <span className="text-red-500">&#9829;</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
