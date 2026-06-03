"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const check = () => setIsLight(document.documentElement.classList.contains("light"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden transition-opacity duration-700"
      style={{ opacity: isLight ? 0 : 1 }}
    >
      <video
        ref={videoRef}
        src="/rendition.mp4"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setReady(true)}
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
      />
    </div>
  );
}
