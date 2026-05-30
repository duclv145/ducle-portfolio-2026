"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Module-level handle so any component can drive the smooth-scroller.
let lenisRef: Lenis | null = null;

/** Smoothly scroll to a section id, offsetting for the sticky nav. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisRef) {
    lenisRef.scrollTo(el, { offset: -72, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/** Pause/resume smooth scrolling (used while the menu overlay is open). */
export function setScrollEnabled(enabled: boolean) {
  if (!lenisRef) return;
  if (enabled) lenisRef.start();
  else lenisRef.stop();
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      // Skip smooth scroll when pointer is inside an element with
      // data-lenis-prevent or when that element is overflow-scroll.
      prevent: (node: Element) =>
        node.hasAttribute("data-lenis-prevent") ||
        node.classList.contains("overflow-y-scroll"),
    });
    lenisRef = lenis;
    // Debug handle (handy in dev for programmatic scrolling).
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef = null;
    };
  }, []);

  return <>{children}</>;
}
