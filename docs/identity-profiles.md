# Identity profile layouts

The six profile cards follow the approved photo-led mobile reference: portrait,
organization name/logo, name and role, brief introduction, Add to Contacts, and
large contact rows. The public site's navigation is omitted so recipients see
only the identity they were given. The recent portrait is shared across drafts;
each profile can configure a different photo.

## Preview and publication

All six profiles currently have `public: false`. They are available in local
`npm run dev` at `/p/protagona`, `/p/council`, `/p/damnedcat`, `/p/cert`, `/p/jfdg`,
and `/p/jcaps`. Run `npm run build:profiles` only for local static review. That
artifact contains all drafts and must not be deployed. Normal `npm run build`
excludes unpublished routes. `noindex` is an additional indexing hint on previews,
not access control. Preview exports must not be hosted publicly.

Profiles are deliberately absent from public navigation, chooser, and sitemap.
Before approval, review each profile's role, biography, contacts, logo, and theme.
After changing `public` to true, a production rebuild makes its route public.
Visibility changes require rebuilding and deploying this static implementation;
this is not the future immediate-update backend. Previously downloaded or cached
public contact data cannot be recalled.

## Content and branding

Only approved public information belongs in `src/content/profiles.ts`; private
contact data must wait for an authenticated backend. The page's props contain only
its single profile. Empty email/phone/address/social fields produce no rows or
vCard fields. Existing approved website links are configured for DCS and JCAPS.
No personal email or social account is inherited across identities.

The Protagona logo is retained from the existing site. Jackson also uses its official city logo and website-derived theme. Other
organization logos and official brand colors have not been supplied. Neutral styling and organization names are
used rather than invented branding. Each profile supports its own `brand.color`,
`brand.foreground`, and `brand.background` tokens, photo, and logo. Check contrast
when configuring an approved theme. No borrowed logos or reference photos are used.
The CERT profile explicitly describes past Texas service. The JFDG biography and
contact fields are empty pending approved details.

## Downloads and QR codes

Add to Contacts downloads a vCard 3.0 containing only configured identity fields
and the permanent `https://johnweland.me/p/{slug}` URL. The generator escapes text,
uses CRLF, folds at 75 UTF-8 octets without splitting characters, and supports
FN, N, ORG, TITLE, EMAIL, TEL, URL, and ADR. Tests cover Unicode, delimiters,
line folding, and cross-profile isolation. Imports into Apple Contacts, Google
Contacts, and Outlook have not been manually validated yet.

The sharing panel displays and downloads an SVG QR generated locally at build
time, with a four-module quiet zone. It always encodes the production permanent
URL, even in preview; scanning it before deployment will not open the local
preview. Clipboard failure leaves the URL visible for manual copying. No scan
analytics or external QR-generation requests are made.

NFC `/card` routing, owner authentication, administration, uploads, live visibility
changes, and contact storage remain separate backend work.

## Protagona brand treatment

Verified on 2026-10-30 against https://www.protagona.com/ and its published CSS:
https://cdn.prod.website-files.com/65f0077b93a4c876387d328c/css/protagona.webflow.shared.acd2a8d4d.css

The site's tokens define charcoal #2B2B2B, sunburnt red #F66568, orange #F78C4E,
and washed blue #476B76. The profile uses charcoal surfaces, coral accents,
a restrained coral-to-orange separator, a dotted masthead, and pill-shaped
buttons adapted from the company site. A Protagona-specific template token scopes
these treatments to that identity, including the QR sharing panel. The website
link points to the verified company homepage; no company email, phone, address,
certifications, partner badges, or scheduling links are inferred for John.

The official horizontal logo was downloaded unchanged from:
https://cdn.prod.website-files.com/65f0077b93a4c876387d328c/65f026d5e63d2d02d879318b_logo.svg
Local copy: public/images/brands/protagona-logo.svg. Replaces the legacy square
wordmark for this profile only. No scripts or external assets are embedded.

The company site uses Faktum (Light, SemiBold, WideBold). Those commercial font
files have not been copied or hotlinked. The card uses a local Avenir/Segoe UI
fallback with heavier, wider name treatment. Exact typography awaits an approved
licensed webfont asset. The Jackson council profile now has its own verified civic theme. Remaining
organization profiles stay neutral pending their own brand review. All profiles remain unpublished drafts.

## Jackson City Council brand treatment

Verified on 2026-10-30 against the official City of Jackson, Minnesota website:
https://www.cityofjacksonmn.com/

Official unmodified logo:
https://www.cityofjacksonmn.com/repository/designs/templates/GO_jackson-mn_2023_resp/images/title.png
Local asset: public/images/brands/jackson-mn-logo.png. It is displayed intact on
a white masthead in both themes, preserving the green tree and dark script mark.
This is the municipal logo, not a Chamber of Commerce or county logo.

Source CSS:
https://www.cityofjacksonmn.com/repository/designs/templates/GO_jackson-mn_2023_resp/GO_jackson-mn_2023_resp.css
The website uses #007238 green, #0E386F navy, Cabin body typography, and EB Garamond
headings. The council card adapts those into a formal serif name, green actions,
navy secondary controls, a straight green photo separator, and a light civic
masthead. Dark-mode surfaces are an accessible adaptation rather than a claim
that the city publishes an official dark palette.

Fonts are self-hosted Latin WOFF2 subsets from @fontsource/cabin 5.3.0 and
@fontsource/eb-garamond 5.3.0 under public/fonts/jackson, alongside OFL licenses.
The CSS loads them only where these font families are used; no third-party font
requests are made. Other identity layouts and the public site are unaffected.

Ward 2 is verified from https://www.cityofjacksonmn.com/mayor-council.
The website action goes to the official homepage, with separate Mayor & Council
and Agendas & Minutes resource links. These are profile-specific public resources;
no City Hall phone, personal email, street address, or meeting schedule has been
copied into John's contact record. Existing vCard and QR behavior is retained.
The profile remains an unpublished draft and is excluded from normal exports.

## Mobile browser chrome and safe areas

Each branded profile configures `brand.browserColor` to match its masthead:
Protagona #2B2B2B; Jackson #FFFFFF, including in dark mode because the city logo
masthead stays white. The profile Head supplies one `theme-color` and a
`viewport-fit=cover` viewport tag. Scoped `html:has(...)` / `body:has(...)`
backgrounds match the masthead for Safari's page-color sampling and overscroll,
and automatically stop applying on navigation away from a branded profile.

Safe-area environment insets protect masthead content, contact actions at the
bottom, side gutters on narrow displays, and the share dialog/close button.
Jackson's green header rule sits below the white masthead, leaving the topmost
painted region white. Safari's toolbar tint and status icon appearance remain
controlled by the browser and user settings. Verify the result on a real iPhone;
a desktop viewport cannot validate native Safari chrome.

## Damned Cat Studio brand treatment

Verified on 2026-10-30 against https://damnedcat.studio/ and its stylesheet:
https://damnedcat.studio/_next/static/css/de18b02f09c7f486.css

The live studio website uses a circular cat-photo mark, amber accents
(#D97706 / #B45309), and Tailwind slate-gray surfaces (#111827 / #1F2937),
with system sans-serif typography. The exact mark was downloaded unchanged from:
https://damnedcat.studio/images/damnedcatstudio.jpg
Local asset: public/images/brands/damnedcat-studio.jpg (96px original, displayed
smaller rather than upscaled). No replacement cat icon or invented logo is used.

The card adapts that identity into a slate masthead, amber photo divider, relaxed
rounded actions, and a small co-founder role label. Light-mode button uses the
darker source amber with white text; dark mode uses the site's amber-500 with
slate text for contrast. QR sharing and the browser canvas are scoped to the
studio theme; the masthead/browser color stays #111827 in both appearances.

The website and studio GitHub organization are linked from the studio's own site.
No private email, phone, scheduling links, or personal socials are inferred. The
existing user-approved Co-founder title is retained; no current CEO claim is added
from the older company page. DCS remains an unpublished draft.

## Owner-configured contact details

The council email and phone and Protagona's john.weland@protagona.com address were
provided directly by John. Each is included only on that identity's card/vCard;
none is inherited by another profile. Tests assert both presence on the intended
card and absence from other identities.

DCS biography copy is also shown on the main About page. Its `includeBioInVCard`
flag explicitly includes that biography in the vCard NOTE field; other identities
do not opt in automatically. Notes use the same escaping and UTF-8 folding.
