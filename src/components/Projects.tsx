"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="work"
        className="border-t border-[var(--hairline-soft)]"
        style={{ background: "var(--canvas)" }}
      >
        {/* Section header */}
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
          <FadeIn>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "lowercase",
              }}
            >
              <span style={{ color: "var(--accent-blue)" }}>.</span>work
            </p>
          </FadeIn>
          <h2 className="display-xl text-ink mt-5">
            <TextReveal delay={0.06} stagger={0.055}>
              Selected work.
            </TextReveal>
          </h2>
        </div>

        {/* Full-width card list */}
        <div>
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              onClick={() => setSelected(p)}
            />
          ))}
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

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const isBlue = index % 2 === 0;
  const bgColor = isBlue ? "#0022E5" : "#ffffff";
  const textColor = isBlue ? "#ffffff" : "#0022E5";
  const mutedColor = isBlue ? "rgba(255,255,255,0.55)" : "rgba(0,34,229,0.5)";
  const arrowColor = isBlue ? "rgba(255,255,255,0.35)" : "rgba(0,34,229,0.3)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={onClick}
        data-cursor="view"
        className="group w-full text-left block"
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "none",
        }}
      >
        {/* Card header */}
        <div
          style={{
            background: bgColor,
            color: textColor,
            padding: "clamp(28px, 4.5vw, 56px) clamp(20px, 5vw, 80px)",
          }}
        >
          {/* Top meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: mutedColor,
                textTransform: "lowercase",
              }}
            >
              {project.year} · {project.tags.slice(0, 2).join(", ")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: mutedColor,
                textTransform: "lowercase",
              }}
            >
              {project.client}
            </span>
          </div>

          {/* Title row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginTop: "clamp(20px, 3.5vw, 40px)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(40px, 7.5vw, 92px)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: textColor,
                flex: 1,
              }}
            >
              {project.title}
            </h3>
            <span
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(32px, 5vw, 60px)",
                lineHeight: 1,
                color: arrowColor,
                flexShrink: 0,
                display: "block",
              }}
            >
              →
            </span>
          </div>
        </div>

        {/* Cover image */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16/8",
            overflow: "hidden",
          }}
        >
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.12)" }}
          />
        </div>
      </button>
    </motion.div>
  );
}
