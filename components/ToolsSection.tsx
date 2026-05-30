"use client";

import { Reveal, Stagger, StaggerItem } from "./Motion";
import SectionLabel from "./SectionLabel";
import { tools } from "@/lib/data";

export default function ToolsSection() {
  return (
    <section id="tools" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
      <Reveal className="mb-12 flex flex-col gap-5">
        <SectionLabel>Tools</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-[-0.02em] text-white">
          The tools I&apos;m using
        </h2>
      </Reveal>

      <Stagger className="flex flex-wrap gap-3" gap={0.06}>
        {tools.map((t) => (
          <StaggerItem
            key={t.name}
            className="cursor-default rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-accent hover:text-accent md:px-5 md:py-3 md:text-base"
          >
            {t.name}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
