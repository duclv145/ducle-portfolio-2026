"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-24 lg:py-32 border-t border-[var(--hairline-soft)]" style={{ background: "var(--canvas)" }}>
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <FadeIn>
                <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
                  Work
                </p>
              </FadeIn>
              <h2 className="display-xl text-ink mt-5 max-w-3xl">
                <TextReveal delay={0.06} stagger={0.055}>
                  Selected work.
                </TextReveal>
              </h2>
            </div>
          </div>

          {/* 2-up card grid */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <ProjectTile
                key={p.slug}
                project={p}
                index={i}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
        onNavigate={(p) => setSelected(p)}
      />
    </>
  );
}

function ProjectTile({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const delay = Math.min(index, 3) * 0.07;

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        clipPath: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
        opacity: { duration: 0.4, ease: "easeOut", delay },
      }}
    >
      <button
        onClick={onClick}
        data-cursor="view"
        className="group block w-full text-left card-surface-1 transition-colors hover:bg-[var(--surface-2)] cursor-pointer"
        style={{ padding: 16 }}
      >
        {/* Cover */}
        <div
          className="relative overflow-hidden bg-[var(--surface-2)]"
          style={{ borderRadius: "var(--radius-lg)", aspectRatio: "4/3" }}
        >
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 30%, transparent 75%, rgba(0,0,0,0.45) 100%)",
            }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.15)" }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: 100,
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: '"Google Sans", ui-sans-serif, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0022E5",
                transform: "translateY(4px)",
                transition: "transform 0.3s ease",
              }}
            >
              View project <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="px-2 pt-5 pb-2">
          <div className="flex items-center justify-between gap-4">
            <h3 className="display-md text-ink" style={{ letterSpacing: "-0.04em" }}>
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent-blue)]" />
          </div>
          {project.tags && project.tags.length > 0 && (
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="caption text-ink-muted"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </button>
    </motion.div>
  );
}
