"use client";

import { useEffect, useRef } from "react";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let destroyed = false;

    async function init() {
      const Hls = (await import("hls.js")).default;
      if (destroyed || !video) return;

      if (Hls.isSupported()) {
        const hls = new Hls({ autoStartLoad: true, startLevel: -1 });
        hls.loadSource(HLS_SRC);
        hls.attachMedia(video);
        return () => hls.destroy();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = HLS_SRC;
      }
    }

    const cleanup = init();
    return () => {
      destroyed = true;
      cleanup?.then((fn) => fn?.());
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
