"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const rafId = useRef<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const update = () => {
      const current = window.scrollY;
      const scrolled = current > 24;
      const hidden = current > lastScrollY.current && current > 80;

      header.style.background = scrolled
        ? "rgba(0, 28, 190, 0.82)"
        : "transparent";
      header.style.backdropFilter = scrolled
        ? "blur(20px) saturate(160%)"
        : "none";
      header.style.borderBottomColor = scrolled
        ? "rgba(255,255,255,0.12)"
        : "transparent";
      header.style.transform = hidden ? "translateY(-100%)" : "translateY(0)";

      lastScrollY.current = current;
      rafId.current = null;
    };

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: 56,
        background: "transparent",
        backdropFilter: "none",
        borderBottom: "1px solid transparent",
        transform: "translateY(0)",
        transition:
          "background 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease, transform 0.3s ease",
        willChange: "transform",
      }}
    >
      <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-5 lg:px-8">
        <a
          href="/"
          aria-label="Duc Le — Home"
          className="display-md text-ink"
          style={{ fontSize: 20, letterSpacing: "-0.04em" }}
        >
          ducle<span style={{ color: "var(--accent-blue)" }}>.</span>
        </a>

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
