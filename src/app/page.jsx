import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>QUANTUM QUILL INNOVATIONS </h1>
        <p className={styles.desc}>
          QuantumQuill Innovations: Redefining the future of blogging with
          state-of-the-art encryption and cutting-edge AI, ensuring a private
          haven for your thoughts in the digital cosmos. Explore a new frontier
          of creativity where innovation meets unparalleled confidentiality.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/car2.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
