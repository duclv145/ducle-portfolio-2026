"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TopBar({
  backHref = "/",
  backLabel = "Home",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const [time, setTime] = useState("");
  const [hidden, setHidden] = useState(false);

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

  // Hide on scroll-down, reveal on scroll-up (always visible near the top).
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 48) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.65, ease: EASE }}
      className="sticky top-0 z-40 overflow-hidden bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: EASE, delay: 0.08 }}
        className="flex items-center justify-between gap-4 px-6 py-4 text-[15px] font-medium tracking-[-0.01em] md:px-8 md:text-base"
      >
        <div className="flex items-center gap-8 md:gap-16">
          <Link
            href={backHref}
            className="flex items-center gap-2 text-white transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> {backLabel}
          </Link>
          <span className="hidden text-neutral-400 sm:inline">Senior Graphic Designer</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="tabular-nums text-neutral-400">Ha Noi • {time}</span>
          <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
        </div>
      </motion.div>
    </motion.header>
  );
}
