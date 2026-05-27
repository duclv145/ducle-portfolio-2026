"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticEl from "./MagneticEl";

const ease = [0.22, 1, 0.36, 1] as const;

const DASHIVE_BLUE = "#0022E5";

const lines = [
  { text: "Hello,", delay: 0.15, style: "tenor" },
  { text: "my name's Duc Le.", delay: 0.28, style: "serif" },
  { text: "I'm a Graphic Designer.", delay: 0.42, style: "italic" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Parallax layers */
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate overflow-hidden"
      style={{ minHeight: "100vh" }}
    >

      {/* ── Parallax decorative "DL" background ────────────────────── */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontSize: "clamp(280px, 48vw, 680px)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.042)",
            letterSpacing: "-0.06em",
            userSelect: "none",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          DL
        </span>
      </motion.div>

      {/* ── Radial glow at center ───────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 55% at 50% 40%, rgba(126,184,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, position: "relative", zIndex: 10 }}
        className="mx-auto max-w-[1200px] px-5 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32"
      >
        <div>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="caption uppercase"
            style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)" }}
          >
            Duc Le — Portfolio · 2026
          </motion.p>

          {/* Headline */}
          <h1 className="mt-6">
            {lines.map(({ text, delay, style }, i) => (
              <motion.span
                key={i}
                className="block"
                style={{ overflow: "hidden", paddingBottom: "0.05em" }}
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay }}
              >
                {style === "tenor" && (
                  <span style={{
                    fontFamily: '"Google Sans", "Google Sans Display", ui-sans-serif, sans-serif',
                    fontWeight: 400,
                    fontSize: "clamp(48px, 9vw, 96px)",
                    lineHeight: 1.0,
                    letterSpacing: "0.06em",
                    background: "linear-gradient(90deg, #fff 0%, #a8c0ff 30%, #e0c8ff 50%, #a8c0ff 70%, #fff 100%)",
                    backgroundSize: "300% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 6s linear infinite",
                    display: "block",
                  }}>
                    {text}
                  </span>
                )}
                {style === "serif" && (
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(48px, 9vw, 96px)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.02em",
                    color: "#fff",
                    display: "block",
                  }}>
                    {text}
                  </span>
                )}
                {style === "italic" && (
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontSize: "clamp(42px, 8vw, 84px)",
                    lineHeight: 1.1,
                    letterSpacing: "0em",
                    color: "rgba(255,255,255,0.65)",
                    display: "block",
                  }}>
                    {text}
                  </span>
                )}
              </motion.span>
            ))}
          </h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            style={{
              height: 1,
              background: "linear-gradient(90deg, rgba(126,184,255,0.5) 0%, transparent 100%)",
              marginTop: 24,
              maxWidth: 480,
              transformOrigin: "left",
            }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.62 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticEl strength={0.4}>
              <a
                href="#work"
                className="focus-ring"
                style={{
                  background: "#fff",
                  color: DASHIVE_BLUE,
                  fontFamily: '"Google Sans", ui-sans-serif, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "13px 22px",
                  borderRadius: 100,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                }}
              >
                See selected work →
              </a>
            </MagneticEl>

            <MagneticEl strength={0.3}>
              <a
                href="#about"
                className="focus-ring"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontFamily: '"Google Sans", ui-sans-serif, sans-serif',
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "13px 22px",
                  borderRadius: 100,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.18s ease",
                }}
              >
                About me
              </a>
            </MagneticEl>
          </motion.div>

          {/* Availability + avatar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
            className="mt-16 flex flex-wrap items-center gap-6"
          >
            <div
              className="flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                borderRadius: 100,
                padding: "10px 16px",
              }}
            >
              <span className="relative inline-flex items-center justify-center h-2 w-2">
                <span
                  className="dot-ping-ripple absolute inline-block h-2 w-2 rounded-full"
                  style={{ background: "#4ade80" }}
                />
                <span
                  className="relative inline-block h-2 w-2 rounded-full"
                  style={{ background: "#4ade80" }}
                />
              </span>
              <span
                className="body-sm"
                style={{
                  textTransform: "none",
                  letterSpacing: "0.01em",
                  color: "#fff",
                }}
              >
                Available for a new job
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="relative h-10 w-10 rounded-full overflow-hidden"
                style={{ border: "2px solid rgba(255,255,255,0.3)" }}
              >
                <Image
                  src="/avatar.png"
                  alt="Duc Le portrait"
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="body-sm" style={{ color: "#fff" }}>Duc Le</p>
                <p className="micro">
                  <a
                    href="mailto:duclv145@gmail.com"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                  >
                    duclv145@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
        aria-hidden
      >
        <span
          className="caption"
          style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em" }}
        >
          scroll
        </span>
        <div style={{ width: 1, height: 56, overflow: "hidden", position: "relative" }}>
          <div
            className="scroll-indicator"
            style={{
              width: 1,
              height: "100%",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
