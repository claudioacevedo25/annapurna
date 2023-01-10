import Image from "next/image";
import Flip from "react-reveal/Flip";
import { MAIN_CONTENT } from "../../../constants/elements";
import styles from "./content.module.css";

export const Content = () => (
  <section id="more_information" className={styles.container}>
    {MAIN_CONTENT.map(({ content, key, src, subtitle, title }, index) => (
      <Flip key={key} left>
        <div
          className={`${styles.content} ${
            index % 2 === 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.image__container}>
            <Image src={src} alt="description_img" width="300" height="200" />
          </div>
          <div className={styles.text}>
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <p>{content}</p>
          </div>
        </div>
      </Flip>
    ))}
  </section>
);
