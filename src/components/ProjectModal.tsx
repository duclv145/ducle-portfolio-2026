"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

export default function ProjectModal({
  project,
  onClose,
  onNavigate,
}: {
  project: Project | null;
  onClose: () => void;
  onNavigate: (p: Project) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [barHidden, setBarHidden] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const cur = e.currentTarget.scrollTop;
    setBarHidden(cur > lastScrollY.current && cur > 60);
    lastScrollY.current = cur;
  };

  /* Lock body scroll */
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      scrollRef.current?.scrollTo(0, 0);
      setBarHidden(false);
      lastScrollY.current = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const currentIndex = project
    ? projects.findIndex((p) => p.slug === project.slug)
    : -1;
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sheet — flex column so header is outside scroll */}
          <motion.div
            key="sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed inset-x-0 bottom-0 z-50 bg-[var(--canvas)]"
            style={{ height: "100dvh", borderRadius: 0 }}
          >
            {/* Header bar — absolute so it doesn't affect scroll container size */}
            <div
              className="absolute top-0 inset-x-0 z-10 bg-[var(--canvas)] transition-transform duration-300"
              style={{ transform: barHidden ? "translateY(-100%)" : "translateY(0)" }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline-soft)] px-5 py-4 lg:px-8">
                {/* Close */}
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 font-medium"
                  style={{ background: "#2B2BFF", color: "#fff", fontSize: 14, padding: "8px 16px", borderRadius: 999 }}
                >
                  <X className="h-4 w-4" /> Close
                </button>

                {/* Prev / Next */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => prev && onNavigate(prev)}
                    disabled={!prev}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] px-4 py-2 caption text-ink-muted transition-colors hover:text-ink disabled:opacity-30 uppercase"
                    style={{ letterSpacing: "0.12em", fontSize: 12 }}
                  >
                    <ArrowLeft className="h-3 w-3" />
                    {prev ? prev.title : "Prev"}
                  </button>
                  <button
                    onClick={() => next && onNavigate(next)}
                    disabled={!next}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] px-4 py-2 caption text-ink-muted transition-colors hover:text-ink disabled:opacity-30 uppercase"
                    style={{ letterSpacing: "0.12em", fontSize: 12 }}
                  >
                    {next ? next.title : "Next"}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable content — paddingTop cố định bằng chiều cao bar */}
            <div ref={scrollRef} onScroll={handleScroll} className="h-full overflow-y-auto">
              <div className="mx-auto max-w-[1200px] px-5 lg:px-8 pt-24 pb-24">
                {/* Hero meta */}
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p
                      className="caption text-ink-muted uppercase"
                      style={{ letterSpacing: "0.18em" }}
                    >
                      {project.number} — {project.tags.join(" · ")}
                    </p>
                    <h2 className="display-xxl text-ink mt-4">{project.title}</h2>
                  </div>
                  <div className="lg:text-right shrink-0">
                    <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>Client</p>
                    <p className="body-lg text-ink mt-1">{project.client}</p>
                    <p className="caption text-ink-muted uppercase mt-4" style={{ letterSpacing: "0.18em" }}>Year</p>
                    <p className="body-lg text-ink mt-1">{project.year}</p>
                    <p className="caption text-ink-muted uppercase mt-4" style={{ letterSpacing: "0.18em" }}>Role</p>
                    <p className="body-lg text-ink mt-1">{project.role}</p>
                  </div>
                </div>

                {/* Description + tags */}
                <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
                  <p className="subhead text-ink-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 lg:justify-end lg:content-start">
                    {project.tags.map((t) => (
                      <span key={t} className="btn-translucent">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Images stacked flush */}
                <div className="mt-10 flex flex-col">
                  {project.images.map((src, i) => (
                    <div
                      key={src}
                      className="relative w-full overflow-hidden bg-[var(--surface-1)]"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} — ${i + 1}`}
                        width={1200}
                        height={900}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="w-full h-auto block"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom close */}
                <div className="mt-16 text-center">
                  <button
                    onClick={onClose}
                    className="group inline-flex items-center gap-3"
                  >
                    <ArrowLeft className="h-4 w-4 text-ink group-hover:text-[#2B2BFF] transition-all group-hover:-translate-x-1" />
                    <span
                      className="display-md text-ink group-hover:text-[#2B2BFF] transition-colors"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      Back to work
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
