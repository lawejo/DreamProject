import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Behind the scenes — DREAM",
  description:
    "Set photos and stories from the production of DREAM, grouped by shoot location.",
};

type Tone = "blue" | "red" | "neutral";

type Tile = {
  label: string;
  caption: string;
  span?: "wide" | "tall";
};

type Location = {
  id: string;
  name: string;
  tone: Tone;
  context: string;
  tiles: Tile[];
};

const locations: Location[] = [
  {
    id: "canteen",
    name: "The canteen",
    tone: "neutral",
    context: "The opening. Cameras hidden among real students.",
    tiles: [
      {
        label: "still · canteen wide",
        caption: "Where Syan begins — alone in the noise.",
        span: "wide",
      },
    ],
  },
  {
    id: "castle",
    name: "The castle",
    tone: "blue",
    context: "Their first meeting.",
    tiles: [
      {
        label: "still · castle approach",
        caption: "We waited three afternoons for the sky to behave.",
      },
      {
        label: "still · castle interior",
        caption: "First scene with Angela and Syan in the same frame.",
      },
    ],
  },
  {
    id: "dorm",
    name: "The dorm",
    tone: "red",
    context: "Frustration, the bathroom mirror, head underwater.",
    tiles: [
      {
        label: "still · mirror",
        caption: "The scene that needed both a camera and a GoPro.",
      },
      {
        label: "still · underwater",
        caption: "Take seventeen.",
        span: "tall",
      },
    ],
  },
  {
    id: "montage",
    name: "Amusement park · cinema · bench",
    tone: "blue",
    context: "The montage scenes — the blue half of the film.",
    tiles: [
      {
        label: "still · park",
        caption: "The blue half of the film.",
      },
      {
        label: "still · cinema",
        caption: "You can tell they're not watching the same film.",
      },
      {
        label: "still · bench",
        caption: "The bench was a real bench. Nobody moved it.",
      },
    ],
  },
  {
    id: "beach",
    name: "The beach",
    tone: "red",
    context: "The ending.",
    tiles: [
      {
        label: "still · beach sunset",
        caption: "Filmed at sunset. We had about twenty minutes.",
        span: "wide",
      },
    ],
  },
];

function toneClass(tone: Tone) {
  return tone === "blue"
    ? styles.placeholderBlue
    : tone === "red"
      ? styles.placeholderRed
      : styles.placeholderNeutral;
}

export default function BehindTheScenesPage() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className="label">Behind the scenes</p>
        <h1 className={styles.title}>Behind the scenes</h1>
        <p className={styles.kicker}>
          A small crew, a few real locations, and a lot of waiting for the
          light.
        </p>
      </header>

      <div className={styles.locations}>
        {locations.map((loc) => (
          <section
            key={loc.id}
            className={styles.location}
            aria-labelledby={`loc-${loc.id}`}
          >
            <header className={styles.locationHeader}>
              <h2 id={`loc-${loc.id}`} className={styles.locationName}>
                {loc.name}
              </h2>
              <p className={styles.locationContext}>{loc.context}</p>
            </header>
            <ul className={styles.tileGrid}>
              {loc.tiles.map((tile, i) => (
                <li
                  key={i}
                  className={`${styles.cell} ${
                    tile.span === "wide"
                      ? styles.wide
                      : tile.span === "tall"
                        ? styles.tall
                        : ""
                  }`}
                >
                  <figure className={styles.fig}>
                    <div
                      className={`${styles.placeholder} ${toneClass(loc.tone)}`}
                      role="img"
                      aria-label={tile.label}
                    >
                      <span className={styles.placeholderText}>
                        {tile.label}
                      </span>
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
        ))}
      </div>

      <section className={styles.outro}>
        <p className={`serif ${styles.outroText}`}>
          More photos as we get permission to share them.
        </p>
      </section>
    </article>
  );
}
