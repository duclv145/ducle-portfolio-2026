"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import SplitText from "./SplitText";

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "8", label: "Featured projects" },
  { value: "6", label: "Companies" },
  { value: "20+", label: "Brands shaped" },
];

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

        {/* Portrait */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/avatar.png"
                alt="Duc Le"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
          <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-medium text-neutral-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Award-winning designer
          </div>
        </Reveal>

        {/* Heading + stats */}
        <div>
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Why work with me
            </span>
          </Reveal>

          <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            <SplitText text="High quality, every project." stagger={0.06} distance={40} />
          </h2>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-[1.8] text-neutral-400 md:text-lg">
              A decade of work across brand identity, motion, and generative AI — turning briefs
              into visual systems that hold a brand together long after the deck closes.
            </p>
          </Reveal>

          {/* Stats */}
          <Stagger
            className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4"
            gap={0.08}
          >
            {stats.map((s) => (
              <StaggerItem key={s.label} className="flex flex-col gap-1">
                <span className="font-display text-4xl font-bold text-white md:text-5xl">
                  {s.value}
                </span>
                <span className="text-xs leading-snug text-neutral-500">{s.label}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
