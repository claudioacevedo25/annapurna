import Image from "next/image";
import { ELEMENT_ICONS } from "../../../constants/icons";
import styles from "./differential.module.css";
export const Differential = () => (
  <section className={styles.container}>
    <div className={styles.title}>
      <h3>NUESTRO DIFERENCIAL</h3>
      <h2>¿Qué nos define?</h2>
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
);
