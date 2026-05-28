"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";
import MagneticEl from "./MagneticEl";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Phone", value: "0961 893 268", href: "tel:+84961893268" },
  { label: "Email", value: "duclv145@gmail.com", href: "mailto:duclv145@gmail.com" },
  { label: "Facebook", value: "facebook.com/duclee145", href: "https://facebook.com/duclee145" },
];

const footerCols = [
  {
    title: "Work",
    items: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Selected work", href: "#work" },
      { label: "Case studies (soon)", href: "#" },
      { label: "Process", href: "#" },
    ],
  },
  {
    title: "Studio",
    items: [
      { label: "About Duc Le", href: "#about" },
      { label: "Press kit", href: "#" },
      { label: "Hiring me", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Facebook", href: "https://facebook.com/duclee145" },
      { label: "Behance", href: "#" },
      { label: "Email", href: "mailto:duclv145@gmail.com" },
    ],
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <>
      {/* CTA band */}
      <section
        ref={sectionRef}
        id="contact"
        className="relative overflow-hidden border-t border-[var(--hairline-soft)] py-28 lg:py-36"
      >
        {/* Parallax decorative background */}
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-8 lg:pr-16"
          aria-hidden
        >
          <span
            style={{
              fontSize: "clamp(140px, 25vw, 320px)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.04)",
              letterSpacing: "-0.04em",
              userSelect: "none",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Hire
          </span>
        </motion.div>

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 30% 50%, rgba(126,184,255,0.06) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8" style={{ zIndex: 1 }}>
          <FadeIn>
            <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
              Contact
            </p>
          </FadeIn>

          <h2 className="display-xxl text-ink mt-6 max-w-[18ch]">
            <TextReveal delay={0.05} stagger={0.06}>
              Available for
            </TextReveal>
            <br />
            <TextReveal delay={0.22} stagger={0.06}>
              a new job.
            </TextReveal>
          </h2>

          {/* CTA email button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mt-10"
          >
            <MagneticEl strength={0.3}>
              <a
                href="mailto:duclv145@gmail.com"
                className="btn-primary focus-ring inline-flex items-center gap-3"
                style={{ fontSize: 13, letterSpacing: "0.06em" }}
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </MagneticEl>
          </motion.div>

          {/* Direct links row */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 border-t border-[var(--hairline-soft)]">
            {links.map((link, i) => (
              <FadeIn key={link.label} delay={0.2 + i * 0.05}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start justify-between border-b sm:border-b-0 sm:border-r border-[var(--hairline-soft)] py-6 pr-4 last:border-r-0 hover:bg-[var(--surface-1)] transition-colors focus-ring"
                >
                  <div>
                    <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
                      {link.label}
                    </p>
                    <p className="body-lg text-ink mt-2 group-hover:text-[var(--accent-blue)] transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-muted opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-5 shrink-0" />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--hairline-soft)] py-16 lg:py-20" style={{ background: "var(--canvas)" }}>
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="caption text-ink-muted">
              © {new Date().getFullYear()} Duc Le. All rights reserved.
            </p>
            <p className="caption text-ink-muted">
            </p>
            <MagneticEl strength={0.4}>
              <a
                href="#hero"
                className="caption text-ink-muted hover:text-ink transition-colors uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                Back to top ↑
              </a>
            </MagneticEl>
          </div>
        </div>
      </footer>
    </>
  );
}
