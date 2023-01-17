import Image from "next/image";
import Fade from "react-reveal/Fade";
import { ELEMENT_ICONS } from "../../../constants/icons";
import styles from "./differential.module.css";
export const Differential = () => (
  <Fade left>
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>¿QUÉ NOS DEFINE?</h3>
      </div>
      <div className={styles.icons}>
        {ELEMENT_ICONS.map(({ key, src, title }) => (
          <div key={key}>
            <div className={styles.image__container}>
              <Image src={src} alt={title} width="40" height="40" />
            </div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  </Fade>
);
