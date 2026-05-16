"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimationControls, useAnimation } from "framer-motion";

type AnimateIconContextType = {
  controls: AnimationControls;
  animation: string;
  loop: boolean;
  loopDelay: number;
  active: boolean;
};

const AnimateIconContext = createContext<AnimateIconContextType | null>(null);

export function useAnimateIconContext() {
  const ctx = useContext(AnimateIconContext);
  if (!ctx) throw new Error("useAnimateIconContext must be used inside AnimateIcon");
  return ctx;
}

type AnimationVariants = Record<string, Record<string, unknown>>;

export function getVariants(animations: AnimationVariants, animation: string, loop: boolean) {
  const key = loop ? `${animation}-loop` : animation;
  return animations[key] ?? animations[animation] ?? {};
}

type AnimateIconProps = {
  children: React.ReactNode;
  animateOnHover?: boolean;
  animateOnView?: boolean;
  loop?: boolean;
  loopDelay?: number;
  delay?: number;
  className?: string;
};

export function AnimateIcon({
  children,
  animateOnHover = false,
  animateOnView = false,
  loop = false,
  loopDelay = 0,
  className,
}: AnimateIconProps) {
  const controls = useAnimation();
  const [active, setActive] = useState(animateOnView || (!animateOnHover));

  useEffect(() => {
    if (active) controls.start("animate");
    else controls.start("initial");
  }, [active, controls]);

  return (
    <AnimateIconContext.Provider value={{ controls, animation: "default", loop, loopDelay, active }}>
      <div
        className={className}
        onMouseEnter={() => animateOnHover && setActive(true)}
        onMouseLeave={() => animateOnHover && setActive(false)}
      >
        {children}
      </div>
    </AnimateIconContext.Provider>
  );
}
