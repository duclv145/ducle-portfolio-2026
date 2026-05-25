"use client";

import { motion } from "framer-motion";

const items = [
  "Brand Design",
  "Motion Graphic",
  "Generative AI",
  "Art Direction",
  "Visual Identity",
  "Web Design",
  "Type Systems",
  "Color Theory",
  "Packaging",
  "Campaign Design",
];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex min-w-full shrink-0">
      <motion.div
        className="flex gap-0"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 whitespace-nowrap px-5 py-0"
          >
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-foreground/60 sm:text-base">
              {item}
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-surface py-4">
      {/* Fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface to-transparent"
      />

      <div className="flex overflow-hidden">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
