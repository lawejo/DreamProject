import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark} aria-label="DREAM — home">
          DREAM
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/process" className={styles.link}>
              Process
            </Link>
          </li>
          <li>
            <Link
              href="/behind-the-scenes"
              className={styles.link}
              aria-label="Behind the scenes"
            >
              <span className={styles.full}>Behind the scenes</span>
              <span className={styles.abbr}>BTS</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
