import Image from "next/image";
import Fade from "react-reveal/Fade";
import styles from "./header.module.css";
export const Header = () => {
  const handleScroll = () => {
    const element = document.getElementById("more_information");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={styles.container}>
      <Fade right>
        <div>
          <div className={styles.logo} />
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
          <h1>AnnaPurna Travels</h1>
          <h2>Empresa de viajes y turismo </h2>
          <button onClick={handleScroll} className={styles.moreInformation}>
            Más información
          </button>
        </div>
      </Fade>
    </header>
  );
};
