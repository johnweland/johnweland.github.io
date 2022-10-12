// @ts-nocheck
import fs from "fs";
import matter from "gray-matter";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Blog: NextPage = ({ posts }) => {
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
      <main className="max-w-7xl mx-auto px-4 py-4 sm:px-6 text-white">
        Blog
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <Link href={`/blog/${slug}`}>
              <a>
                <img
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`${frontmatter.featuredImage}`}
                />
                <h1 className="text-base text-center p-4">
                  {frontmatter.title}
                </h1>
              </a>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
};

export default Blog;
