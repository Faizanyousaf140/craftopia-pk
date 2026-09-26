"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Makes every Framer Motion animation in the tree respect the OS-level
 * "reduce motion" preference in one place, instead of requiring
 * useReducedMotion() calls in each of the ~9 components that use motion.*.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
