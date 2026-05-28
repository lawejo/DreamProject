import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — DREAM",
  description:
    "Synopsis, cast, and key crew for DREAM, a psycho-romance adapted from the bestselling novel and directed by Dawid Dyrda.",
};

const cast = [
  { name: "Angela Ibarra", role: "Lead" },
  { name: "Syan Singh", role: "Lead" },
];

const crew = [
  { name: "Dawid Dyrda", role: "Director" },
  {
    name: "Syan Singh · Angela Ibarra · Janice Rozario · Dawid Dyrda · Felicia Thomassen",
    role: "Screenplay",
  },
  { name: "Maciej Gach", role: "Cinematography" },
  { name: "Maciej Gach · Felicia Thomassen", role: "Editing" },
  { name: "Janice Rozario · Felicia Thomassen", role: "Music" },
];

const whyWatch = [
  {
    n: "01",
    title: "Adapted from the bestseller",
    body: "A book that built a following before the screen ever caught up. The screenplay keeps faith with what made readers ache.",
  },
  {
    n: "02",
    title: "Two worlds, one love",
    body: "A blue romance and a red psychological. A film designed as a diptych — tender naturalism on one side, stylised dread on the other.",
  },
  {
    n: "03",
    title: "Two leads worth watching",
    body: "Angela Ibarra and Syan Singh carry the dual-tone weight of the film, on and off the page — both also co-wrote it.",
  },
];

export default function AboutPage() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className="label">About the film</p>
        <h1 className={styles.title}>DREAM</h1>
        <p className={styles.kicker}>
          A psycho-romance, adapted from the bestselling novel.
        </p>
      </header>

      <section className={styles.synopsis} aria-labelledby="synopsis-h">
        <h2 id="synopsis-h" className="label">
          Synopsis
        </h2>
        <p className={`serif ${styles.synopsisBody}`}>
          Two people meet. The world around them softens — a forest at dusk,
          breath visible in the cold. Then it sharpens, shifts, turns the wrong
          colour. A romance lived under fluorescent reds, edges humming with
          something neither of them will name out loud. Some dreams feel too
          real. Some begin to want more of you than you meant to give.
        </p>
        <p className={styles.synopsisNote}>
          Coming soon. No release date announced.
        </p>
      </section>

      <section className={styles.castCrew} aria-labelledby="cast-h">
        <h2 id="cast-h" className="label">
          Cast
        </h2>
        <ul className={styles.castGrid}>
          {cast.map((c) => (
            <li key={c.name} className={styles.castCard}>
              <div className={styles.castPortrait} aria-hidden="true">
                <span className={styles.castInitials}>
                  {c.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
              <div className={styles.castMeta}>
                <p className={styles.castName}>{c.name}</p>
                <p className={styles.castRole}>{c.role}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="label" style={{ marginTop: "var(--space-12)" }}>
          Key crew
        </h2>
        <dl className={styles.crewList}>
          {crew.map((c) => (
            <div key={c.role} className={styles.crewRow}>
              <dt className={styles.crewRole}>{c.role}</dt>
              <dd className={styles.crewName}>{c.name}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.why} aria-labelledby="why-h">
        <h2 id="why-h" className="label">
          Why watch
        </h2>
        <ul className={styles.whyGrid}>
          {whyWatch.map((w) => (
            <li key={w.n} className={styles.whyCard}>
              <span className={styles.whyNum}>{w.n}</span>
              <h3 className={styles.whyTitle}>{w.title}</h3>
              <p className={styles.whyBody}>{w.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
