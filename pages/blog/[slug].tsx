// @ts-nocheck
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";

const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export { getStaticPaths, getStaticProps };

const PostPage = ({ frontmatter, content }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta property="og:title" content={frontmatter.title} key="title" />
        <meta
          name="description"
          content={frontmatter.description}
          key="description"
        />
        <meta name="keywords" content={frontmatter.tags} />
        <meta name="author" content={frontmatter.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <article className="prose dark:prose-invert">
        <h1>{frontmatter.title}</h1>
        <small>{frontmatter.tagline}</small>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </article>
    </>
  );
};
export default PostPage;
