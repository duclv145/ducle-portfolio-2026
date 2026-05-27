"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticEl from "./MagneticEl";

const ease = [0.22, 1, 0.36, 1] as const;
const DASHIVE_BLUE = "#0022E5";

function CharReveal({
  text,
  delay = 0,
  stagger = 0.034,
  style,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span style={style}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.88,
              ease,
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate overflow-hidden"
      style={{ minHeight: "100vh" }}
    >

      {/* ── Parallax "DL" watermark ────────────────────────────────── */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontSize: "clamp(200px, 38vw, 520px)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.038)",
            letterSpacing: "-0.06em",
            lineHeight: 0.8,
            userSelect: "none",
            marginRight: "-0.04em",
            marginBottom: "-0.08em",
          }}
        >
          DL
        </span>
      </motion.div>

      {/* ── Floating gradient orbs ─────────────────────────────────── */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        style={{ top: "22%", right: "12%", zIndex: 5 }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1, y: [0, -18, 0] }}
        transition={{
          opacity: { delay: 1.1, duration: 0.7 },
          scale: { delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          y: { delay: 1.1, duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, #c4d4ff 0%, #6a4cf5 60%, #3a1fa0 100%)",
            boxShadow: "0 0 50px rgba(106,76,245,0.55), 0 0 100px rgba(106,76,245,0.2)",
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        style={{ top: "42%", right: "6%", zIndex: 5 }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1, y: [0, 14, 0] }}
        transition={{
          opacity: { delay: 1.3, duration: 0.7 },
          scale: { delay: 1.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          y: { delay: 1.3, duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden
      >
        <div
          style={{
            width: 44,
            height: 52,
            borderRadius: "40% 60% 65% 35% / 45% 45% 55% 55%",
            background: "radial-gradient(circle at 35% 28%, #ffb088 0%, #ff7a3d 50%, #d44df0 100%)",
            boxShadow: "0 0 36px rgba(212,77,240,0.45)",
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        style={{ top: "15%", right: "22%", zIndex: 5 }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 0.7, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.7 },
          scale: { delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          y: { delay: 1.5, duration: 3.8, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, #a8f0c6 0%, #4ade80 100%)",
            boxShadow: "0 0 24px rgba(74,222,128,0.5)",
          }}
        />
      </motion.div>

      {/* ── Radial glow ────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(55% 45% at 10% 55%, rgba(126,184,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, position: "relative", zIndex: 10 }}
        className="mx-auto max-w-[1200px] px-5 lg:px-8 pt-36 pb-24 lg:pt-40 lg:pb-28"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.06 }}
          className="caption uppercase"
          style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)" }}
        >
          Duc Le — Portfolio · 2026
        </motion.p>

        {/* ── GSAP-style massive headline — per character reveal ── */}
        <h1 className="mt-5" style={{ lineHeight: 0.92 }}>
          <div style={{ display: "block" }}>
            <CharReveal
              text="Graphic"
              delay={0.18}
              stagger={0.042}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(68px, 14.5vw, 160px)",
                letterSpacing: "-0.035em",
                color: "#fff",
                display: "block",
              }}
            />
          </div>
          <div style={{ display: "block", marginTop: "0.02em" }}>
            <CharReveal
              text="Designer."
              delay={0.46}
              stagger={0.036}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(60px, 13vw, 142px)",
                letterSpacing: "-0.01em",
                color: "rgba(255,255,255,0.68)",
                display: "block",
              }}
            />
          </div>
        </h1>

        {/* ── Description { } bracket box — GSAP inspired ─────── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.0 }}
          className="mt-8 flex items-start gap-3"
          style={{ maxWidth: 520 }}
        >
          <span
            aria-hidden
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              color: "rgba(126,184,255,0.32)",
              lineHeight: 1.1,
              flexShrink: 0,
              marginTop: "0.08em",
            }}
          >
            {"{"}
          </span>
          <p
            className="subhead"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(13px, 1.3vw, 16px)",
              lineHeight: 1.75,
            }}
          >
            Hands-on designer with 10+ years across brand identity,
            motion graphics, and generative AI.
          </p>
          <span
            aria-hidden
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              color: "rgba(126,184,255,0.32)",
              lineHeight: 1.1,
              flexShrink: 0,
              alignSelf: "flex-end",
              marginBottom: "0.08em",
            }}
          >
            {"}"}
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.15 }}
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
                transition: "opacity 0.18s ease",
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
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.18)",
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
              }}
            >
              About me
            </a>
          </MagneticEl>
        </motion.div>

        {/* Availability + avatar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.3 }}
          className="mt-14 flex flex-wrap items-center gap-6"
        >
          <div
            className="flex items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.11)",
              border: "1px solid rgba(255,255,255,0.18)",
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
              <span className="relative inline-block h-2 w-2 rounded-full" style={{ background: "#4ade80" }} />
            </span>
            <span className="body-sm" style={{ textTransform: "none", letterSpacing: "0.01em", color: "#fff" }}>
              Available for a new job
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="relative h-10 w-10 rounded-full overflow-hidden"
              style={{ border: "2px solid rgba(255,255,255,0.28)" }}
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
                  style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                >
                  duclv145@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
        aria-hidden
      >
        <span className="caption" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em" }}>
          scroll
        </span>
        <div style={{ width: 1, height: 52, overflow: "hidden" }}>
          <div
            className="scroll-indicator"
            style={{
              width: 1,
              height: "100%",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
