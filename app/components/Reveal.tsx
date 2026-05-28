"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

type RevealProps = ComponentProps<"div"> & {
  delay?: number; // ms
  duration?: number; // ms
  y?: number; // px to drift up from
};

export default function Reveal({
  delay = 0,
  duration = 700,
  y = 14,
  children,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div {...rest}>{children}</div>;
  }

  return (
    <motion.div
      {...rest}
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
