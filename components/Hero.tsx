"use client";

import { motion } from "framer-motion";
import { scrollToId } from "./LenisProvider";
import SplitText from "./SplitText";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      {/* Subtle dark radial glow — bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 75% 100%, rgba(212,255,63,0.09) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* ── "Open to New Projects" with lime square ── */}
          <motion.div
            variants={item}
            className="mb-7 flex items-center gap-2.5 text-sm font-medium text-accent"
          >
            <span className="inline-block h-[10px] w-[10px] flex-shrink-0 bg-accent" />
            Duc Le - Portfolio 2026
          </motion.div>

          {/* ── Headline — word-by-word mask reveal ── */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.75rem,6.5vw,7rem)] font-bold leading-[1.2] tracking-[-0.025em] text-white"
          >
            <SplitText
              text="I turn briefs into visual systems that endure."
              onMount
              delay={0.25}
              stagger={0.07}
              distance={60}
            />
          </motion.h1>

          {/* ── CTAs ── */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-2xl bg-accent px-8 py-4 text-base font-bold text-black shadow-[0_0_48px_-6px_rgba(212,255,63,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_64px_0px_rgba(212,255,63,1)] active:translate-y-0"
            >
              Get in touch
            </button>
            <button
              onClick={() => scrollToId("work")}
              className="rounded-2xl border border-accent bg-transparent px-8 py-4 text-base font-bold text-accent shadow-[0_0_40px_-12px_rgba(212,255,63,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-black active:translate-y-0"
            >
              My work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
