import Image from "next/image";
import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <Image src="/Spinner.gif" alt="" height={50} width={50} />
    </div>
  );
};

export default Spinner;
