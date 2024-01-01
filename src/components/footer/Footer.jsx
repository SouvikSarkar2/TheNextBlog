import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>TheNextBlog</div>
      <div className={styles.text}>
        QuantumQuill Innovations ©️ All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
