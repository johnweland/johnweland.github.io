import Head from 'next/head'
import Image from 'next/image'
import { useState, type CSSProperties } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import {
  Download,
  Mail,
  Phone,
  Globe,
  Link2,
  QrCode,
  Copy,
  Check,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import type { IdentityProfile } from '@/content/profiles'
import { profileUrl } from '@/lib/vcard'

type Props = { profile: IdentityProfile; vcard: string; qr: string }
export default function IdentityPage({ profile, vcard, qr }: Props) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const url = profileUrl(profile)
  const theme = profile.brand
    ? ({
        '--identity-brand': profile.brand.color,
        '--identity-on-brand': profile.brand.foreground,
        '--identity-brand-surface': profile.brand.background,
      } as CSSProperties)
    : undefined
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setCopyError(false)
    } catch {
      setCopyError(true)
    }
  }
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          key="viewport"
        />
        {profile.brand?.browserColor && (
          <meta
            name="theme-color"
            content={profile.brand.browserColor}
            key="theme-color"
          />
        )}
        <title>
          {profile.displayName} · {profile.organization}
        </title>
        <meta
          name="description"
          content={
            profile.bio || `${profile.displayName} — ${profile.organization}`
          }
        />
        <link rel="canonical" href={url} />
        {!profile.public && <meta name="robots" content="noindex,nofollow" />}
        <meta
          property="og:title"
          content={`${profile.displayName} · ${profile.organization}`}
        />
        <meta property="og:description" content={profile.bio} />
        <meta
          property="og:image"
          content={`https://johnweland.me${profile.photo}`}
        />
        <meta property="og:url" content={url} />
      </Head>
      <div
        className="identity-stage"
        data-identity-theme={profile.brand?.theme || 'neutral'}
        style={theme}
      >
        <article
          className="identity-card"
          aria-label={`${profile.organization} contact card`}
        >
          {profile.brand?.theme === 'protagona' && profile.logo && (
            <div className="protagona-masthead">
              <Image
                src={profile.logo}
                alt="Protagona"
                width={200}
                height={29}
                priority
              />
            </div>
          )}
          {profile.brand?.theme === 'jackson' && profile.logo && (
            <div className="jackson-masthead">
              <Image
                src={profile.logo}
                alt="City of Jackson, Minnesota"
                width={177}
                height={149}
                priority
              />
              <div>
                <span>City of</span>
                <strong>Jackson</strong>
                <span>Minnesota</span>
              </div>
            </div>
          )}
          {profile.brand?.theme === 'damnedcat' && profile.logo && (
            <div className="damnedcat-masthead">
              <span className="damnedcat-mark">
                <Image
                  src={profile.logo}
                  alt="Damned Cat Studio cat mark"
                  width={96}
                  height={96}
                  priority
                />
              </span>
              <div>
                <strong>
                  Damned Cat
                  <br />
                  Studio
                </strong>
                <span>Independent game development</span>
              </div>
            </div>
          )}
          <div className="identity-portrait">
            <Image
              src={profile.photo}
              alt={profile.displayName}
              width={900}
              height={1200}
              priority
              sizes="(max-width: 500px) 100vw, 460px"
            />
            {!profile.brand?.theme && (
              <span className="identity-context">{profile.organization}</span>
            )}
          </div>
          <div className="identity-band" aria-hidden="true" />
          <div className="identity-body">
            <div className="identity-org" hidden={!!profile.brand?.theme}>
              {profile.logo && (
                <span className="identity-logo">
                  <Image src={profile.logo} alt="" width={48} height={48} />
                </span>
              )}
              <span>{profile.organization}</span>
            </div>
            <header className="identity-name">
              <h1>{profile.displayName}</h1>
              <p>{profile.title}</p>
            </header>
            {profile.bio && <p className="identity-bio">{profile.bio}</p>}
            <Button asChild className="identity-save">
              <a
                href={`data:text/vcard;charset=utf-8,${encodeURIComponent(
                  vcard
                )}`}
                download={`john-weland-${profile.slug}.vcf`}
              >
                <Download aria-hidden="true" /> Add to Contacts
              </a>
            </Button>
            <div className="identity-actions">
              {profile.email && (
                <a href={`mailto:${profile.email}`}>
                  <span className="identity-icon">
                    <Mail aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Email</strong>
                    <small>{profile.email}</small>
                  </span>
                </a>
              )}
              {profile.phone && (
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
                  <span className="identity-icon">
                    <Phone aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Call</strong>
                    <small>{profile.phone}</small>
                  </span>
                </a>
              )}
              {profile.website && (
                <a href={profile.website}>
                  <span className="identity-icon">
                    <Globe aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Visit the website</strong>
                    <small>{new URL(profile.website).hostname}</small>
                  </span>
                </a>
              )}
              {[...(profile.socials ?? []), ...(profile.links ?? [])].map(
                (link) => (
                  <a href={link.url} key={link.url}>
                    <span className="identity-icon">
                      <Link2 aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{link.label}</strong>
                    </span>
                  </a>
                )
              )}
              {profile.address && (
                <div className="identity-address">
                  <MapPin aria-hidden="true" />
                  <address>
                    {Object.values(profile.address).filter(Boolean).join(', ')}
                  </address>
                </div>
              )}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="identity-share">
                  <QrCode aria-hidden="true" /> Share this profile
                </Button>
              </SheetTrigger>
              <SheetContent
                className={`profile-share-sheet ${
                  profile.brand?.theme
                    ? `${profile.brand.theme}-share-sheet`
                    : ''
                }`}
              >
                <SheetTitle className="mt-12 text-2xl font-medium">
                  Share this profile
                </SheetTitle>
                <SheetDescription className="mt-3 text-sm text-muted-foreground">
                  {profile.displayName} · {profile.organization}
                </SheetDescription>
                <div className="profile-qr">
                  <Image
                    src={qr}
                    alt={`QR code for ${url}`}
                    width={256}
                    height={256}
                    unoptimized
                  />
                </div>
                <p className="break-all text-sm text-muted-foreground">{url}</p>
                <Button className="mt-6 w-full" onClick={copyLink}>
                  {copied ? (
                    <Check aria-hidden="true" />
                  ) : (
                    <Copy aria-hidden="true" />
                  )}
                  {copied ? 'Link copied' : 'Copy profile link'}
                </Button>
                <p role="status" className="mt-3 text-sm">
                  {copyError
                    ? 'Select and copy the profile URL above.'
                    : copied
                    ? 'Ready to paste.'
                    : ''}
                </p>
                <Button asChild variant="outline" className="mt-3 w-full">
                  <a href={qr} download={`john-weland-${profile.slug}-qr.svg`}>
                    Download QR code
                  </a>
                </Button>
              </SheetContent>
            </Sheet>
            <footer className="identity-footer">johnweland.me</footer>
          </div>
        </article>
      </div>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { profiles, canRenderProfile } = await import('@/content/profiles')
  return {
    paths: profiles
      .filter(canRenderProfile)
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { profiles, canRenderProfile } = await import('@/content/profiles')
  const profile = profiles.find((p) => p.slug === params?.slug)
  if (!profile || !canRenderProfile(profile)) return { notFound: true }
  const { generateVCard } = await import('@/lib/vcard')
  const QRCode = await import('qrcode')
  const svg = await QRCode.toString(profileUrl(profile), {
    type: 'svg',
    margin: 4,
    errorCorrectionLevel: 'M',
    width: 256,
  })
  return {
    props: {
      profile,
      vcard: generateVCard(profile),
      qr: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`,
    },
  }
}
