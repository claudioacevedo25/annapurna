import Image from "next/image";
import Fade from "react-reveal/Fade";
import styles from "./header.module.css";
export const Header = () => (
  <header className={styles.container}>
    <Fade right>
      <div>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="brand" fill />
        </div>
        <span className={styles.location}>
          <Image
            width="40"
            height="40"
            src="/argentina.flag.svg"
            alt="argentina"
          />
          <h3>Córdoba, Argentina</h3>
        </span>
      </div>
    </Fade>
    <Fade left>
      <div className={styles.names}>
        <h1>ANNAPURNA</h1>
        <h2>Empresa de viajes y turismo </h2>
      </div>
    </Fade>
  </header>
);
