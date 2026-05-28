import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Behind the scenes — DREAM",
  description:
    "Set photos and stories from the production of DREAM, including the forest shoot and the red-corridor lighting setup.",
};

type Tile = {
  id: string;
  tone: "blue" | "red" | "neutral";
  caption?: string;
  span?: "tall" | "wide";
  label: string;
};

const tiles: Tile[] = [
  {
    id: "1",
    tone: "blue",
    label: "forest · day 1",
    caption: "First setup. Nobody's hands worked. Eight degrees.",
    span: "tall",
  },
  {
    id: "2",
    tone: "neutral",
    label: "between takes",
  },
  {
    id: "3",
    tone: "red",
    label: "corridor · lighting check",
    caption: "Maciej and a single gelled bulb. The whole half of the film.",
    span: "wide",
  },
  {
    id: "4",
    tone: "blue",
    label: "rehearsal",
    caption: "Angela running the second forest scene a fifth time.",
  },
  {
    id: "5",
    tone: "neutral",
    label: "the script",
    caption: "Five names on the cover.",
  },
  {
    id: "6",
    tone: "red",
    label: "corridor · take 12",
    caption: "Syan asked for it. Syan got it.",
  },
  {
    id: "7",
    tone: "blue",
    label: "the forest at 5am",
    span: "wide",
  },
  {
    id: "8",
    tone: "neutral",
    label: "lunch · day 4",
    caption: "Catering was excellent. The director was not.",
  },
  {
    id: "9",
    tone: "red",
    label: "blocking",
    caption: "Working out how a silhouette moves when it's not meant to be a silhouette yet.",
  },
];

export default function BehindTheScenesPage() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className="label">Behind the scenes</p>
        <h1 className={styles.title}>Set photos & stories</h1>
        <p className={styles.kicker}>
          A few moments from the shoot. Some staged, most not.
        </p>
      </header>

      <section className={styles.gallery} aria-label="Behind the scenes gallery">
        <ul className={styles.grid}>
          {tiles.map((tile) => (
            <li
              key={tile.id}
              className={`${styles.cell} ${
                tile.span === "tall"
                  ? styles.tall
                  : tile.span === "wide"
                    ? styles.wide
                    : ""
              }`}
            >
              <figure className={styles.fig}>
                <div
                  className={`${styles.placeholder} ${
                    tile.tone === "blue"
                      ? styles.placeholderBlue
                      : tile.tone === "red"
                        ? styles.placeholderRed
                        : styles.placeholderNeutral
                  }`}
                  role="img"
                  aria-label={tile.label}
                >
                  <span className={styles.placeholderText}>{tile.label}</span>
                </div>
                {tile.caption && (
                  <figcaption className={styles.caption}>
                    {tile.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.outro}>
        <p className={`serif ${styles.outroText}`}>
          More photos as we get permission to share them.
        </p>
      </section>
    </article>
  );
}
