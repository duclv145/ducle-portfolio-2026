"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-bg/85 backdrop-blur-xl"
          />

          {/* Floating close button */}
          <motion.button
            onClick={onClose}
            data-cursor="hover"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -90 }}
            transition={{ delay: 0.15, duration: 0.4, ease }}
            aria-label="Close"
            className="group fixed right-5 top-5 z-[120] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-[0_8px_30px_rgba(224,254,16,0.35)] transition-transform hover:scale-110 sm:right-8 sm:top-8 sm:h-16 sm:w-16"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90 sm:h-7 sm:w-7"
            >
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </motion.button>

          {/* Content panel */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="relative z-[110] my-0 h-[100svh] w-full max-w-[1400px] overflow-y-auto overscroll-contain px-6 py-24 sm:px-12 sm:py-28"
          >
            {/* Header */}
            <div className="border-b border-white/10 pb-8">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: project.accent }}
                />
                <span>{project.category}</span>
                <span className="text-fg/30">·</span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] text-fg sm:text-7xl md:text-8xl">
                {project.title}
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fg/75 sm:text-lg">
                {project.description}
              </p>
            </div>

            {/* Gallery */}
            <div className="mt-10 flex flex-col gap-6 sm:gap-8">
              {project.thumbnails.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease }}
                  className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-bg-soft"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    width={1400}
                    height={1000}
                    sizes="(min-width: 1024px) 1400px, 100vw"
                    className="h-auto w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-16 flex flex-col items-start gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-2xl italic text-fg sm:text-3xl">
                Like what you see?
              </p>
              <button
                onClick={onClose}
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fg transition-colors hover:bg-accent hover:text-bg"
              >
                ← Back to work
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
