import type { IdentityProfile } from '../content/profiles'
const escapeText = (value: string) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/\r\n|\r|\n/g, '\\n')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
// vCard 3.0 supports the broadest range of existing address-book importers.
// Fold at 75 UTF-8 octets, never splitting a Unicode code point.
export function foldLine(value: string) {
  const encoder = new TextEncoder()
  let output = '',
    column = 0
  for (const character of value) {
    const bytes = encoder.encode(character).length
    if (column + bytes > 75) {
      output += '\r\n '
      column = 1
    }
    output += character
    column += bytes
  }
  return output
}
export function profileUrl(profile: Pick<IdentityProfile, 'slug'>) {
  if (!/^[a-z0-9-]+$/.test(profile.slug))
    throw new Error('Invalid profile slug')
  return `https://johnweland.me/p/${profile.slug}`
}
export function generateVCard(profile: IdentityProfile) {
  const fields = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeText(profile.displayName)}`,
    `N:${escapeText(profile.familyName)};${escapeText(profile.givenName)};;;`,
    `ORG:${escapeText(profile.organization)}`,
    `TITLE:${escapeText(profile.title)}`,
  ]
  if (profile.email)
    fields.push(`EMAIL;TYPE=INTERNET,WORK:${escapeText(profile.email)}`)
  if (profile.phone) fields.push(`TEL;TYPE=WORK:${escapeText(profile.phone)}`)
  fields.push(`URL:${profileUrl(profile)}`)
  if (profile.website) fields.push(`URL:${escapeText(profile.website)}`)
  if (profile.address) {
    const a = profile.address
    fields.push(
      `ADR;TYPE=WORK:;;${[a.street, a.city, a.region, a.postalCode, a.country]
        .map(escapeText)
        .join(';')}`
    )
  }
  if (profile.includeBioInVCard && profile.bio)
    fields.push(`NOTE:${escapeText(profile.bio)}`)
  fields.push('END:VCARD')
  return fields.map(foldLine).join('\r\n') + '\r\n'
}
