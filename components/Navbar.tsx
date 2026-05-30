"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { scrollToId, setScrollEnabled } from "./LenisProvider";
import ScrambleText from "./ScrambleText";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile overlay
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Mobile bar gets a blurred background once scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is crossing the viewport centre.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Freeze scrolling while the overlay is open.
  useEffect(() => {
    setScrollEnabled(!open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      setScrollEnabled(true);
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <>
      {/* ---------------- Desktop: fixed logo (top-left) ---------------- */}
      <button
        onClick={() => go("home")}
        className="fixed left-10 top-9 z-40 hidden font-display text-lg font-extrabold uppercase tracking-[0.05em] text-white transition-colors hover:text-accent lg:block"
      >
        Duc Le
      </button>

      {/* ---------------- Desktop: fixed vertical nav (centre-left) ---------------- */}
      <nav className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3.5 pl-10 lg:flex">
        {navLinks.map((l) => {
          const isActive = active === l.id;
          return (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className={`group flex items-center gap-2.5 text-left text-lg transition-colors duration-300 ${
                isActive ? "text-accent" : "text-neutral-500 hover:text-white"
              }`}
            >
              {/* Active dash — literal "-" character */}
              <span
                className={`transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                }`}
              >
                -
              </span>
              <ScrambleText text={l.label} duration={500} />
            </button>
          );
        })}
      </nav>

      {/* ---------------- Mobile: sticky top bar ---------------- */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 lg:hidden ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => go("home")}
            className="font-display text-xl font-extrabold uppercase tracking-tight text-white"
          >
            Duc Le
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="h-[2px] w-5 bg-current" />
              <span className="h-[2px] w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* ---------------- Full-screen overlay (mobile) ---------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-xl font-extrabold uppercase tracking-tight">
                Duc Le
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <span className="relative h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => go(link.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.45, ease: EASE }}
                  className="group flex items-center gap-5 border-b border-white/10 py-3 text-left"
                >
                  <span className="font-display text-[clamp(1.875rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="mb-1.5 self-end text-sm tabular-nums text-neutral-600">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-[3px] bg-accent" />
                Open to new projects
              </span>
              <a href="mailto:duclv145@gmail.com" className="transition-colors hover:text-accent">
                duclv145@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
