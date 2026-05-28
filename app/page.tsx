import Link from "next/link";
import PosterDiptych from "./components/PosterDiptych";
import styles from "./page.module.css";

const doorways = [
  {
    href: "/about",
    label: "About the film",
    teaser: "Synopsis, cast & why to watch.",
  },
  {
    href: "/process",
    label: "The process",
    teaser: "From novel to two worlds.",
  },
  {
    href: "/behind-the-scenes",
    label: "Behind the scenes",
    teaser: "Set photos & stories.",
  },
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.heroTop}>
        <p className={styles.tagline}>
          A psycho-romance
          <span className={styles.bullet}>·</span>
          Adapted from the bestselling novel
        </p>
      </section>

      <section className={styles.posters}>
        <div className={styles.postersInner}>
          <PosterDiptych
            blueSrc="/images/BluePoster.jpeg"
            redSrc="/images/RedPoster.jpeg"
          />
        </div>
      </section>

      <section className={styles.doorways} aria-label="Explore the site">
        <ul className={styles.doorwayList}>
          {doorways.map((d) => (
            <li key={d.href} className={styles.doorwayItem}>
              <Link href={d.href} className={styles.doorway}>
                <span className={styles.doorwayLabel}>
                  {d.label}
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </span>
                <span className={styles.doorwayTeaser}>{d.teaser}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
