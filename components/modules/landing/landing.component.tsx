import Head from "next/head";
import { Header } from "../../molecules/header";

export const Landing = () => (
  <>
    <Head>
      <title>Annapurna</title>
      <meta name="description" content="annapurna viajes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
  </>
);
