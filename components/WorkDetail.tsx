"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import type { Project } from "@/lib/data";

function GalleryImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Reveal>
      <div className="relative w-full overflow-hidden rounded-[24px] border border-white/[0.08]">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={1000}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="block h-auto w-full"
          priority={priority}
        />
      </div>
    </Reveal>
  );
}

export default function WorkDetail({
  project,
  next,
}: {
  project: Project;
  next: { name: string; slug: string };
}) {
  const gallery = project.gallery ?? (project.image ? [project.image] : []);
  const hero = gallery[0];
  const rest = gallery.slice(1);
  const mid = Math.ceil(rest.length / 2);
  const firstHalf = rest.slice(0, mid);
  const secondHalf = rest.slice(mid);

  return (
    <article className="mx-auto max-w-[1280px] px-6 md:px-10">
      {/* ── Title ── */}
      <header className="pt-12 md:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
        >
          {project.name}
        </motion.h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-neutral-500">{project.role}</p>
      </header>

      {/* ── Hero ── */}
      {hero && (
        <div className="mt-8 md:mt-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-white/[0.08]">
            <Image
              src={hero}
              alt={project.name}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* ── First image block ── */}
      <div className="mt-8 flex flex-col gap-5 md:mt-10">
        {firstHalf.map((src, i) => (
          <GalleryImage key={src} src={src} alt={`${project.name} — ${i + 1}`} />
        ))}
      </div>

      {/* ── Second image block ── */}
      {secondHalf.length > 0 && (
        <div className="mt-5 flex flex-col gap-5">
          {secondHalf.map((src, i) => (
            <GalleryImage key={src} src={src} alt={`${project.name} — ${mid + i + 1}`} />
          ))}
        </div>
      )}

      {/* ── Next project ── */}
      <Link
        href={`/work/${next.slug}`}
        className="group mt-16 flex items-center justify-between gap-4 border-t border-white/10 py-12 md:mt-24 md:py-16"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">Next project</span>
          <span className="font-display text-xl font-semibold text-neutral-400 transition-colors group-hover:text-accent md:text-2xl">
            {next.name}
          </span>
        </div>
        <span className="font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.02em] text-white transition-transform duration-300 group-hover:translate-x-2">
          Next →
        </span>
      </Link>
    </article>
  );
}
