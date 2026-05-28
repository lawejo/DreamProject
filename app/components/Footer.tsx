import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.wordmark}>DREAM</div>
            <p className={styles.tagline}>Some dreams feel too real.</p>
          </div>
          <div className={styles.status}>
            <span className="label">Status</span>
            <span className={styles.statusValue}>Coming soon</span>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <h3 className="label">Cast</h3>
            <ul>
              <li>Angela Ibarra</li>
              <li>Syan Singh</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className="label">Direction</h3>
            <ul>
              <li>Dawid Dyrda</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className="label">Screenplay</h3>
            <ul>
              <li>Syan Singh</li>
              <li>Angela Ibarra</li>
              <li>Janice Rozario</li>
              <li>Dawid Dyrda</li>
              <li>Felicia Thomassen</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className="label">Music · DP · Edit</h3>
            <ul>
              <li>Janice Rozario</li>
              <li>Felicia Thomassen</li>
              <li>Maciej Gach</li>
            </ul>
          </div>
        </div>

        <div className={styles.meta}>
          <nav aria-label="Footer">
            <ul className={styles.metaLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/process">Process</Link>
              </li>
              <li>
                <Link href="/behind-the-scenes">Behind the scenes</Link>
              </li>
            </ul>
          </nav>
          <p className={styles.copy}>© {new Date().getFullYear()} DREAM</p>
        </div>
      </div>
    </footer>
  );
}
