import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Process — DREAM",
  description:
    "From novel to two worlds. Notes on the adaptation and the dual visual language of DREAM.",
};

export default function ProcessPage() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className="label">The process</p>
        <h1 className={styles.title}>From novel to two worlds</h1>
        <p className={styles.kicker}>
          A few notes on what we kept, what we changed, and the decision to
          shoot the same love story twice — once in blue, once in red.
        </p>
      </header>

      {/* Adaptation */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>The adaptation</h2>
          <p>
            The book is interior. It lives in what a character notices when no
            one is looking. The challenge of the screenplay was to find the
            scenes that those interior moments need in order to exist on
            screen — not to invent them, but to uncover them.
          </p>
          <p>
            Five of us wrote it together. That was unusual, and it shaped the
            shape of the script. Disagreement was the method, not the obstacle.
          </p>
        </div>
        <figure className={styles.still}>
          <div className={`${styles.placeholder} ${styles.placeholderNeutral}`}>
            <span>still · adaptation</span>
          </div>
          <figcaption>Working sessions, early draft phase.</figcaption>
        </figure>
      </section>

      {/* Blue world */}
      <section className={`${styles.section} ${styles.sectionBlue}`}>
        <figure className={styles.still}>
          <div className={`${styles.placeholder} ${styles.placeholderBlue}`}>
            <span>still · the forest</span>
          </div>
          <figcaption>The forest at dusk. Cool tones, soft contrast.</figcaption>
        </figure>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>The blue world</h2>
          <p>
            Blue is the world the characters want to live in. Cool light, slow
            time, breath you can see. The forest scenes were shot during a
            two-week window where the cold did half the work for us.
          </p>
          <p>
            The romance is naturalistic on purpose. Nothing in the blue world
            is stylised. The camera is patient. People take long pauses. It
            matters that this half of the film feels like a memory — because by
            the end, that is what it is.
          </p>
        </div>
      </section>

      {/* Transition — this is where V2's blue→red scroll wash will live */}
      <section
        className={styles.transition}
        data-motion-anchor="blue-to-red"
        aria-hidden="true"
      >
        <div className={styles.transitionBar} />
      </section>

      {/* Red world */}
      <section className={`${styles.section} ${styles.sectionRed}`}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>The red world</h2>
          <p>
            Red is what happens when the dream begins to want something from
            you. The corridor sequences were built around a single practical
            light source, dialled red, and then nothing else added. The
            silhouettes do the talking.
          </p>
          <p>
            The psychological half of the film borrows the grammar of horror
            without committing to it. We are not interested in scaring anyone.
            We are interested in the feeling that the room you are standing in
            is not the room you walked into.
          </p>
        </div>
        <figure className={styles.still}>
          <div className={`${styles.placeholder} ${styles.placeholderRed}`}>
            <span>still · the corridor</span>
          </div>
          <figcaption>The corridor. One practical light, gelled red.</figcaption>
        </figure>
      </section>

      {/* Together */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>Pulling them together</h2>
          <p>
            The two worlds were never meant to feel like two films. They are
            two ways of looking at the same love. The edit is what makes that
            true — not the script, not the lighting. The edit.
          </p>
          <p>
            The diptych is the film. Neither half stands without the other,
            and that is the point.
          </p>
        </div>
        <figure className={styles.still}>
          <div className={`${styles.placeholder} ${styles.placeholderNeutral}`}>
            <span>still · cutting room</span>
          </div>
          <figcaption>Late night in the edit.</figcaption>
        </figure>
      </section>
    </article>
  );
}
