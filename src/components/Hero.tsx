"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticEl from "./MagneticEl";

const ease = [0.22, 1, 0.36, 1] as const;

const lines = [
  { text: "Hello,", delay: 0.18, weight: 300, style: "normal" as const },
  { text: "my name's Duc Le.", delay: 0.32, weight: 600, style: "normal" as const },
  { text: "I'm a Graphic Designer.", delay: 0.46, weight: 300, style: "italic" as const },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

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
      {/* Column grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.035) 0px,
            rgba(255,255,255,0.035) 1px,
            transparent 1px,
            transparent 25%
          )`,
        }}
      />

      {/* Parallax decorative "DL" background */}
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
            WebkitTextStroke: "1px rgba(255,255,255,0.032)",
            letterSpacing: "-0.06em",
            userSelect: "none",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          DL
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, position: "relative", zIndex: 10 }}
        className="mx-auto max-w-[1200px] px-5 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32"
      >
        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.06 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.55)",
                textTransform: "lowercase",
              }}
            >
              Available for a new job
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "lowercase",
            }}
          >
            Hanoi · Vietnam
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="mt-0">
          {lines.map(({ text, delay, weight, style }, i) => (
            <motion.span
              key={i}
              className="block"
              style={{ overflow: "hidden", paddingBottom: "0.05em" }}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: weight,
                  fontStyle: style,
                  fontSize: "clamp(48px, 9vw, 96px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                  color: style === "italic" ? "rgba(255,255,255,0.6)" : "#fff",
                  display: "block",
                }}
              >
                {text}
              </span>
            </motion.span>
          ))}
        </h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          style={{
            height: 1,
            background: "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
            marginTop: 24,
            maxWidth: 480,
            transformOrigin: "left",
          }}
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.68 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticEl strength={0.4}>
            <a
              href="#work"
              className="focus-ring"
              style={{
                background: "#fff",
                color: "#0022E5",
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
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.8)",
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
                transition: "background 0.18s ease",
              }}
            >
              About me
            </a>
          </MagneticEl>
        </motion.div>

        {/* Email footer line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.9 }}
          style={{ marginTop: 56 }}
        >
          <a
            href="mailto:duclv145@gmail.com"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.35)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
            }}
          >
            duclv145@gmail.com
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
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
          style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em" }}
        >
          scroll
        </span>
        <div style={{ width: 1, height: 56, overflow: "hidden", position: "relative" }}>
          <div
            className="scroll-indicator"
            style={{
              width: 1,
              height: "100%",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
