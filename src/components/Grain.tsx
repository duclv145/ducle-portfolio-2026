"use client";

import { useEffect, useRef } from "react";

const FPS = 20; // 20fps — đủ cho film grain, nhẹ cho CPU
const STEP = 1000 / FPS;

export default function Grain({ opacity = 0.12 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = 0;

    // Vẽ ở half-resolution → scale lên qua CSS → mỗi grain ~2px, performant
    const resize = () => {
      canvas.width  = Math.ceil(window.innerWidth  / 2);
      canvas.height = Math.ceil(window.innerHeight / 2);
    };

    const draw = (now: number) => {
      animId = requestAnimationFrame(draw);
      if (now - lastTime < STEP) return;
      lastTime = now;

      const { width: w, height: h } = canvas;
      const img = ctx.createImageData(w, h);
      const d   = img.data;

      for (let i = 0; i < d.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        d[i]     = v; // R
        d[i + 1] = v; // G
        d[i + 2] = v; // B
        d[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998,
        opacity,
        mixBlendMode: "overlay",
      }}
    />
  );
}
