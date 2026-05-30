"use client";

import { Reveal, Stagger, StaggerItem } from "./Motion";
import SectionLabel from "./SectionLabel";
import { interests } from "@/lib/data";

export default function Interests() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
      <Reveal className="mb-10">
        <SectionLabel index="04">Interests</SectionLabel>
      </Reveal>
      <Stagger className="flex flex-wrap gap-3 sm:gap-4" gap={0.06}>
        {interests.map((it) => (
          <StaggerItem
            key={it}
            className="cursor-default rounded-full bg-white/[0.04] px-5 py-3 text-base font-medium text-neutral-200 ring-1 ring-inset ring-white/10 transition-colors duration-300 hover:bg-accent hover:text-black hover:ring-accent sm:px-6 sm:text-lg"
          >
            {it}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
