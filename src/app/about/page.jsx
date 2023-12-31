import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We Create digital ideas that are bigger, bolder, braver amd better ,
          We believe in good ideas flexibility and precission we are worlds best
          consulting and financial solution provider , Wide range of web and
          software development services
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>100 K+</h1>
            <p>Satisfied Customers</p>
          </div>
          <div className={styles.box}>
            <h1>1 M+</h1>
            <p>Posts online</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/car.gif" alt="about image" className={styles.img} fill />
      </div>
    </div>
  );
};

export default AboutPage;
