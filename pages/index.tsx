import Hero from "components/Hero";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Weland [dot] Me</title>
        <meta
          name="description"
          content="Professional profile of John Weland"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
