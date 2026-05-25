"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="bg-canvas py-24 lg:py-32 border-t border-[var(--hairline-soft)]">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <FadeIn>
                <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
                  Work
                </p>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="display-xl text-ink mt-5 max-w-3xl">
                  Selected work.
                </h2>
              </FadeIn>
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
  return (
    <FadeIn delay={Math.min(index, 4) * 0.05}>
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
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 30%, transparent 75%, rgba(0,0,0,0.45) 100%)",
            }}
          />
        </div>

        {/* Meta */}
        <div className="px-2 pt-5 pb-2">
          <div className="flex items-center justify-between gap-4">
            <h3 className="display-md text-ink" style={{ letterSpacing: "-0.04em" }}>
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent-blue)]" />
          </div>
        </div>
      </button>
    </FadeIn>
  );
}
