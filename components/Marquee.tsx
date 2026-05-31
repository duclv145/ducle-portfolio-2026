"use client";

import { motion } from "framer-motion";

const items = [
  "Web Design",
  "Brand Strategy",
  "Motion Graphics",
  "Art Direction",
  "Generative AI",
  "Brand Identity",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 py-5 md:py-6">
      <motion.div
        className="flex w-max items-center gap-10 md:gap-14"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {row.map((label, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10 md:gap-14">
            <span className="text-lg font-medium uppercase tracking-wide text-neutral-300 md:text-2xl">
              {label}
            </span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
