"use client";

export function HeroSection() {
  const floatingCards = [
    {
      label: "Mileage",
      value: "−3 to 6%",
      href: "#vehicles",
      color: "border-primary/30 bg-primary/5 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.5)]",
    },
    {
      label: "No E0 choice",
      value: "only E20 at pumps",
      href: "#vehicles",
      color: "border-accent/30 bg-accent/5 hover:shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.5)]",
    },
    {
      label: "Thirsty fuel",
      value: "~2,860 L water / L",
      href: "#water",
      color: "border-warning/30 bg-warning/5 hover:shadow-[0_8px_30px_-8px_hsl(var(--warning)/0.5)]",
    },
    {
      label: "Food vs fuel",
      value: "maize & rice diverted",
      href: "#issues",
      color: "border-destructive/30 bg-destructive/15 hover:shadow-[0_8px_30px_-8px_hsl(var(--destructive)/0.5)]",
    },
    {
      label: "Insurance myth",
      value: "'voids cover' = fake",
      href: "#vehicles",
      color: "border-primary/30 bg-primary/5 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.5)]",
    },
  ];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Open data &middot; every figure sourced
        </div>

        <h1 className="max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-gradient">India is blending ethanol into its petrol.</span><br className="hidden sm:block" />
          <span className="text-gradient-heading">What does it cost in water?</span>
        </h1>

        <p className="mt-6 max-w-2xl text-center text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground px-2 sm:px-0">
          Ethanol India is an open-data dashboard tracking India&apos;s petrol consumption, the Ethanol Blended Petrol (EBP) programme, the water footprint of ethanol feedstocks, fuel price break-ups, the impact of E20 on vehicles, suppliers, global blending policies and the water-stress debate — every figure tagged with its source.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Try the live simulator
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#water"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            See the water cost
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-10 hidden md:block">
        {floatingCards.map((card, i) => (
          <a
            key={card.label}
            href={card.href}
            className={`absolute animate-floaty rounded-xl border px-4 py-2 backdrop-blur-sm transition-all hover:-translate-y-0.5 ${card.color}`}
            style={{
              top: `${15 + i * 16}%`,
              right: i % 2 === 0 ? "5%" : "auto",
              left: i % 2 === 1 ? "5%" : "auto",
              animationDelay: `${i * 1.2}s`,
            }}
          >
            <div className="text-xs text-muted-foreground whitespace-nowrap">{card.label}</div>
            <div className="text-sm font-semibold whitespace-nowrap">{card.value}</div>
          </a>
        ))}
      </div>

      <div className="z-10 mt-auto flex flex-wrap justify-center gap-2 px-4 pb-8 md:hidden">
        {floatingCards.map((card, i) => (
          <a
            key={card.label}
            href={card.href}
            className={`animate-floaty rounded-xl border px-3 py-1.5 backdrop-blur-sm text-xs ${card.color}`}
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <span className="font-medium">{card.label}:</span> {card.value}
          </a>
        ))}
      </div>
    </section>
  );
}
