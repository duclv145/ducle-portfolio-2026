"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const DASHIVE_BLUE = "#0022E5";

const lines = [
  { text: "Hello,", delay: 0.15, style: "tenor" },
  { text: "my name's Duc Le.", delay: 0.28, style: "serif" },
  { text: "I'm a Graphic Designer.", delay: 0.42, style: "italic" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden"
      style={{ minHeight: "100vh" }}
    >

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div
        className="relative mx-auto max-w-[1200px] px-5 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32"
        style={{ zIndex: 10 }}
      >
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay }}
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
                }}>
                  {text}
                </span>
              )}
            </motion.span>
          ))}
        </h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
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
              padding: "12px 20px",
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
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                background: "#4ade80",
                boxShadow: "0 0 0 4px rgba(74,222,128,0.25)",
              }}
            />
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
    </section>
  );
}
