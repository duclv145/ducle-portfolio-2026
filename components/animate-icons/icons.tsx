"use client";

import { motion } from "framer-motion";

// Brand Identity — rotating dashed ring + pulsing center
export function BrandIdentityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ originX: "32px", originY: "32px" }}
      >
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 4" />
      </motion.g>
      <motion.circle
        cx="32" cy="32" r="6"
        stroke="currentColor" strokeWidth="2"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Vibe Coding — bouncing brackets + blinking cursor
export function VibeCodingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <motion.path d="M14 20 L26 32 L14 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.path d="M50 20 L38 32 L50 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        animate={{ x: [3, -3, 3] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.rect x="30" y="27" width="3" height="11" rx="1" fill="currentColor"
        animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.85, repeat: Infinity }} />
    </svg>
  );
}

// Art Direction — corner markers flashing sequentially
export function ArtDirectionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <motion.path d="M14 14 H24 M14 14 V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
      <motion.path d="M50 14 H40 M50 14 V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
      <motion.path d="M14 50 H24 M14 50 V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1.0 }} />
      <motion.path d="M50 50 H40 M50 50 V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
      <motion.circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="1.5"
        animate={{ scale: [0.7, 1.4, 0.7] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

// Typography — T strokes drawing in sequence
export function TypographyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <motion.path d="M16 16 H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        animate={{ pathLength: [0, 1] }} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }} />
      <motion.path d="M32 16 V50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        animate={{ pathLength: [0, 1] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.4, delay: 0.6, ease: "easeOut" }} />
    </svg>
  );
}

// Print Production — paper sliding out of printer
export function PrintProductionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <path d="M18 28 H46 V44 H18 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 28 V20 H42 V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="36" r="2" fill="currentColor" opacity="0.5" />
      <motion.g animate={{ y: [0, 8, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.7, 1] }}>
        <rect x="22" y="44" width="20" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 48 H38 M26 52 H34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

// Motion Graphics — sine wave drawing
export function MotionGraphicsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <motion.path
        d="M8 32 C 16 32, 16 16, 24 16 C 32 16, 32 48, 40 48 C 48 48, 48 32, 56 32"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
    </svg>
  );
}

// UI/UX Web Design — alternating panels + bar drawing
export function UIUXWebDesignIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <rect x="10" y="10" width="44" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 48 H40 M32 42 V48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.rect x="16" y="16" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.rect x="34" y="16" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"
        animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.rect x="16" y="30" width="32" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"
        animate={{ scaleX: [0, 1] }} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8, ease: "easeOut" }}
        style={{ originX: "16px" }} />
    </svg>
  );
}

// Photography — shutter iris open/close
export function PhotographyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"}>
      <path d="M10 22 H22 L26 16 H38 L42 22 H54 V48 H10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <motion.circle cx="32" cy="34" r="9" stroke="currentColor" strokeWidth="2"
        animate={{ scale: [1, 0.55, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
      <motion.circle cx="32" cy="34" r="3" fill="currentColor"
        animate={{ scale: [1, 0, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
    </svg>
  );
}
