"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-2 py-3 sm:py-4 text-left text-xs sm:text-sm font-medium transition-colors hover:text-primary"
      >
        <span className="flex-1">{title}</span>
        <svg
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-3 sm:pb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
}

export function IssuesSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="issues" ref={ref} className="reveal scroll-mt-20 border-y border-border/50 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          What could go wrong
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-heading">
          Projected issues &amp; open questions
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Forward-looking concerns from researchers, the government&apos;s own surveys, and counter-arguments from industry.
        </p>

        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="mb-4 grid grid-cols-3 gap-2 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span>Concern</span>
              <span>Govt caution</span>
              <span className="text-right">Industry view</span>
            </div>

            <AccordionItem title="600M Indians face high-to-extreme water stress" defaultOpen>
              <p>
                NITI Aayog&apos;s Composite Water Management Index warned India is undergoing &apos;the worst water crisis in its history,&apos; with nearly 600 million people facing high-to-extreme water stress and ~70% of water contaminated.
              </p>
              <div className="mt-2 rounded-lg bg-secondary/20 p-2 text-xs">
                <strong>Source:</strong> NITI Aayog CWMI (via PIB) · Jun 2018
              </div>
            </AccordionItem>

            <AccordionItem title="Water demand could be twice the supply by 2030">
              <p>
                India&apos;s water demand is projected to reach twice the available supply by 2030, according to multiple government and international reports.
              </p>
            </AccordionItem>

            <AccordionItem title="Ethanol scale-up may deepen groundwater stress">
              <p>
                The rapid expansion of ethanol production, particularly from water-intensive feedstocks like sugarcane and maize, could significantly worsen groundwater depletion in already stressed regions.
              </p>
            </AccordionItem>

            <AccordionItem title="Economic Survey: maize-for-ethanol an 'early warning'">
              <p>
                The government&apos;s own Economic Survey calls the maize-for-ethanol shift an &apos;early warning signal&apos; of tension between energy and food self-reliance.
              </p>
            </AccordionItem>

            <AccordionItem title="Rice-to-ethanol may undermine food & water security">
              <p>
                Using FCI surplus rice for ethanol production raises concerns about the water intensity of paddy cultivation and its impact on food security.
              </p>
            </AccordionItem>

            <AccordionItem title="Maize 'fuel vs feed': India turned net importer">
              <p>
                The diversion of maize for ethanol has contributed to India becoming a net importer of maize, affecting the poultry and livestock feed sectors.
              </p>
            </AccordionItem>

            <AccordionItem title="Sugarcane + paddy use ~70% of irrigation water">
              <p>
                NITI Aayog&apos;s Task Force on Sugarcane notes that sugarcane and paddy together consume roughly 70% of India&apos;s irrigation water.
              </p>
            </AccordionItem>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="rounded-xl border border-warning/40 bg-warning/5 p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm font-semibold text-warning">Industry counter-view</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                The &apos;10,000 litres&apos; figure conflates rainfall with process water.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm font-semibold text-primary">Government response</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Benefits include forex savings, CO₂ reductions, and farmer payments.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm font-semibold">Key takeaway</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                The debate involves competing claims about water use, energy security, and food production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
