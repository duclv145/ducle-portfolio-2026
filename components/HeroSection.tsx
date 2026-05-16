"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
};

const line = {
  hidden: { y: "105%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease } },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yLeft  = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative z-10 flex h-[100svh] w-full flex-col overflow-hidden px-6 pt-[68px] sm:px-10 sm:pt-[72px]"
    >
      {/* ── Top meta strip ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease }}
        className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted"
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse inline-block" />
          {profile.available}
        </span>
        <span>Portfolio · 2026</span>
      </motion.div>

      {/* ── Main split grid ── */}
      <div className="flex flex-1 grid-cols-12 flex-col gap-10 md:grid md:gap-x-6">

        {/* LEFT — Giant headline */}
        <motion.div
          style={{ y: yLeft, opacity }}
          className="flex flex-col justify-center md:col-span-7 md:col-start-1"
        >
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="overflow-hidden font-display tracking-[-0.03em] text-fg"
            style={{ fontSize: "clamp(3rem, 7.5vw, 8.5rem)", lineHeight: 0.88 }}
          >
            {["Graphic", "Designer", "& Generative", "AI Designer."].map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  variants={line}
                  className={`block ${i === 3 ? "italic text-fg/70" : ""} ${i === 1 ? "ml-[8%]" : ""} ${i === 2 ? "ml-[4%]" : ""}`}
                >
                  {word}
                  {i === 3 && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.4, duration: 1.0, ease }}
                      className="ml-3 inline-block h-[0.1em] w-[0.7em] origin-left bg-accent align-middle"
                    />
                  )}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted"
          >
            <span className="inline-block h-px w-8 bg-white/20" />
            scroll to explore
          </motion.div>
        </motion.div>

        {/* RIGHT — Name card + bio */}
        <motion.div
          style={{ y: yRight, opacity }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease }}
          className="flex flex-col justify-center gap-8 md:col-span-4 md:col-start-8"
        >
          {/* Name badge + avatar */}
          <div className="flex items-center gap-4">
            <div className="relative h-[150px] w-[150px] flex-shrink-0 overflow-hidden rounded-full border border-white/20">
              <img src="/avatar.jpg" alt="Duc Le" className="h-full w-full object-cover" />
            </div>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-display text-3xl italic text-fg sm:text-4xl">{profile.name}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
                Senior Graphic Designer
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm leading-relaxed text-fg/60">
            {profile.bio}
          </p>

          {/* Location */}
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
            ◉ &nbsp;{profile.city}
          </p>

        </motion.div>
      </div>

      {/* ── Bottom CTA bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease }}
        className="flex items-center justify-between gap-4 border-t border-white/10 py-5"
      >
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted sm:block">
          Phu My Hung · Yeah1 · FPT · DVH-Bransons
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#work"
            data-cursor="view"
            data-cursor-label="View"
            data-magnet
            data-magnet-strength="0.45"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-fg/30 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fg transition-colors hover:text-bg"
          >
            <span className="relative z-10">View work</span>
            <span className="absolute inset-0 -translate-x-full bg-fg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            data-cursor="hover"
            data-magnet
            data-magnet-strength="0.45"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-80"
          >
            Hire me →
          </a>
        </div>
      </motion.div>

      {/* Ghost number */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.035 }}
        transition={{ delay: 1.6, duration: 1.4 }}
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 select-none font-display text-[28vw] leading-none text-fg"
      >
        2026
      </motion.span>
    </section>
  );
}
