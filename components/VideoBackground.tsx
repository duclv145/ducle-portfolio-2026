"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const HLS_SRC =
  "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => setReady(true);
    video.addEventListener("canplay", onCanPlay);

    if (Hls.isSupported()) {
      const hls = new Hls({ autoStartLoad: true, startLevel: -1 });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
        video.removeEventListener("canplay", onCanPlay);
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }

    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
      />
    </div>
  );
}
