import type { Metadata } from "next";
import ScrollWash from "../components/ScrollWash";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Process — DREAM",
  description:
    "From novel to two worlds. Notes on the adaptation, the dual visual language, the cinematography, and what to look for the second time.",
};

export default function ProcessPage() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className="label">The process</p>
        <h1 className={styles.title}>The process</h1>
        <p className={`serif ${styles.opener}`}>
          Dream started as a question — what would it look like if a film let
          you fall in love at the same speed its main character did, and then
          asked you to step back and see what you&apos;d really been watching?
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>From novel to screenplay</h2>
        <div className={styles.text}>
          <p>
            The bestselling novel gave us the spine: a quiet boy, a girl who
            arrives like an answer, a slow unraveling. Adapting it meant
            choosing what to keep silent. The screenplay was written
            collaboratively — by the cast, the director, and the editor
            together — so the language between the two leads belongs to the
            people speaking it.
          </p>
        </div>
      </section>

      {/* §9.5 anchor: blue→red scroll wash */}
      <ScrollWash ariaLabel="Two worlds, two colors">
        <h2 className={styles.sectionTitle}>Two worlds, two colors</h2>
        <div className={styles.text}>
          <p>
            We built the film around a duality you can almost feel as a
            temperature. The romance is blue — cool, soft, naturalistic, the
            world he wishes he lived in. The other half is red — warmer,
            closer, more honest about what&apos;s actually happening to him.
          </p>
          <p>
            The two posters aren&apos;t alternatives; they&apos;re the same
            film, photographed from both sides of his head.
          </p>
        </div>
      </ScrollWash>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>A camera that follows the mind</h2>
        <div className={styles.text}>
          <p>
            Maciej Gach&apos;s cinematography moves with Syan&apos;s
            interiority. The film opens zoomed-out — Syan alone at a table in
            a crowded canteen — and slowly closes in until we&apos;re behind
            his shoulder, then inside his POV. A long spiral-around-the-head
            transition takes us out of the canteen and into the dream. From
            there, the camera keeps choosing intimacy over information.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Foreshadowing what you can&apos;t yet see
        </h2>
        <div className={styles.text}>
          <p>
            Look closely and the film tells you what it is from the beginning.
            The light shifts when Angie walks away. Color filters drift. A
            figure blends into a flame. These weren&apos;t accidents in the
            edit — they were planned at the script stage, small admissions
            hidden in plain sight, waiting for a second viewing.
          </p>
        </div>
      </section>

      <p className={`serif ${styles.closing}`}>We hope you watch it twice.</p>
    </article>
  );
}
