import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { profiles } from '../src/content/profiles.ts'

assert.notEqual(
  process.env.PROFILE_PREVIEW,
  'true',
  'Production build must not enable draft previews'
)
for (const profile of profiles) {
  const candidates = [
    `out/p/${profile.slug}.html`,
    `out/p/${profile.slug}/index.html`,
  ]
  const file = candidates.find(existsSync)
  if (!profile.public) {
    assert.ok(!file, `Draft profile leaked into export: ${profile.slug}`)
    continue
  }
  assert.ok(file, `Public profile missing from export: ${profile.slug}`)
  const html = readFileSync(file, 'utf8')
  assert.ok(
    html.includes(`https://johnweland.me/p/${profile.slug}`),
    `Incorrect canonical URL: ${profile.slug}`
  )
  for (const other of profiles.filter((p) => p.slug !== profile.slug)) {
    for (const field of ['email', 'phone']) {
      if (other[field] && other[field] !== profile[field]) {
        assert.ok(
          !html.includes(other[field]),
          `Other identity's ${field} in ${profile.slug}`
        )
      }
    }
  }
  console.log(`Verified public profile: /p/${profile.slug}`)
}
