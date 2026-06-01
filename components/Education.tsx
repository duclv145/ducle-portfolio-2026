"use client";

import { Reveal } from "./Motion";
import SplitText from "./SplitText";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1280px] px-6 py-10 md:px-10 md:py-14">
      <Reveal className="mb-12 flex flex-col gap-5">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
          <SplitText text="Education" stagger={0.08} distance={40} />
        </h2>
      </Reveal>

      <div className="border-t border-white/10">
        {education.map((ed, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <div className="group grid grid-cols-1 gap-3 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:px-2">
              <h3 className="relative block overflow-hidden text-lg font-semibold sm:text-xl">
                <span className="block text-white transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                  {ed.school}
                </span>
                <span className="absolute left-0 top-0 block translate-y-full text-accent transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  {ed.school}
                </span>
              </h3>
              <div className="flex flex-col gap-1 sm:items-end">
                {ed.lines.map((line) => (
                  <span key={line} className="text-sm text-neutral-400">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
