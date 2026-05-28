import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/about">About</Link>
          <span className={styles.dot} aria-hidden="true">·</span>
          <Link href="/process">Process</Link>
          <span className={styles.dot} aria-hidden="true">·</span>
          <Link href="/behind-the-scenes">Behind the scenes</Link>
        </nav>
        <p className={styles.credit}>
          DREAM — A film by Dawid Dyrda · 2026
        </p>
      </div>
    </footer>
  );
}
