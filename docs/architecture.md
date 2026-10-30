# Public website architecture

The approved visual direction is Independent: strong sans-serif typography,
neutral surfaces, subtle violet accents, and nearly square corners. The homepage
headline is “Build useful things. Be useful to people.” Identity profiles will
use each organization’s approved branding, independently of the personal site.

The public website retains Next.js Pages Router, static export, and GitHub Pages.
No DNS or hosting migration is needed for this phase. Next.js 16 uses webpack
explicitly for the MDX plugin pipeline. Tailwind 3 is retained; shadcn/ui source
components live under src/components/ui, using Radix primitives and Lucide.

The public site is one homepage: introduction and social links, portrait and
biography (/#about), professional work and experience (/#work), and community
roles (/#community). Desktop and mobile navigation use those three section links.
About, Work, Community, and Contact have no separate public routes. Identity
profiles remain separate and unpublished by default. The owner retired all old
project listings, the 2021 article, and RSS. Those routes and sitemap entries have
been removed; source history remains in Git. No redirects or replacement claims
are added. Future writing may cover concepts and architecture when authored.
Shared editorial data and community roles live in src/content/site.ts. The owner
provided community copy covering Jackson council/IT work, broadband and MRES
boards, JCAPS presidency since its founding in 2020, animal control committee
work, and a proposed joint rescue facility. New Braunfels CERT volunteer and
instructor service and Texas Hill Country Search and Rescue founding membership
are explicitly past Texas roles, not current Minnesota affiliations.

The identity backend remains a separate future decision. GitHub Pages plus an
AWS API avoids a hosting migration but requires build-time profile paths and a
client lookup for current card state. Amplify would add hosting cost and a domain
cutover, while permitting runtime routes. Neither option removes the need for
server authorization and private storage. No backend, smart-card routing, authentication, or administrative API is implemented yet.
The six static identity layouts are implemented as drafts; see docs/identity-profiles.md.

Publication requires reviewing the replacement first. Do not push to main/master
until ready: the existing workflow publishes those branches automatically.

## Content and identity direction (review in progress)

The old technical projects and article are removed, rather than archived publicly.
Community content is based on the owner's supplied description. Avoid blanket
security guarantees and unverified exclusivity or legal-registration claims.

Identity profiles should use a mobile-first, photo-led layout: approved portrait
or organization image, name, role, approved organization branding, and large
contact actions. Each profile has its own contact data and branding. The chooser
must reveal only selected public profiles; it is separate from the public site.
The reference shows layout direction, not permission to reuse third-party photos,
logos, video, or invented brand colors. Implementation remains a later phase.

Static identity drafts now use the approved recent portrait, source-configured
contact fields, UTF-8 vCard generation, and locally generated profile QR codes.
Normal production builds exclude unpublished profiles entirely.

The owner removed the Contact page and its navigation/CTA. Accessible LinkedIn
and GitHub logo links now live directly on the homepage. Organization identity
contact actions and vCards are unaffected.
