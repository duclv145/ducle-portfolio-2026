"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Brand systems, marketing sites, motion reels and generative-AI workflows. Anything where one designer can move faster than a five-person agency.",
  },
  {
    q: "How long does a typical engagement run?",
    a: "Two to eight weeks for a focused sprint; three months for a brand system end-to-end. Anything shorter than a week is a favor for friends.",
  },
  {
    q: "Do you work with teams already in motion?",
    a: "Yes — I drop in as an embedded designer for product, marketing or content teams. Figma file in, Notion thread out.",
  },
  {
    q: "What does pricing look like?",
    a: "Project-based for brand and sites, day-rate for embedded work. I always send a fixed quote after the discovery call — no scope-creep invoices.",
  },
  {
    q: "Are you available outside Vietnam?",
    a: "I work async across all timezones and travel for kickoffs. Most of my clients are in the US, EU and APAC.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-canvas py-24 lg:py-32 border-t border-[var(--hairline-soft)]"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          {/* Header */}
          <div>
            <FadeIn>
              <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
                04 — FAQ
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="display-lg text-ink mt-5">
                Quick
                <br />
                answers.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="body text-ink-muted mt-6 max-w-sm">
                Anything else?{" "}
                <a href="mailto:duclv145@gmail.com" className="link">
                  Email me directly
                </a>
                .
              </p>
            </FadeIn>
          </div>

          {/* Rows */}
          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <FadeIn key={f.q} delay={0.05 * i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left border-t border-[var(--hairline-soft)] py-6 flex items-start justify-between gap-6 focus-ring"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1">
                      <p className="headline text-ink">{f.q}</p>
                      <div
                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                        style={{
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <p className="body-lg text-ink-muted mt-4 pr-8">{f.a}</p>
                        </div>
                      </div>
                    </div>
                    <span
                      className="btn-icon-circular shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </FadeIn>
              );
            })}
            <div className="border-t border-[var(--hairline-soft)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
