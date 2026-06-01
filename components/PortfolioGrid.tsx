"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Motion";
import SplitText from "./SplitText";
import { projects, projectSlug } from "@/lib/data";

// Bento rhythm: pairs of halves with occasional full-width rows.
const layout = [
  { span: "lg:col-span-6", aspect: "aspect-[16/11]" },
  { span: "lg:col-span-6", aspect: "aspect-[16/11]" },
  { span: "lg:col-span-12", aspect: "aspect-[21/9]" },
  { span: "lg:col-span-6", aspect: "aspect-[16/11]" },
  { span: "lg:col-span-6", aspect: "aspect-[16/11]" },
  { span: "lg:col-span-12", aspect: "aspect-[21/9]" },
  { span: "lg:col-span-6", aspect: "aspect-[16/11]" },
  { span: "lg:col-span-6", aspect: "aspect-[16/11]" },
];

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function PortfolioGrid() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16">
        <h1 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white">
          <SplitText
            text="Dive into a few projects that represent"
            onMount
            stagger={0.035}
            distance={32}
          />
          <br />
          <SplitText
            text="my most fulfilling design work."
            onMount
            delay={0.22}
            stagger={0.035}
            distance={32}
          />
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 lg:grid-cols-12">
          {projects.map((p, i) => {
            const l = layout[i] ?? { span: "lg:col-span-6", aspect: "aspect-[16/11]" };
            return (
              <Reveal key={p.name} delay={(i % 2) * 0.06} className={l.span}>
                <Link
                  href={`/work/${projectSlug(p.name)}`}
                  className="group block w-full text-left"
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-[20px] border border-white/[0.08] ${l.aspect}`}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ background: p.gradient }}
                      >
                        <span className="font-display text-7xl font-bold text-white/10">
                          {initials(p.name)}
                        </span>
                      </div>
                    )}
                    {/* Arrow badge */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    {/* Roll-swap name: white rolls up, lime rolls in */}
                    <span className="block h-[1.5em] overflow-hidden text-base font-medium md:text-lg">
                      <span className="flex flex-col transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2">
                        <span className="block h-[1.5em] text-white">{p.name}</span>
                        <span className="block h-[1.5em] text-accent">{p.name}</span>
                      </span>
                    </span>
                    <span className="shrink-0 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                      {p.role}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
  );
}
