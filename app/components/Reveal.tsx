"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  delay?: number; // ms
  duration?: number; // ms
  y?: number; // px to drift up from
};

export default function Reveal({
  delay = 0,
  duration = 700,
  y = 14,
  children,
  className,
  "aria-label": ariaLabel,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} aria-label={ariaLabel}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      aria-label={ariaLabel}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay / 1000,
        duration: duration / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
