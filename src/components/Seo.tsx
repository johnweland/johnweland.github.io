import Head from 'next/head'
import { site } from '@/content/site'
export function Seo({
  title,
  description = site.description,
  path = '/',
}: {
  title?: string
  description?: string
  path?: string
}) {
  const fullTitle = title
    ? `${title} — John Weland`
    : 'John Weland — Build useful things. Be useful to people.'
  const url = `${site.url}${path}`
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}
