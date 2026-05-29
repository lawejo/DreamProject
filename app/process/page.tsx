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
          We wanted to make something that tricks you. You think you&apos;re
          watching a love story. By the beach scene, you&apos;re not so sure.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>From novel to screenplay</h2>
        <div className={styles.text}>
          <p>
            The novel gave us the shape of it. A boy, a girl, a beach. Adapting
            it meant figuring out what to leave out. We wrote the screenplay
            together, all five of us, which is unusual. But it meant the
            dialogue between Syan and Angela belongs to them. They wrote most
            of it.
          </p>
        </div>
      </section>

      {/* §9.5 anchor: blue→red scroll wash */}
      <ScrollWash ariaLabel="Two worlds, two colors">
        <h2 className={`${styles.sectionTitle} ${styles.onWash}`}>
          Two worlds, two colors
        </h2>
        <div className={`${styles.text} ${styles.onWashText}`}>
          <p>
            The blue scenes are cooler. Less edited. He&apos;s happy there.
            The red ones are tighter and warmer, and something feels off in
            them. That was the plan. We wanted two posters because
            it&apos;s basically two films. Or the same film from two
            different angles.
          </p>
        </div>
      </ScrollWash>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>A camera that follows the mind</h2>
        <div className={styles.text}>
          <p>
            The camera starts wide. Syan at a table in a full canteen, nobody
            talking to him. It gets closer. By the end of the first scene
            you&apos;re inside his head. Maciej had this idea for a spiral
            shot that wraps around Syan&apos;s face and comes out somewhere
            else entirely. We used it as the transition into the dream.
            After that the camera stays close.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Foreshadowing what you can&apos;t yet see
        </h2>
        <div className={styles.text}>
          <p>
            The light changes when Angie leaves a shot. The colour filters
            shift. At one point she walks into a candle flame and disappears.
            None of that is accidental. We put it in the script. It&apos;s
            there on a first watch too. You probably won&apos;t catch it.
          </p>
        </div>
      </section>

      <p className={`serif ${styles.closing}`}>We hope you watch it twice.</p>
    </article>
  );
}
