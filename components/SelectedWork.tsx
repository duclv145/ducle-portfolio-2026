"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Motion";
import SplitText from "./SplitText";
import { projects, type Project } from "@/lib/data";
import ProjectModal from "./ProjectModal";

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" /><path d="M7 7h10v10" />
    </svg>
  );
}

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function SelectedWork() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1280px]">

          <Reveal className="flex flex-col gap-5 pt-24 md:pt-28">
            <h2 className="font-display max-w-xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
              <SplitText text="Selected Work" stagger={0.08} distance={40} />
            </h2>
          </Reveal>

          {/* Stacked sticky cards */}
          <div className="relative mt-10 md:mt-14">
            {projects.map((p, i) => (
              <div key={p.name} className="sticky" style={{ top: "5.5rem", zIndex: 10 + i }}>
                <div className="pb-[18vh] md:pb-[20vh]">
                  <article
                    onClick={() => setActive(p)}
                    className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-accent/55 bg-neutral-950"
                  >
                    <div className="relative h-[58vh] md:h-[72vh]">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 70vw"
                          className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center"
                          style={{ background: p.gradient }}>
                          <span className="font-display text-8xl font-bold text-white/10">
                            {initials(p.name)}
                          </span>
                        </div>
                      )}

                      {/* Arrow badge */}
                      <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                        <ArrowIcon />
                      </div>

                      {/* Caption overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-7 pt-20 md:px-8 md:pb-8 md:pt-24">
                        {/* Project name — large & prominent */}
                        <h3 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white">
                          {p.name}
                        </h3>
                        <div className="mt-2 flex items-center justify-between gap-4">
                          <p className="text-sm text-neutral-400">{p.role}</p>
                          <p className="text-sm text-accent">{p.year}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project detail modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
