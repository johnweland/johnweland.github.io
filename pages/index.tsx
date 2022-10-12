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
      <div className="mx-auto max-w-7xl px-4 lg:px-8 dark:text-neutral-300 mb-24">
        <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text mb-4">
          About
        </h2>

        <p>
          First & foremost; I am a father to a beautiful daughter & a husband to
          an amazing wife, both of whom gracefully accept my nerdy ways.
        </p>

        <p>
          I aim to work in an environment where my skill set is put to good use
          & I am given the opportunity to grow my skills further. My aspiration
          is to always be impactful, to leave a legacy of great things for the
          places at which I work.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 dark:text-neutral-300 mb-24">
        <h2
          id="employment"
          className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text mb-4"
        >
          Employment
        </h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold dark:text-white">
              Rural Sourcing Inc.
            </h3>
            <h4 className="font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text mb-2">
              Senior I {"(Cloud/AWS)"}{" "}
              <small className="text-gray-500 dark:text-white">Current</small>
            </h4>
            <p>
              During my time at RSI, I have lead teams in replatforming
              as-well-as refactoring / re-arcitecting efforts, helping clients
              to realize, reach &amp; even surpass their performance &amp; cost
              goals.
            </p>
            <br />
            <p>
              As a senior team member I also participate in &amp; lead many of
              our Agile ceremonies. As a mentor I help junior team members with
              career growth while meeting client demand.
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold dark:text-white">FluentStream</h3>
            <h4 className="font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text mb-2">
              Developer II{" "}
              <small className="text-gray-500 dark:text-white">2021-2021</small>
            </h4>
            <p>
              While at FluentStream my primary focus was to reduce technical
              debt by migrating legacy systems using TypeScript onto{" "}
              <abbr title="Amazon Web Services">AWS</abbr> as a replatforming
              effort in order to pave the way for an entire application &amp;
              infrastructure overhaul.
            </p>
          </div>

          <div className="">
            <h3 className="text-2xl font-bold dark:text-white">ICSolutions</h3>
            <h4 className="font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text mb-2">
              Software Engineer{" "}
              <small className="text-gray-500 dark:text-white">2015-2021</small>
            </h4>
            <p>
              At ICSolutions I maintained &amp; improved upon the
              &quot;Enforcer&quot; ICSolutions&apos; cheif telecom{" "}
              <abbr title="Intelectual Property">IP</abbr>, as well as created
              the <abbr title="Enforcer Real-Time Status">ERTS</abbr> devtools
              used by engineering & helpdesk alike.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
