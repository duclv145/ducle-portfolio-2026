"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

const PARTICLE_COUNT = 32;
const LINK_DIST = 110;
const MOUSE_RADIUS = 140;

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -9999, y: -9999, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const lastFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const seed = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.2 + 0.4,
      }));
    };

    resize();
    seed();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onResize = () => { resize(); seed(); };
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => { mouseRef.current.active = false; };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    // Cap at ~30fps
    const FPS = 30;
    const INTERVAL = 1000 / FPS;

    const tick = (now: number) => {
      rafRef.current = requestAnimationFrame(tick);
      if (now - lastFrameRef.current < INTERVAL) return;
      lastFrameRef.current = now;

      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const m = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width; else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height; else if (p.y > height) p.y = 0;
        }

        if (m.active) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            const d = Math.sqrt(d2) || 1;
            const force = (1 - d / MOUSE_RADIUS) * 0.5;
            p.x += (dx / d) * force;
            p.y += (dy / d) * force;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = "rgba(10,10,15,0.30)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // particle-particle links
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            ctx.strokeStyle = `rgba(10,10,15,${(1 - Math.sqrt(d2) / LINK_DIST) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // mouse links
        if (m.active) {
          const dx = a.x - m.x;
          const dy = a.y - m.y;
          const d2 = dx * dx + dy * dy;
          const md = LINK_DIST * 1.3;
          if (d2 < md * md) {
            ctx.strokeStyle = `rgba(224,254,16,${(1 - Math.sqrt(d2) / md) * 0.4})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Static mesh blobs — no cursor tracking, cheaper */}
      <div className="absolute inset-0">
        <div className="absolute left-[20%] top-[15%] h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-40">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(255,94,161,0.5),transparent_60%)]" />
        </div>
        <div className="absolute left-[75%] top-[65%] h-[45vmax] w-[45vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-35">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(102,226,255,0.5),transparent_60%)]" />
        </div>
        <div className="absolute left-[55%] top-[30%] h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] opacity-25">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(224,254,16,0.4),transparent_60%)]" />
        </div>
      </div>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(255,255,255,0.6)_85%)]" />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
