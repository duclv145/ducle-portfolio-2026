"use client";

import { Reveal, Stagger, StaggerItem } from "./Motion";
import SectionLabel from "./SectionLabel";
import { disciplines } from "@/lib/data";

export default function Disciplines() {
  // Skills nav link now anchors to the Tools section (which has id="skills").
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
      <Reveal className="mb-10">
        <SectionLabel index="02">Disciplines</SectionLabel>
      </Reveal>
      <Stagger className="flex flex-wrap gap-3 sm:gap-4" gap={0.06}>
        {disciplines.map((d) => (
          <StaggerItem
            key={d}
            className="cursor-default rounded-full border border-white/15 px-5 py-3 text-base font-medium text-neutral-200 transition-colors duration-300 hover:border-accent hover:text-accent sm:px-6 sm:text-lg"
          >
            {d}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
