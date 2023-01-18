import Image from "next/image";
import Slide from "react-reveal/Slide";
import styles from "./contact.module.css";
export const Contact = () => (
  <Slide bottom>
    <footer className={styles.container}>
      <div className={styles.data}>
        <div className={styles.title}>
          <h3>CONTACTO</h3>
          <div className={styles.contactMethod}>
            <Image src="/phone.png" width="30" height="30" alt="phone" />
            <p>{"(+54) 351-7524770\n(+54) 351-6837106"}</p>
          </div>
          <div className={styles.contactMethod}>
            <Image src="/mail.svg" width="30" height="30" alt="email" />
            <p>annapurna.cba@gmail.com</p>
          </div>
        </div>
        <div className={styles.title}>
          <h3>DATOS</h3>
          <div className={styles.contactMethod}>
            <h3>Razón social:</h3>
            <p>Rumbo 360 S.A.S</p>
          </div>
          <div className={styles.contactMethod}>
            <h3>Cuil:</h3>
            <p>30-71723627-7</p>
          </div>
          <div className={styles.contactMethod}>
            <h3>N Legajo Permiso Precario:</h3>
            <p>PV-2022-77153318-APN-DRAV#MTYD</p>
          </div>
          <div className={styles.agency}>
            <Image
              src="/ministerio.png"
              alt="ministerio"
              width="200"
              height="65"
            />
          </div>
        </div>

        <div className={styles.contact}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOT9Vtghz-doIHcDSK_dgLC7fNqxgP8wg52IKT8PqH58eBRg/viewform"
            target="_blank"
          >
            Hacer un reclamo
          </a>
          <a
            href="https://drive.google.com/file/d/1ZDnjvn65lpqCwJNKqclltiPTK7-PaxRR/view"
            target="_blank"
          >
            Oficina Virtual Habilitada
          </a>
          <a
            href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes"
            target="_blank"
          >
            Denuncia contra una agencia
          </a>
        </div>
      </div>
    </footer>
  </Slide>
);
