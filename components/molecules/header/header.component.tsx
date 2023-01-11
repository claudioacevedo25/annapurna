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
          <div className={styles.logo}>
            <Image
              src="/logo.jpg"
              alt="brand"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,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"
              fill
            />
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
