# John Weland — Personal Website

Spotlight is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Runtime and build

Use Node.js 24 (`nvm use`) and `npm ci` to install the locked dependencies.
The site runs Next.js 16 with React 19 and retains the Pages Router, MDX,
and Tailwind CSS 3. Webpack is selected explicitly for the MDX plugin pipeline.

- `npm run dev` — local development.
- `npm run lint` — ESLint CLI (Next.js 16 removed `next lint`).
- `npm run typecheck` — TypeScript validation.
- `npm run build` — production build and static export into `out/`.

`next export` and `next start` are not used with static export. Serve `out/`
with a static file server when checking the production artifact.

GitHub Actions uses Node.js 24, checks the code, and publishes `out/` to
`gh-pages` on pushes to `main` or `master`. `public/CNAME` is included in the
export to preserve `johnweland.me`; keep it consistent with the root `CNAME`.
The rebuild architecture and hosting remain pending approval.

A compatible `postcss-selector-parser` override patches the legacy Tailwind 3
plugin dependency tree. Reevaluate this override when upgrading Tailwind.

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://johnweland.me
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation

## Public website

The redesigned public website uses the Independent visual direction and shadcn/ui
source components (Radix Button/Sheet foundations), with Lucide icons. The
`components.json` configuration retains Tailwind 3. Shared content and links are
editable in `src/content/site.ts`; page copy is in `src/pages`.

The public site is one homepage with `/#about`, `/#work`, and `/#community`
sections. Identity profiles remain separate. The owner retired
the old project pages, article, and RSS feed. Future writing may address concepts
and architecture. Community roles and public copy are editable in
`src/content/site.ts`, including the distinction between current Jackson service
and past preparedness roles in Texas. Theme selection is stored locally; no
analytics or third-party fonts are loaded. The homepage links directly to LinkedIn and GitHub through accessible logo links;
there is no separate Contact page. Review current work history before launch.

See `docs/architecture.md` and `AGENTS.md`. Identity layouts are now implemented as unpublished drafts; see
`docs/identity-profiles.md`. Verified organization branding, NFC configuration,
authentication, and administration remain future work. This
phase does not change DNS or publish the replacement.

## Identity profile previews

Run `npm run dev` and open `/p/protagona`, `/p/council`, `/p/damnedcat`,
`/p/cert`, `/p/jfdg`, or `/p/jcaps` locally. Each page uses its own profile data.
`npm run build:profiles` creates an explicitly **preview-only** static export with
all drafts. Do not deploy this preview artifact. `npm run build` excludes drafts.

Configure approved public details in `src/content/profiles.ts`. Never store private
contact information in this source file. Blank contact fields do not render.
Run `npm test` for vCard isolation, UTF-8 folding, escaping, and publication checks.
