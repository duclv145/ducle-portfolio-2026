"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { setScrollEnabled } from "./LenisProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  project: Project | null;
  onClose: () => void;
}

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function ProjectModal({ project, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Close on Escape.
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose],
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Pause Lenis + lock body scroll while modal is open.
  useEffect(() => {
    if (project) {
      setScrollEnabled(false);
      document.body.style.overflow = "hidden";
    } else {
      setScrollEnabled(true);
      document.body.style.overflow = "";
    }
    return () => {
      setScrollEnabled(true);
      document.body.style.overflow = "";
    };
  }, [project]);

  // Block wheel events from reaching Lenis + detect scroll direction to hide/show header.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !project) return;

    const onWheel = (e: WheelEvent) => e.stopPropagation();
    el.addEventListener("wheel", onWheel, { passive: true });

    const onScroll = () => {
      const y = el.scrollTop;
      const delta = y - lastScrollY.current;
      if (Math.abs(delta) < 6) return; // ignore tiny jitter
      setHeaderVisible(delta < 0 || y < 60); // show when scrolling up or near top
      lastScrollY.current = y;
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", onScroll);
    };
  }, [project]);

  // Reset header visibility when a new project opens.
  useEffect(() => {
    setHeaderVisible(true);
    lastScrollY.current = 0;
  }, [project]);

  const gallery = project?.gallery ?? [];

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel — same bounds as the cover card */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 top-0 z-[210] flex flex-col overflow-hidden rounded-[28px] border border-accent/55 bg-[#0e0e0e] lg:left-[210px] lg:m-6"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {/* Header — absolute overlay, slides out upward so no black gap */}
            <motion.div
              animate={{ y: headerVisible ? 0 : "-100%" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0e0e0e]/90 px-6 py-4 backdrop-blur-md md:px-10 lg:px-16">
              <div className="flex flex-col gap-0.5">
                <h2 className="font-display text-xl font-bold text-white md:text-2xl">
                  {project.name}
                </h2>
                <p className="text-sm text-neutral-500">
                  {project.role} · {project.client} · {project.year}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-neutral-400 transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" fill="none">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            {/* Scrollable image list — starts from top, header floats above */}
            <div
              ref={scrollRef}
              className="h-full overflow-y-scroll"
              style={{ overscrollBehavior: "contain" }}
            >
              {gallery.length > 0 ? (
                <div className="flex flex-col">
                  {gallery.map((src, i) => (
                    <div key={src} className="relative w-full">
                      <Image
                        src={src}
                        alt={`${project.name} — ${i + 1}`}
                        width={1600}
                        height={1200}
                        className="block h-auto w-full"
                        sizes="100vw"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="flex min-h-[60vh] items-center justify-center"
                  style={{ background: project.gradient ?? "linear-gradient(135deg,#1c1c18,#0a0a0a)" }}
                >
                  <span className="font-display text-[10rem] font-bold text-white/10">
                    {initials(project.name)}
                  </span>
                </div>
              )}

              {/* Footer: tagline + close button */}
              <div className="flex items-center justify-between gap-6 border-t border-white/10 px-6 py-6 md:px-10 lg:px-16">
                <p className="text-sm text-accent md:text-base">{project.tagline}</p>
                <button
                  onClick={onClose}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-accent hover:text-accent"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" fill="none">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
