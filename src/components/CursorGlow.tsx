"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const trailConfig = { damping: 40, stiffness: 160, mass: 0.8 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const trailSpringX = useSpring(trailX, trailConfig);
  const trailSpringY = useSpring(trailY, trailConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as Element;
      const pointer =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!pointer);
    };

    const hide = () => setIsHidden(true);
    const show = () => setIsHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkPointer);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkPointer);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  /* Hide on touch devices */
  const isTouchRef = useRef(false);
  useEffect(() => {
    const onTouch = () => { isTouchRef.current = true; };
    window.addEventListener("touchstart", onTouch, { once: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 48 : 36,
          height: isPointer ? 48 : 36,
          border: "1.5px solid rgba(255, 215, 0, 0.6)",
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 1.3 : 1,
          transition: "width 0.25s ease, height 0.25s ease, scale 0.25s ease, opacity 0.2s ease",
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-accent"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 6 : 8,
          height: isPointer ? 6 : 8,
          opacity: isHidden ? 0 : 0.9,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        }}
      />

      {/* Ambient glow blob */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9990] rounded-full"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 70%)",
          opacity: isHidden ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
