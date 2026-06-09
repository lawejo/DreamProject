import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — DREAM",
  description:
    "Synopsis, cast, and key crew for DREAM, a psycho-romance adapted from the bestselling novel and directed by Dawid Dyrda.",
};

const cast = [
  { name: "Angela Ibarra", role: "Angie" },
  { name: "Syan Singh", role: "Syan" },
];

const credits = [
  { role: "Directed by", names: "Dawid Dyrda" },
  {
    role: "Screenplay by",
    names:
      "Syan Singh, Angela Ibarra, Janice Rozario, Dawid Dyrda & Felicia Thomassen",
  },
  { role: "Music by", names: "Janice Rozario & Felicia Thomassen" },
  { role: "Cinematography by", names: "Maciej Gach" },
  { role: "Edited by", names: "Maciej Gach & Felicia Thomassen" },
];

function IconBook() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6l0 13" />
      <path d="M12 6l0 13" />
      <path d="M21 6l0 13" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
    </svg>
  );
}

function IconFlame() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a5 5 0 0 0 10 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -2 2z" />
    </svg>
  );
}

const hooks = [
  {
    icon: <IconBook />,
    title: "Based on the novel",
    body: "Based on a novel that people actually read. We tried to stay close to it.",
  },
  {
    icon: <IconEye />,
    title: "Shot twice",
    body: "The romance and then what's underneath it. Two posters, two halves, one film.",
  },
  {
    icon: <IconFlame />,
    title: "Made by students",
    body: "Doesn't look like it was.",
  },
];

export default function AboutPage() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className="label">About</p>
        <h1 className={styles.title}>The film</h1>
      </header>

      <section className={styles.synopsis} aria-labelledby="synopsis-h">
        <h2 id="synopsis-h" className="sr-only">
          Synopsis
        </h2>
        <div className={`serif ${styles.synopsisBody}`}>
          <p>A lonely student meets a girl at a castle.</p>
          <p>
            What follows is everything he&apos;s been waiting for - long walks,
            late afternoons at the forest and someone who finally understands
            him.
          </p>
          <p>
            Then a sunset on the beach asks whether any of it was real.
          </p>
        </div>
      </section>

      <section className={styles.why} aria-labelledby="why-h">
        <h2 id="why-h" className={styles.subhead}>
          Why watch
        </h2>
        <ul className={styles.whyGrid}>
          {hooks.map((h) => (
            <li key={h.title} className={styles.whyCard}>
              <span className={styles.whyIcon}>{h.icon}</span>
              <h3 className={styles.whyTitle}>{h.title}</h3>
              <p className={styles.whyBody}>{h.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.castCrew} aria-labelledby="cast-h">
        <h2 id="cast-h" className={styles.subhead}>
          Cast &amp; crew
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

        <dl className={styles.crewList}>
          {credits.map((c) => (
            <div key={c.role} className={styles.crewRow}>
              <dt className={styles.crewRole}>{c.role}</dt>
              <dd className={styles.crewName}>{c.names}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
