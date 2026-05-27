"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  type?: "words" | "chars";
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
}

export default function TextReveal({
  children,
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
  type = "words",
}: TextRevealProps) {
  const units = type === "chars" ? children.split("") : children.split(" ");

  return (
    <motion.span
      className={className}
      style={{ display: "inline" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      aria-label={children}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.1em",
            marginBottom: "-0.1em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: { y: "115%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: delay + i * stagger,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {unit}
            {type === "words" && i < units.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
