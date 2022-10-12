import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="antialiased [font-feature-settings:'ss01'] h-full scroll-smooth"
      lang="en"
    >
      <Head></Head>
      <body className="h-full bg-neutral-900 relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
