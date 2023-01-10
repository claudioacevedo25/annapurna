import Image from "next/image";
import Slide from "react-reveal/Slide";
import styles from "./contact.module.css";
export const Contact = () => (
  <Slide bottom>
    <footer className={styles.container}>
      <div className={styles.title}>
        <h3>CONTACTO</h3>
        <h2>¿Seguimos conectados?</h2>
      </div>

      <div className={styles.email}>
        <Image src="/mail.svg" width="30" height="30" alt="email" />
        <h3>info@annapurna.com.ar</h3>
      </div>
      <div className={styles.contact}>
        <a href="">Contactar</a>
        <a href="">Hacer un reclamo</a>
        <a href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes">
          Denuncia contra una agencia
        </a>
      </div>

      <div className={styles.agency}>
        <Image src="/ministerio.png" alt="ministerio" width="200" height="65" />
        <a href="">Oficina Virtual Habilitada</a>
        <a href="">Habilitación Licencia Provisoria</a>
      </div>
      <p className={styles.cuil}>
        Travels, una EVT de Fire Eats SAS, CUIT xxxxx, habilitada bajo
        resolución 141/82
      </p>
    </footer>
  </Slide>
);
