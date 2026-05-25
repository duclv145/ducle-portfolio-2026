"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { damping: 32, stiffness: 400, mass: 0.4 });
  const dotY = useSpring(mouseY, { damping: 32, stiffness: 400, mass: 0.4 });

  const ringX = useSpring(mouseX, { damping: 38, stiffness: 180, mass: 0.7 });
  const ringY = useSpring(mouseY, { damping: 38, stiffness: 180, mass: 0.7 });

  const ringOpacity = useMotionValue(0);
  const dotOpacity = useMotionValue(0);
  const ringSize = useMotionValue(28);

  const rafRef = useRef<number | null>(null);
  const pendingX = useRef(-200);
  const pendingY = useRef(-200);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const flush = () => {
      mouseX.set(pendingX.current);
      mouseY.set(pendingY.current);
      rafRef.current = null;
    };

    const onMove = (e: MouseEvent) => {
      pendingX.current = e.clientX;
      pendingY.current = e.clientY;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(flush);

      const target = e.target as Element;
      const isView = !!target.closest("[data-cursor='view']");
      const isPointer =
        !!target.closest("a") ||
        !!target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      ringSize.set(isView ? 96 : isPointer ? 44 : 28);
      ringOpacity.set(1);
      dotOpacity.set(isView ? 0 : 0.92);
    };

    const onLeave = () => { ringOpacity.set(0); dotOpacity.set(0); };
    const onEnter = () => { ringOpacity.set(1); dotOpacity.set(0.92); };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY, ringSize, ringOpacity, dotOpacity]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full select-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSize,
          height: ringSize,
          opacity: ringOpacity,
          border: "1px solid rgba(255,255,255,0.35)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
          background: "#ffffff",
          opacity: dotOpacity,
        }}
      />
    </>
  );
}
