"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToId } from "./LenisProvider";
import ThemeToggle from "./ThemeToggle";

const EASE = [0.22, 1, 0.36, 1] as const;

const NOISE_URL =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cn'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23cn)' opacity='.55'/%3E%3C/svg%3E\")";

const BACKGROUND_PARTICLES = Array.from({ length: 520 }, (_, index) => {
  const x = (index * 37 + (index % 11) * 9) % 100;
  const y = (index * 53 + (index % 13) * 7) % 100;
  const size = index % 5 === 0 ? 3 : index % 2 === 0 ? 2 : 1;
  const delay = ((index * 17) % 84) / 10;
  const duration = 3.6 + ((index * 19) % 38) / 10;
  const opacity = 0.1 + ((index * 23) % 42) / 100;

  return { x, y, size, delay, duration, opacity };
});

function ParticleBackground() {
  return (
    <>
      <style>
        {`
          #home .particle-field {
            background: #161616;
          }

          html.light #home .particle-field {
            background: #f2f2ef;
          }

          #home .particle-dot {
            position: absolute;
            display: block;
            border-radius: 1px;
            background: rgba(255, 255, 255, 0.24);
            animation-name: particle-twinkle;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            will-change: opacity, transform;
          }

          html.light #home .particle-dot {
            background: rgba(17, 17, 17, 0.14);
          }

          @keyframes particle-twinkle {
            0%,
            100% {
              opacity: 0.08;
              transform: scale(0.82);
            }
            46% {
              opacity: 0.44;
              transform: scale(1);
            }
            74% {
              opacity: 0.16;
              transform: scale(0.9);
            }
          }
        `}
      </style>
      <div aria-hidden className="particle-field pointer-events-none fixed inset-0 z-0 overflow-hidden md:absolute">
        {BACKGROUND_PARTICLES.map((particle, index) => (
          <span
            key={index}
            className="particle-dot"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

function NoiseLayer({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.32] mix-blend-overlay ${className}`}
      style={{ backgroundImage: NOISE_URL, backgroundSize: "160px 160px" }}
    />
  );
}

function LiquidNoise({ media = false }: { media?: boolean }) {
  return (
    <span
      aria-hidden
      className={`liquid-glass-noise ${media ? "liquid-glass-noise-media" : ""}`}
      style={{ backgroundImage: NOISE_URL, backgroundSize: "160px 160px" }}
    />
  );
}

function LiquidGlassLayer({ media = false }: { media?: boolean }) {
  return (
    <>
      <span aria-hidden className={`liquid-glass-base ${media ? "liquid-glass-media" : ""}`} />
      <LiquidNoise media={media} />
    </>
  );
}

const cards = [
  { label: "About", id: "about", className: "col-span-2 lg:col-span-3" },
  { label: "Portfolio", id: "work", className: "col-span-2 lg:col-span-9" },
  { label: "Contact", id: "contact", className: "col-span-1 lg:col-span-6" },
  { label: "Resume", id: "experience", className: "lg:col-span-3 lg:col-start-10" },
];

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Card({
  label,
  id,
  href,
  className = "",
  onPreview,
  children,
}: {
  label: string;
  id: string;
  href?: string;
  className?: string;
  onPreview?: (word: string | null) => void;
  children?: React.ReactNode;
}) {
  const cls = `group relative flex min-h-[160px] overflow-hidden rounded-[22px] bg-transparent p-5 text-left transition duration-500 hover:-translate-y-1 md:min-h-[260px] md:rounded-[28px] md:p-8 lg:h-full ${className}`;

  const handlers = {
    onFocus: () => onPreview?.(label),
    onBlur: () => onPreview?.(null),
    onPointerEnter: () => onPreview?.(label),
    onPointerLeave: () => onPreview?.(null),
  };

  const inner = (
    <>
      <LiquidGlassLayer />
      {children}
      {/* Roll-swap label: white rolls up, lime rolls in */}
      <span className="absolute bottom-5 left-5 z-20 block h-[1.1em] overflow-hidden text-[13px] font-semibold leading-none tracking-[-0.035em] md:bottom-8 md:left-8 md:text-base">
        <span className="flex flex-col transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2">
          <span className="block h-[1.1em] text-white">{label}</span>
          <span className="block h-[1.1em] text-accent">{label}</span>
        </span>
      </span>
      <span className="absolute bottom-5 right-5 z-20 text-white/85 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:bottom-8 md:right-8">
        <Arrow />
      </span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={cls}
        {...handlers}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={() => scrollToId(id)} className={cls} {...handlers}>
      {inner}
    </button>
  );
}

const STACK_LOGOS = [
  { src: "/stack/claude.png", alt: "Claude" },
  { src: "/stack/chatgpt.png", alt: "ChatGPT" },
  { src: "/stack/gemini.png", alt: "Gemini" },
  { src: "/stack/ai.png", alt: "Illustrator" },
  { src: "/stack/ps.png", alt: "Photoshop" },
  { src: "/stack/id.png", alt: "InDesign" },
  { src: "/stack/ae.png", alt: "After Effects" },
  { src: "/stack/pr.png", alt: "Premiere Pro" },
  { src: "/stack/lr.png", alt: "Lightroom" },
];

function ToolIcon({ src, alt }: { src: string; alt: string }) {
  const isAdobeLogo = /\/stack\/(ai|ps|id|ae|pr|lr)\.png$/.test(src);
  const isFullFrameLogo = /\/stack\/(chatgpt|gemini)\.png$/.test(src);

  return (
    <span className="relative mr-3 h-12 w-12 shrink-0 overflow-hidden rounded-[12px] bg-surface md:mr-5 md:h-[84px] md:w-[84px] md:rounded-[16px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="84px"
        className={isAdobeLogo || isFullFrameLogo ? "scale-[1.08] object-cover" : "object-contain p-3"}
      />
    </span>
  );
}

function StackRail() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center overflow-hidden">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...STACK_LOGOS, ...STACK_LOGOS].map((l, index) => (
          <ToolIcon key={`${l.alt}-${index}`} src={l.src} alt={l.alt} />
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
    </div>
  );
}

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
  exit: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
};
const letterVariant = {
  hidden: { opacity: 0, y: 44, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -28,
    transition: { duration: 0.3, ease: EASE },
  },
};

function HeroWord({ word }: { word: string }) {
  const chars = [...word];
  return (
    <div className="pointer-events-none absolute left-1/2 top-[7.6rem] z-[5] flex -translate-x-1/2 whitespace-nowrap font-display text-[clamp(5.75rem,11.2vw,11.2rem)] font-black leading-none tracking-[-0.01em] text-white md:top-[5.85rem]">
      <AnimatePresence mode="wait">
        <motion.div
          key={word}
          className="flex"
          variants={wordContainer}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {chars.map((c, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={letterVariant}
              className="inline-block whitespace-pre will-change-transform"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function BentoHero() {
  const [time, setTime] = useState("");
  const [previewWord, setPreviewWord] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "Asia/Ho_Chi_Minh",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-bg px-4 pb-4 text-white md:px-5 md:pb-5"
    >
      <header className="relative z-30 overflow-hidden px-2 py-4 md:px-3">
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.08 }}
          className="flex items-center justify-between gap-4 text-[15px] font-medium tracking-[-0.01em] md:text-base"
        >
          <div className="flex items-center gap-3 sm:gap-8 md:gap-16">
            <button
              type="button"
              onClick={() => scrollToId("home")}
              className="shrink-0 text-white transition-colors hover:text-accent"
            >
              Duc Le
            </button>
            <span className="text-neutral-400">Senior Graphic Designer</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden tabular-nums text-neutral-400 sm:inline">Ha Noi • {time}</span>
            <ThemeToggle />
          </div>
        </motion.div>
      </header>

      <HeroWord word={previewWord ?? "Duc Le"} />

      <div className="relative z-10 mx-auto mt-[7.5rem] grid w-[calc(100%-1.5rem)] grid-cols-2 gap-2.5 md:mt-[8.2rem] md:w-full md:gap-4 lg:h-[calc(100svh-208px)] lg:grid-cols-12 lg:grid-rows-2">
        <Card label="About" id="about" href="/about" className={cards[0].className} onPreview={setPreviewWord} />

        <Card label="Portfolio" id="work" href="/portfolio" className={cards[1].className} onPreview={setPreviewWord} />

        <Card label="Contact" id="contact" href="/contact" className={cards[2].className} onPreview={setPreviewWord} />

        <div className="group relative col-span-1 min-h-[160px] overflow-hidden rounded-[22px] bg-surface-2 md:min-h-[260px] md:rounded-[28px] lg:col-span-3 lg:h-full">
          <Image
            src="/avatar.png"
            alt="Duc Le"
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover object-[50%_28%] grayscale transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
          <LiquidGlassLayer media />
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-2.5 md:gap-4 lg:col-span-3 lg:h-full lg:grid-cols-1 lg:grid-rows-2">
          <div
            onPointerEnter={() => setPreviewWord("Stack")}
            onPointerLeave={() => setPreviewWord(null)}
            className="group relative min-h-[160px] overflow-hidden rounded-[22px] bg-transparent md:min-h-[220px] md:rounded-[28px] lg:min-h-0"
          >
            <LiquidGlassLayer />
            <StackRail />
          </div>

          <Card
            label="Resume"
            id="experience"
            href="https://drive.google.com/file/d/1cXMvnJ17E-cUKvi-8jYAW9A8Q7DWbmtz/view?usp=sharing"
            onPreview={setPreviewWord}
            className="min-h-[160px] md:min-h-[220px] lg:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}
