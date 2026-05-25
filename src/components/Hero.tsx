"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-canvas"
      style={{ minHeight: "100vh" }}
    >
      {/* Atmospheric backdrop glows — subtle, never section grounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(106,76,245,0.22), transparent 60%), radial-gradient(50% 40% at 0% 30%, rgba(255,122,61,0.10), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="caption text-ink-muted uppercase"
          style={{ letterSpacing: "0.18em" }}
        >
          Duc Le — Portfolio · 2026
        </motion.p>

        {/* Poster headline — display-xxl at -5.5px tracking */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="display-xxl text-ink mt-6"
        >
          Graphic Designer
          <br />
          &amp; Generative
          <br />
          AI Designer.
        </motion.h1>

        {/* Subhead row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end"
        >
          <p className="body-lg text-ink-muted max-w-xl">
            I&apos;m a hands-on graphic designer with 10+ years shaping brand
            identity, motion, and generative-AI visuals — translating ideas into
            systems that ship.
          </p>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a href="#work" className="btn-primary focus-ring">
              See selected work →
            </a>
          </div>
        </motion.div>

        {/* Live availability + portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.75 }}
          className="mt-16 flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-3 btn-secondary" style={{ background: "var(--surface-1)" }}>
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                background: "var(--success)",
                boxShadow: "0 0 0 4px rgba(34,197,94,0.18)",
              }}
            />
            <span className="body-sm">Available for a new job</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden border border-[var(--hairline)]">
              <Image
                src="/avatar.png"
                alt="Duc Le portrait"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="body-sm text-ink">Duc Le</p>
              <p className="micro text-ink-muted">
                <a href="mailto:duclv145@gmail.com" className="text-ink hover:text-[var(--accent-blue)] transition-colors">duclv145@gmail.com</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
