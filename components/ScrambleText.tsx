"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface Props {
  text: string;
  className?: string;
  /** Duration of the scramble in ms. */
  duration?: number;
  /** Trigger scramble on hover (default) or always on mount. */
  trigger?: "hover" | "mount";
}

/**
 * Text that scrambles through random characters then resolves to the original.
 * Classic "hacker / creative agency" effect.
 */
export default function ScrambleText({
  text,
  className = "",
  duration = 600,
  trigger = "hover",
}: Props) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const scramble = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = null;

    const run = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Characters resolve left-to-right as progress advances.
      const resolved = Math.floor(progress * text.length);
      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return char;
          return randomChar();
        })
        .join("");

      setDisplay(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(run);
      } else {
        setDisplay(text);
      }
    };

    rafRef.current = requestAnimationFrame(run);
  };

  // Mount trigger: run once on mount.
  useEffect(() => {
    if (trigger === "mount") scramble();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const handlers =
    trigger === "hover"
      ? { onMouseEnter: scramble }
      : {};

  return (
    <span className={className} {...handlers} aria-label={text}>
      {display}
    </span>
  );
}
