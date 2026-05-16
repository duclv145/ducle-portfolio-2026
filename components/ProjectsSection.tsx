"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "@/lib/data";
import ProjectModal from "@/components/ProjectModal";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  // GSAP horizontal scroll
  useIsoLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${distance()}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tween,
      });

      // Update progress bar driven by sub-scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${Math.max(0, trackRef.current!.scrollWidth - window.innerWidth)}`,
        scrub: true,
        onUpdate: (self) => {
          const bar = sectionRef.current?.querySelector<HTMLDivElement>(
            "[data-scroll-bar]"
          );
          if (bar) bar.style.transform = `scaleX(${self.progress})`;
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative z-10 h-[100svh] w-full overflow-hidden"
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 px-6 pt-24 sm:px-10 sm:pt-28">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between text-fg">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              · 02 · Selected Work
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight sm:text-5xl">
              Scroll <span className="italic">sideways</span> →
            </h2>
          </div>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted md:block">
            05 projects · 2024 — 2026
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="horiz-track flex h-full items-center gap-6 pl-6 pr-[40vw] pt-44 pb-16 sm:gap-10 sm:pl-10 sm:pt-48"
      >
        {/* Project cards */}
        {projects.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="flex h-full w-[80vw] flex-shrink-0 flex-col justify-between sm:w-[44vw] lg:w-[36vw]"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
              <span>·/0{i + 1}</span>
              <span>{p.year}</span>
            </div>

            <div
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(p);
                }
              }}
              data-cursor="view"
              data-cursor-label="Open"
              className="group relative mt-4 aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-bg-soft"
            >
              <div className="absolute inset-0">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 36vw, (min-width: 640px) 44vw, 80vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute left-5 top-5">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-bg/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fg backdrop-blur"
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: p.accent }}
                  />
                  {p.category}
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <h3 className="font-display text-3xl leading-[0.95] text-fg sm:text-4xl">
                  {p.title}
                </h3>
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-bg transition-transform duration-500 group-hover:rotate-45"
                  style={{ background: p.accent }}
                >
                  →
                </span>
              </div>
            </div>
          </article>
        ))}

        {/* Outro panel */}
        <article className="flex h-full w-[80vw] flex-shrink-0 flex-col justify-center pr-10 sm:w-[50vw]">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            ↳ End of selected work
          </p>
          <h3 className="mt-6 font-display text-5xl leading-[0.95] text-fg sm:text-6xl">
            Ready to <span className="italic">collaborate?</span>
          </h3>
          <a
            href="#contact"
            data-cursor="hover"
            data-magnet
            data-magnet-strength="0.45"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-colors hover:bg-fg"
          >
            Let's talk →
          </a>
        </article>
      </div>

      {/* Bottom progress bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 px-6 sm:px-10">
        <div className="mx-auto flex max-w-[1600px] items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
          <span className="hidden sm:inline">scroll progress</span>
          <div className="relative h-px flex-1 bg-white/10">
            <div
              data-scroll-bar
              className="absolute inset-y-0 left-0 origin-left bg-accent"
              style={{ width: "100%", transform: "scaleX(0)" }}
            />
          </div>
          <span className="font-display italic text-fg">vol.04</span>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
