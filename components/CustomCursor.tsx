"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type CursorVariant = "default" | "hover" | "view" | "drag";

const variantConfig: Record<
  CursorVariant,
  { size: number; mix: string; bg: string; border: string }
> = {
  default: {
    size: 14,
    mix: "difference",
    bg: "rgba(245,245,247,1)",
    border: "rgba(245,245,247,0)",
  },
  hover: {
    size: 64,
    mix: "difference",
    bg: "rgba(245,245,247,1)",
    border: "rgba(245,245,247,0)",
  },
  view: {
    size: 96,
    mix: "normal",
    bg: "rgba(224,254,16,1)",
    border: "rgba(224,254,16,1)",
  },
  drag: {
    size: 96,
    mix: "normal",
    bg: "rgba(102,226,255,1)",
    border: "rgba(102,226,255,1)",
  },
};

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 32, stiffness: 600, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const ringX = useSpring(cursorX, { damping: 22, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 180, mass: 0.6 });

  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(true);
  const magnetTarget = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      // Magnetic hover: pull toward the center of the magnet element
      if (magnetTarget.current) {
        const rect = magnetTarget.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const strength = parseFloat(
          magnetTarget.current.dataset.magnetStrength ?? "0.35"
        );
        targetX = e.clientX + (cx - e.clientX) * strength;
        targetY = e.clientY + (cy - e.clientY) * strength;

        // Also nudge the element itself (subtle)
        const tx = (e.clientX - cx) * 0.18;
        const ty = (e.clientY - cy) * 0.18;
        magnetTarget.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      cursorX.set(targetX);
      cursorY.set(targetY);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      if (!el) return;
      const v = (el.dataset.cursor as CursorVariant) || "hover";
      setVariant(v);
      setLabel(el.dataset.cursorLabel ?? null);
      if (el.dataset.magnet !== undefined) {
        magnetTarget.current = el;
      }
    };

    const onOut = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      if (!el) return;
      // Only reset if leaving completely
      const related = e.relatedTarget as HTMLElement | null;
      if (related && el.contains(related)) return;
      setVariant("default");
      setLabel(null);
      if (magnetTarget.current === el) {
        magnetTarget.current.style.transform = "";
        magnetTarget.current = null;
      }
    };

    const onLeaveWindow = () => {
      cursorX.set(-100);
      cursorY.set(-100);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [enabled, cursorX, cursorY]);

  const cfg = variantConfig[variant];

  // Translate so the element is centered on the cursor position
  const dotTranslate = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `translate3d(${(latestX as number) - 5}px, ${(latestY as number) - 5}px, 0)`
  );
  const ringTranslate = useTransform(
    [ringX, ringY],
    ([latestX, latestY]) =>
      `translate3d(calc(${latestX as number}px - 50%), calc(${latestY as number}px - 50%), 0)`
  );

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="cursor-host pointer-events-none fixed inset-0 z-[100]"
    >
      {/* small dot */}
      <motion.div
        style={{ transform: dotTranslate }}
        className="pointer-events-none fixed left-0 top-0 h-2.5 w-2.5 rounded-full bg-fg mix-blend-difference"
      />
      {/* expanding ring */}
      <motion.div
        style={{
          transform: ringTranslate,
          mixBlendMode: cfg.mix as React.CSSProperties["mixBlendMode"],
        }}
        animate={{
          width: cfg.size,
          height: cfg.size,
          backgroundColor: variant === "default" ? "rgba(245,245,247,0)" : cfg.bg,
          borderColor: cfg.border,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 220, mass: 0.5 }}
        className="pointer-events-none fixed left-0 top-0 flex items-center justify-center rounded-full border"
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-bg select-none"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
