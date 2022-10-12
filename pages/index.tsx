import Hero from "partials/hero";
import type { NextPage } from "next";
import Head from "next/head";
import WorkHistory from "partials/workhistory";

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
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-neutral-300 mb-24">
        <h2 id="about" className="text-3xl font-bold mb-4">
          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text">
            About{" "}
          </span>
          <span className="text-white">Me</span>
        </h2>

        <p>
          I am a Solutions Architect with nine years of experience with
          foundational Internet technology who undertakes complex assignments,
          exciting maintainable implementations and deliver superior
          performances.
        </p>
        <br />
        <p>
          I practice DevOps and applies strong technical, functional and
          analytical skills and operate with a strong sense of urgency and
          thrives in fast paced setting in order to solve business problems
          expediently.
        </p>
      </div>
      <WorkHistory />
    </>
  );
};

export default Home;
