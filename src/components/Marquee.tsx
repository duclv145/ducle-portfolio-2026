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
    <div className="flex min-w-full shrink-0 overflow-hidden">
      <motion.div
        className="flex gap-0"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{
          duration: 30,
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
            <span
              className="caption uppercase"
              style={{
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {item}
            </span>
            <span
              aria-hidden
              className="marquee-item-dot"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-4 border-y border-[var(--hairline-soft)]"
      style={{ background: "rgba(0,0,0,0.15)" }}
    >
      {/* Fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background: "linear-gradient(to right, var(--canvas), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background: "linear-gradient(to left, var(--canvas), transparent)",
        }}
      />

      <div className="flex overflow-hidden">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
