"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  text: string;
  className?: string;
  /** Delay before the first word starts (seconds). */
  delay?: number;
  /** Gap between each word animation (seconds). */
  stagger?: number;
  /** y distance (px) words travel from. */
  distance?: number;
  /** If true, animate on mount; if false, animate when scrolled into view. */
  onMount?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Splits text into words and animates each one with a mask-reveal
 * (word slides up from y=distance into clip-path overflow:hidden parent).
 * Result: classic high-end "words appear from below a line" effect.
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
  distance = 60,
  onMount = false,
  as: Tag = "span",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // For scroll-triggered: use useInView
  const inView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  const shouldAnimate = onMount || inView;
  const words = text.split(" ");

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : distance, opacity: reduce ? 1 : 0 }}
            animate={
              shouldAnimate
                ? { y: 0, opacity: 1 }
                : { y: distance, opacity: 0 }
            }
            transition={{
              duration: 0.75,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
