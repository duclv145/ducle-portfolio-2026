"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: custom.delay,
    },
  }),
};

export default function FadeIn({
  children,
  delay = 0,
  className,
  y = 24,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      custom={{ delay, y }}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export { variants };
