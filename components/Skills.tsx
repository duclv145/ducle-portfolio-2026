"use client";

import { Reveal, Stagger, StaggerItem } from "./Motion";
import { tools, disciplines, interests } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">

        {/* Tools */}
        <div>
          <Reveal className="mb-8">
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.01em] text-white">
              Tools
            </h3>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3" gap={0.06}>
            {tools.map((t) => (
              <StaggerItem key={t.name}
                className="cursor-default rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-accent hover:text-accent md:px-5 md:py-3 md:text-base">
                {t.name}
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Disciplines */}
        <div>
          <Reveal className="mb-8">
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.01em] text-white">
              Disciplines
            </h3>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3" gap={0.06}>
            {disciplines.map((d) => (
              <StaggerItem key={d}
                className="cursor-default rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-accent hover:text-accent md:px-5 md:py-3 md:text-base">
                {d}
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Interests */}
        <div>
          <Reveal className="mb-8">
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.01em] text-white">
              Interests
            </h3>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3" gap={0.06}>
            {interests.map((it) => (
              <StaggerItem key={it}
                className="cursor-default rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-accent hover:text-accent md:px-5 md:py-3 md:text-base">
                {it}
              </StaggerItem>
            ))}
          </Stagger>
        </div>

      </div>
    </section>
  );
}
