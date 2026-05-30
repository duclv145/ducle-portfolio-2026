"use client";

import { Reveal } from "./Motion";
import SplitText from "./SplitText";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
      <Reveal className="mb-12 flex flex-col gap-5">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
          <SplitText text="Experience" stagger={0.08} distance={40} />
        </h2>
      </Reveal>

      <div className="border-t border-white/10">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <div className="group grid grid-cols-1 gap-2 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[200px_1fr] sm:gap-8 sm:px-2">
              <span className="text-sm font-medium tabular-nums text-neutral-500 transition-colors duration-300 group-hover:text-accent">
                {job.period}
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{job.company}</h3>
                <span className="shrink-0 text-sm text-neutral-400">{job.role}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
