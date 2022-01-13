import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Best Pizza for sure!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find us!</h1>
          <p className={styles.text}>
            12234 Berlin Road, <br /> Berlin, Germany
          </p>
          <p className={styles.text}>
            12234 Kreuzberg Road, <br /> Berlin, Germany <br /> 9999 23232- -232
          </p>
          <p className={styles.text}>
            12234 Berlin Road, <br /> Berlin, Germany <br /> 9999 23232- -232
          </p>
          <p className={styles.text}>
            12234 Berlin Road, <br /> Berlin, Germany <br /> 9999 23232- -232
          </p>
          <p className={styles.text}>
            12234 Kreuzberg Road, <br /> Berlin, Germany <br /> 9999 23232- -232
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>Monday - Friday: 10:00 - 22:00</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
