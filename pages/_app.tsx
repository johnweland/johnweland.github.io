import "styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "components/layout";

function Site({ Component, pageProps }: AppProps) {
  // @ts-ignore
  if (Component.layoutOverride) {
    return <Component {...pageProps} />;
  }
  return (
    <>
      <Layout navigation={undefined} title={undefined}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default Site;
