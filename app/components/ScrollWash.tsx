"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import styles from "./ScrollWash.module.css";

type Props = {
  children: ReactNode;
  ariaLabel?: string;
};

const BLUE = "#1a3340";
const RED = "#5a1010";

export default function ScrollWash({ children, ariaLabel }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // hold blue, wash in the middle, hold red
  const bg = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [BLUE, BLUE, RED, RED],
  );

  if (reduced) {
    return (
      <section
        className={styles.wash}
        aria-label={ariaLabel}
        style={{ backgroundColor: RED }}
      >
        <div className={styles.inner}>{children}</div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      className={styles.wash}
      aria-label={ariaLabel}
      style={{ backgroundColor: bg }}
    >
      <div className={styles.inner}>{children}</div>
    </motion.section>
  );
}
