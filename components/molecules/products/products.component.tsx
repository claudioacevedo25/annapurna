import Image from "next/image";
import Fade from "react-reveal/Fade";
import { ELEMENT_PRODUCTS } from "../../../constants/products";
import styles from "./products.module.css";
export const Products = () => (
  <Fade right>
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>¿QUÉ OFRECEMOS?</h3>
      </div>
      <div className={styles.icons}>
        {ELEMENT_PRODUCTS.map(({ key, src, title }) => (
          <div key={key}>
            <div className={styles.image__container}>
              <Image src={src} alt={title} width="300" height="200" />
            </div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  </Fade>
);
