"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const chapters = [
  {
    id: "ch-1",
    title: "India now burns 46 billion litres of petrol a year",
    body: "Petrol consumption has grown 43% in five years. At E20, one-fifth of every litre is ethanol — that's 9.2 billion litres of ethanol blended annually.",
    stat: "45.8B L/yr",
    statLabel: "Petrol consumption",
  },
  {
    id: "ch-2",
    title: "Growing that ethanol takes an astonishing amount of water",
    body: "Maize — now the single largest feedstock — needs up to 4,500 litres of total crop water per litre of ethanol. For rice it's over 10,000 litres.",
    stat: "~2,860–10,790 L",
    statLabel: "Water per litre of ethanol",
  },
  {
    id: "ch-3",
    title: "Most of India's ethanol comes from Uttar Pradesh",
    body: "Uttar Pradesh alone produces over 65 crore litres of ethanol annually — 27% of the national total. Maharashtra and Karnataka add another quarter.",
    stat: "65 Cr L/yr",
    statLabel: "UP ethanol production",
  },
  {
    id: "ch-4",
    title: "The water-stress map tracks closely with ethanol production",
    body: "India's top ethanol states — UP, Maharashtra, Karnataka, Tamil Nadu — are also among the most water-stressed, with groundwater declining 1–3 metres per year.",
    stat: "1–3 m/yr",
    statLabel: "Groundwater decline rate",
  },
  {
    id: "ch-5",
    title: "E20 saves forex but costs water — the trade-off is real",
    body: "India saved ₹1.44 lakh crore in foreign exchange but the long-term water cost of growing ethanol feedstocks could dwarf those savings if irrigation patterns don't change.",
    stat: "₹1.44L Cr saved",
    statLabel: "Forex saved vs water cost",
  },
];

export function ScrollStorySection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = chapters.map((_, i) => {
      const el = chapterRefs.current[i];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveChapter(i);
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="story" ref={sectionRef} className="reveal scroll-mt-20 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Deep dive
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          The story behind the blend
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Scroll through the key tensions in India&apos;s ethanol programme — the numbers that matter.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-8 sm:space-y-12">
            {chapters.map((ch, i) => (
              <div
                key={ch.id}
                ref={(el) => { chapterRefs.current[i] = el; }}
                className="min-h-0 flex items-center"
              >
                <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-6 sm:p-8">
                  <div className="text-xs font-medium text-accent mb-2">Chapter {i + 1}</div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{ch.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">{ch.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/60 p-6">
                <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden mb-6">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                  />
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">{chapters[activeChapter].stat}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{chapters[activeChapter].statLabel}</div>

                <div className="mt-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chapters</div>
                  {chapters.map((ch, i) => (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setActiveChapter(i);
                        chapterRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`flex items-center gap-3 w-full text-left text-xs sm:text-sm transition-colors ${
                        i === activeChapter ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className={`h-2 w-2 shrink-0 rounded-full transition-colors ${i === activeChapter ? "bg-accent" : "bg-border"}`} />
                      <span className="truncate">{ch.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
