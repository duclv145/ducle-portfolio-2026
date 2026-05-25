"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Megaphone,
  Globe,
  Film,
  Sparkles,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skills: { label: string; icon: LucideIcon }[] = [
  { label: "Brand Design", icon: Palette },
  { label: "Marketing Experience", icon: Megaphone },
  { label: "Website", icon: Globe },
  { label: "Motion", icon: Film },
];

const showcase = [
  {
    tag: "BRAND",
    title: "Identity systems",
    desc: "Logo, visual identity, brand guidelines, packaging.",
    accent: "from-amber-500/30 to-yellow-300/10",
    icon: Palette,
  },
  {
    tag: "MOTION",
    title: "Motion graphics",
    desc: "Title sequences, brand reels, short-form social cuts.",
    accent: "from-fuchsia-500/30 to-purple-400/10",
    icon: Film,
  },
  {
    tag: "WEB",
    title: "Marketing sites",
    desc: "Landing pages and product launches that convert.",
    accent: "from-emerald-500/30 to-teal-300/10",
    icon: Globe,
  },
  {
    tag: "CAMPAIGN",
    title: "Marketing experience",
    desc: "Key visuals, social campaigns, multi-platform rollouts.",
    accent: "from-rose-500/30 to-orange-300/10",
    icon: Megaphone,
  },
  {
    tag: "AI",
    title: "Generative AI design",
    desc: "Stable Diffusion / ComfyUI workflows for production-ready visuals.",
    accent: "from-sky-500/30 to-indigo-300/10",
    icon: Cpu,
  },
  {
    tag: "DIRECTION",
    title: "Art direction",
    desc: "Concept, mood, type and color systems for new launches.",
    accent: "from-yellow-400/30 to-amber-300/10",
    icon: Sparkles,
  },
];

function TiltCard({
  item,
  index,
}: {
  item: (typeof showcase)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -9;
    const rotateY = ((x - cx) / cx) * 9;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <motion.article
      ref={cardRef}
      key={item.title}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-surface p-6"
      style={{ transition: "transform 0.18s ease, border-color 0.2s ease", willChange: "transform" }}
    >
      {/* Shimmer highlight that follows tilt */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-foreground/80 backdrop-blur">
            {item.tag}
          </span>
          <item.icon className="h-5 w-5 text-foreground/70 transition group-hover:text-accent" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-foreground/70">{item.desc}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="work"
      className="border-t border-white/5 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="text-2xl font-medium text-muted">I do</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface px-3 py-1.5 text-sm text-foreground/90 transition hover:border-accent hover:text-accent"
              >
                <s.icon className="h-3.5 w-3.5" />
                {s.label}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-2xl font-medium text-foreground">
            and everything
            <br />
            in between.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {showcase.map((item, i) => (
            <TiltCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
