import Image from "next/image";
import Slide from "react-reveal/Slide";
import styles from "./contact.module.css";
export const Contact = () => (
  <Slide bottom>
    <footer className={styles.container}>
      <div className={styles.title}>
        <h3>CONTACTO</h3>
      </div>

      <div className={styles.email}>
        <Image src="/mail.svg" width="30" height="30" alt="email" />
        <h3>annapurna.cba@gmail.com</h3>
      </div>
      <div className={styles.contact}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdOT9Vtghz-doIHcDSK_dgLC7fNqxgP8wg52IKT8PqH58eBRg/viewform"
          target="_blank"
        >
          Contactar
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdOT9Vtghz-doIHcDSK_dgLC7fNqxgP8wg52IKT8PqH58eBRg/viewform"
          target="_blank"
        >
          Hacer un reclamo
        </a>
        <a
          href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes"
          target="_blank"
        >
          Denuncia contra una agencia
        </a>
      </div>

      <div className={styles.agency}>
        <Image src="/ministerio.png" alt="ministerio" width="200" height="65" />
        <a
          href="https://drive.google.com/file/d/1ZDnjvn65lpqCwJNKqclltiPTK7-PaxRR/view"
          target="_blank"
        >
          Oficina Virtual Habilitada
        </a>
        <a href="">Habilitación Licencia Provisoria</a>
      </div>
      <p className={styles.cuil}>
        Travels, una EVT de Fire Eats SAS, CUIT 30717236277, habilitada bajo
        resolución 141/82
      </p>
    </footer>
  </Slide>
);
