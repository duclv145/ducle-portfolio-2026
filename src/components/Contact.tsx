"use client";

import FadeIn from "./FadeIn";
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
  return (
    <>
      {/* CTA band — full Framer poster headline */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-[var(--hairline-soft)] py-28 lg:py-36"
      >

        <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
          <FadeIn>
            <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
              Contact
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="display-xxl text-ink mt-6 max-w-[18ch]">
              Available for
              <br />
              a new job.
            </h2>
          </FadeIn>

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

      {/* Footer — dense link grid in Framer's caption type */}
      <footer className="border-t border-[var(--hairline-soft)] py-16 lg:py-20" style={{ background: "var(--canvas)" }}>
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="caption text-ink-muted">
              © {new Date().getFullYear()} Duc Le. All rights reserved.
            </p>
            <p className="caption text-ink-muted">
            </p>
            <a
              href="#hero"
              className="caption text-ink-muted hover:text-ink transition-colors uppercase"
              style={{ letterSpacing: "0.18em" }}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
