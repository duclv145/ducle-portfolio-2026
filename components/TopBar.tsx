"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TopBar({
  backHref = "/",
  backLabel = "Home",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "Asia/Ho_Chi_Minh",
        }),
      );
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  // Once scrolled past the top: fade out the bar background + role + time,
  // leaving only the back link and theme toggle floating.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fade = { opacity: scrolled ? 0 : 1 };
  const fadeT = { duration: 0.35, ease: EASE };

  return (
    <header className="sticky top-0 z-40 overflow-hidden">
      {/* Background — fades away on scroll */}
      <motion.div
        aria-hidden
        initial={false}
        animate={fade}
        transition={fadeT}
        className="absolute inset-0 border-b border-white/10 bg-black/70 backdrop-blur-md"
      />

      {/* Content — slides up on enter */}
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: EASE, delay: 0.08 }}
        className="relative flex items-center justify-between gap-4 px-6 py-4 text-[15px] font-medium tracking-[-0.01em] md:px-8 md:text-base"
      >
        <div className="flex items-center gap-3 sm:gap-8 md:gap-16">
          {/* Back link — always visible */}
          <Link
            href={backHref}
            className="flex shrink-0 items-center gap-2 text-white transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> {backLabel}
          </Link>
          <motion.span
            animate={fade}
            transition={fadeT}
            className="text-neutral-400"
          >
            Senior Graphic Designer
          </motion.span>
        </div>
        <div className="flex items-center gap-4">
          <motion.span
            animate={fade}
            transition={fadeT}
            className="hidden tabular-nums text-neutral-400 sm:inline"
          >
            Ha Noi • {time}
          </motion.span>
          {/* Theme toggle — always visible */}
          <ThemeToggle />
        </div>
      </motion.div>
    </header>
  );
}
