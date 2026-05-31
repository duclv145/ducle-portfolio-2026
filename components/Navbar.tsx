"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { scrollToId, setScrollEnabled } from "./LenisProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Show the floating bar once the hero has scrolled away.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Let other components (the hero's menu button) open the overlay.
  useEffect(() => {
    const openMenu = () => setOpen(true);
    window.addEventListener("ducle:openmenu", openMenu);
    return () => window.removeEventListener("ducle:openmenu", openMenu);
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

  function MenuButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      </button>
    );
  }

  return (
    <>
      {/* ──────────── Floating bar (appears after scrolling past hero) ──────────── */}
      <AnimatePresence>
        {scrolled && !open && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md"
          >
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3.5 md:px-10">
              <button
                onClick={() => go("home")}
                className="font-display text-lg font-extrabold uppercase tracking-[0.05em] text-white transition-colors hover:text-accent"
              >
                Duc Le
              </button>
              <MenuButton onClick={() => setOpen(true)} />
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ──────────── Full-screen overlay menu ──────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
              <span className="font-display text-xl font-extrabold uppercase tracking-tight">
                Duc Le
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <span className="hidden sm:inline">Close</span>
                <span className="relative h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <nav className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-6 md:px-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => go(link.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.45, ease: EASE }}
                  className="group flex items-center gap-5 border-b border-white/10 py-3 text-left sm:py-3.5"
                >
                  <span className="font-display text-[clamp(1.875rem,7vw,4.5rem)] font-bold leading-none tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="mb-1.5 self-end text-sm tabular-nums text-neutral-600">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-500 md:px-10">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
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
