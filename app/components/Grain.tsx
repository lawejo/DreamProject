"use client";

import { useEffect, useState } from "react";
import styles from "./Grain.module.css";

export default function Grain() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div className={styles.overlay} aria-hidden="true">
      <div
        className={styles.tile}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      />
    </div>
  );
}
