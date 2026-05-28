import Image from "next/image";
import styles from "./PosterDiptych.module.css";

type PosterProps = {
  blueSrc?: string;
  redSrc?: string;
  showCaptions?: boolean;
};

export default function PosterDiptych({
  blueSrc,
  redSrc,
  showCaptions = false,
}: PosterProps) {
  return (
    <div className={styles.diptych}>
      <figure className={`${styles.poster} ${styles.blue}`}>
        <div className={styles.frame}>
          {blueSrc ? (
            <Image
              src={blueSrc}
              alt="DREAM — blue poster: a forest scene, cool-toned. The romance."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className={styles.image}
            />
          ) : (
            <div
              className={`${styles.placeholder} ${styles.placeholderBlue}`}
              aria-label="Blue poster placeholder — forest, romance"
              role="img"
            >
              <span className={styles.placeholderText}>
                blue poster
                <br />
                <em>the romance</em>
              </span>
            </div>
          )}
        </div>
        {showCaptions && (
          <figcaption className={styles.caption}>the romance</figcaption>
        )}
      </figure>

      <figure className={`${styles.poster} ${styles.red}`}>
        <div className={styles.frame}>
          {redSrc ? (
            <Image
              src={redSrc}
              alt="DREAM — red poster: a red-lit corridor with silhouettes. The psychological."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className={styles.image}
            />
          ) : (
            <div
              className={`${styles.placeholder} ${styles.placeholderRed}`}
              aria-label="Red poster placeholder — corridor, psychological"
              role="img"
            >
              <span className={styles.placeholderText}>
                red poster
                <br />
                <em>the psycho</em>
              </span>
            </div>
          )}
        </div>
        {showCaptions && (
          <figcaption className={styles.caption}>the psycho</figcaption>
        )}
      </figure>
    </div>
  );
}
