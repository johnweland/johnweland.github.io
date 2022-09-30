import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog :: John Weland [dot] Me</title>
        <meta
          name="description"
          content="Professional profile of John Weland"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-4 sm:px-6 dark:text-white">
        Blog
      </main>
    </>
  );
};

export default Blog;
