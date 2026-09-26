"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "blockquote";
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  margin?: string;
};

/**
 * Shared scroll-reveal wrapper — replaces the near-identical
 * initial/whileInView/viewport/transition block that used to be hand-typed
 * in 8 different section components. Reduced motion is handled once,
 * globally, via <MotionConfig reducedMotion="user"> in app/layout.tsx.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  duration = 0.6,
  y,
  x,
  scale,
  className,
  margin,
}: RevealProps) {
  const initial: Record<string, number> = { opacity: 0 };
  const animate: Record<string, number> = { opacity: 1 };

  if (y !== undefined) {
    initial.y = y;
    animate.y = 0;
  }
  if (x !== undefined) {
    initial.x = x;
    animate.x = 0;
  }
  if (scale !== undefined) {
    initial.scale = scale;
    animate.scale = 1;
  }

  const MotionTag = as === "blockquote" ? motion.blockquote : motion.div;
  const viewport = margin ? { once: true, margin } : { once: true };

  return (
    <MotionTag
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
