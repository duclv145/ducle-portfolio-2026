"use client";

import { Reveal, Stagger, StaggerItem } from "./Motion";
import SplitText from "./SplitText";
import { disciplines, tools, interests } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1280px] px-6 py-10 md:px-10 md:py-14">

      {/* Eyebrow */}
      <Reveal className="mb-10 flex items-center gap-3 md:mb-14">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          What I do
        </span>
      </Reveal>

      {/* ── Ghost discipline words ── */}
      <div className="flex flex-col">
        {disciplines.map((d, i) => (
          <Reveal key={d} delay={i * 0.04}>
            <div className="group flex items-center justify-between border-b border-white/10 py-3 md:py-4">
              <span className="font-display text-[clamp(2.25rem,8vw,6.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-transparent transition-all duration-300 [-webkit-text-stroke:1.2px_var(--ghost-stroke)] group-hover:text-accent group-hover:[-webkit-text-stroke:1.2px_transparent]">
                {d}
              </span>
              <span className="hidden shrink-0 text-sm tabular-nums text-neutral-600 transition-colors duration-300 group-hover:text-accent sm:block">
                0{i + 1}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── Tools + Interests ── */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal className="mb-6">
            <h3 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
              <SplitText text="Tools" stagger={0.08} distance={36} />
            </h3>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3" gap={0.05}>
            {tools.map((t) => (
              <StaggerItem
                key={t.name}
                className="cursor-default rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-accent hover:text-accent md:px-5 md:py-3"
              >
                {t.name}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div>
          <Reveal className="mb-6">
            <h3 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
              <SplitText text="Interests" stagger={0.08} distance={36} />
            </h3>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3" gap={0.05}>
            {interests.map((it) => (
              <StaggerItem
                key={it}
                className="cursor-default rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-accent hover:text-accent md:px-5 md:py-3"
              >
                {it}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
