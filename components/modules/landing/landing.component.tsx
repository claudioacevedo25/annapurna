import Head from "next/head";
import { Header } from "../../molecules/header";
import { Content } from "../../molecules/content";
import { Differential } from "../../molecules/differential";
import { Products } from "../../molecules/products";
import { Contact } from "../../molecules/contact";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export const Landing = () => (
  <>
    <Head>
      <title>Annapurna</title>
      <meta name="description" content="annapurna viajes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Content />
    <Differential />
    <Products />
    <Contact />

    <WhatsAppWidget
      phoneNumber="+543517524770"
      companyName="Agencia de viajes"
      replyTimeText="Normalmente responde en pocos minutos"
      message="Hola, ¿cómo estás? Gracias por contactarnos. Por favor deja tu consulta y te estaremos respondiendo a la brevedad."
      inputPlaceHolder="Escribe tu mensaje"
      sendButtonText="Enviar consulta"
    />
  </>
);
