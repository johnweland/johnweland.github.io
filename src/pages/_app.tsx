import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'

function Site({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout
        navigation={undefined}
        title={undefined}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Site
