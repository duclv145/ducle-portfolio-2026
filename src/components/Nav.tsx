"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 24);
      setHidden(current > lastScrollY && current > 80);
      lastScrollY = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 56,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        background: scrolled ? "rgba(9,9,9,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--hairline-soft)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-5 lg:px-8">
        {/* Wordmark */}
        <a
          href="/"
          aria-label="Duc Le — Home"
          className="display-md text-ink"
          style={{ fontSize: 20, letterSpacing: "-0.04em" }}
        >
          ducle<span style={{ color: "var(--accent-blue)" }}>.</span>
        </a>

        {/* Centered links (desktop) */}
        <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="body-sm text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: hamburger */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="btn-icon-circular focus-ring"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path
                d="M1 1h12M1 5h12M1 9h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-canvas border-b border-[var(--hairline-soft)]"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <nav className="px-5 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="subhead text-ink py-3"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
