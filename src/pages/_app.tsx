import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '@/styles/tailwind.css'
export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname === '/p/[slug]')
    return (
      <main id="main-content">
        <Component {...pageProps} />
      </main>
    )
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
