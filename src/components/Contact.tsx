"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import MagneticEl from "./MagneticEl";

const contactLinks = [
  { label: "Phone", value: "0961 893 268", href: "tel:+84961893268" },
  { label: "Email", value: "duclv145@gmail.com", href: "mailto:duclv145@gmail.com" },
  { label: "Facebook", value: "facebook.com/duclee145", href: "https://facebook.com/duclee145" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="relative overflow-hidden border-t border-[var(--hairline-soft)]"
        style={{ paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(80px, 12vw, 140px)" }}
      >
        {/* Parallax background text */}
        <motion.div
          style={{ y: bgY, position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-end", overflow: "hidden", pointerEvents: "none" }}
          aria-hidden
        >
          <span
            style={{
              fontSize: "clamp(120px, 22vw, 280px)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.03)",
              letterSpacing: "-0.04em",
              userSelect: "none",
              lineHeight: 1,
              whiteSpace: "nowrap",
              paddingRight: "clamp(20px, 5vw, 80px)",
            }}
          >
            Hello
          </span>
        </motion.div>

        <div
          className="relative mx-auto max-w-[1200px] px-5 lg:px-8"
          style={{ zIndex: 1 }}
        >
          {/* ".say hello" label */}
          <FadeIn>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "lowercase",
              }}
            >
              <span style={{ color: "var(--accent-blue)" }}>.</span>say hello
            </p>
          </FadeIn>

          {/* Email as headline */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(32px, 5.5vw, 72px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "rgba(255,255,255,0.85)",
              marginTop: "clamp(16px, 2.5vw, 28px)",
              maxWidth: "22ch",
            }}
          >
            duclv145@gmail.com
          </motion.h2>

          {/* Outlined contact button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            style={{ marginTop: "clamp(28px, 4vw, 48px)" }}
          >
            <MagneticEl strength={0.25}>
              <a
                href="mailto:duclv145@gmail.com"
                className="focus-ring"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "16px 32px",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: '"Google Sans", ui-sans-serif, sans-serif',
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.5)";
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.22)";
                  el.style.color = "rgba(255,255,255,0.75)";
                }}
              >
                contact me ↗
              </a>
            </MagneticEl>
          </motion.div>

          {/* Direct links row */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{
              marginTop: "clamp(48px, 8vw, 96px)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {contactLinks.map((link, i) => (
              <FadeIn key={link.label} delay={0.2 + i * 0.05}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group focus-ring"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    paddingRight: 16,
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "lowercase",
                    }}
                  >
                    {link.label.toLowerCase()}
                  </p>
                  <p
                    className="group-hover:text-[var(--accent-blue)] transition-colors"
                    style={{
                      fontFamily: '"Google Sans", ui-sans-serif, sans-serif',
                      fontSize: 14,
                      letterSpacing: "0.01em",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {link.value}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "20px clamp(20px, 4vw, 40px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "lowercase",
            }}
          >
            © {new Date().getFullYear()} Duc Le. All rights reserved.
          </p>
          <MagneticEl strength={0.4}>
            <a
              href="#hero"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                textTransform: "lowercase",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
              }}
            >
              back to top ↑
            </a>
          </MagneticEl>
        </div>
      </footer>
    </>
  );
}
