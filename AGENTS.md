# Project conventions

- Next.js 16 Pages Router, TypeScript, Tailwind 3, static export to out/.
- Node 24; npm ci, npm run lint, npm run typecheck, npm run build.
- Use webpack for the MDX pipeline. No server actions, runtime API routes,
  middleware redirects, or other server-only behavior in the Pages artifact.
- Design: Independent, mostly monochrome, subtle violet, 2px corners.
  Refinement: lighter system typography, fewer slogan-style headings, no diagonal
  arrow motif or generic project artwork. Use the approved recent portrait at public/images/john-weland.webp on About; preserve its color and vertical framing. Preserve
  the headline “Build useful things. Be useful to people.”
- Use shadcn/ui source in src/components/ui; cn utility in src/lib/utils.ts.
  Prefer Lucide icons, semantic HTML, accessible Radix primitives, keyboard
  support, visible focus, reduced-motion support, and both color themes.
- Editable public data and community roles: src/content/site.ts. The owner
  explicitly retired the old projects, article, and RSS. Do not restore them.
  Future writing should focus on concepts and architecture.
- Never invent contact details, certifications, case studies, or brand assets.
  Organization identity pages must have their own approved brand treatment.
- Keep civic/nonprofit work distinct from commercial projects. Do not publish
  private identity data in static files, client bundles, feeds, or metadata.
- Keep CNAME and public/CNAME synchronized as johnweland.me. Preserve DNS.
- Changes stay local until review; main/master pushes trigger production deploy.
- Architecture and remaining scope: docs/architecture.md.

- User feedback: dark mode must look crisp, not muddy. Keep both hero lines
  bright and maintain strong secondary-text contrast. Copy should be plainspoken
  and personal; use photos only when they contribute to the content.

- Identity layouts: src/pages/p/[slug].tsx; profiles in src/content/profiles.ts.
  Drafts appear in development or PROFILE_PREVIEW=true builds only. Never publish
  preview builds. Normal production builds must exclude unpublished routes.
- Profile pages omit public-site navigation/footer and any other identity links.
  Keep email/phone/socials identity-specific; no personal contact fallback.
- vCard logic: src/lib/vcard.ts. Tests: npm test. QR generation runs at build time,
  without a third-party QR service. Brand colors/logos require verification.

- Protagona brand: verified source tokens/assets recorded in docs/identity-profiles.md.
  Use its scoped theme and official horizontal SVG; never apply this treatment
  to other identities. Faktum is not bundled; use the documented fallback until
  an approved licensed font asset is provided.

- Jackson council branding uses the official CITY logo (not the county or chamber),
  city website green/navy, and self-hosted Cabin / EB Garamond under OFL licenses.
  Sources and Ward 2 verification are documented in docs/identity-profiles.md.
  Its light logo masthead is preserved in dark mode. Do not infer John's contact
  details from City Hall's general phone/address.

- Damned Cat Studio branding uses its actual circular cat-photo mark, verified
  amber/slate website palette, and system sans-serif. Source details are in
  docs/identity-profiles.md. Do not invent a new logo or copy Protagona's motif.

- Public site has no Contact page or contact CTA. LinkedIn/GitHub logo links live
  on the homepage, with accessible names. Identity contact cards are separate.

- Professional work and experience live on the homepage at /#work. Do not restore
  the separate Work route. Main navigation uses /#about, /#work, and /#community.

- About and its approved portrait are integrated into the homepage at /#about.
  Do not restore /about. Community is integrated at /#community.

- Public site is one homepage. Community roles remain in src/content/site.ts and
  appear in the /#community section. Do not restore a separate /community route.
