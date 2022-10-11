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
      <div className="mx-auto max-w-7xl lg:px-8 prose dark:prose-invert">
        <h2 className="text-3xl font-bold"> About </h2>

        <p>
          First & foremost; I am a father to a beautiful daughter & a husband to
          an amazing wife, both of whom gracefully accept my nerdy ways.
        </p>

        <p>
          I am martial artist, a gamer, a lover of all this technoloy & a
          creator.
        </p>

        <p>
          I aim to work in an environment where my skill set is put to good use
          & I am given the opportunity to grow my skills further. My aspiration
          is to always be impactful, to leave a legacy of great things for the
          places at which I work.
        </p>
      </div>
      <div className="mx-auto max-w-7xl lg:px-8 prose dark:prose-invert">
        portfolio showcase
      </div>
    </>
  );
};

export default Home;
