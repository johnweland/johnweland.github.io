import test from 'node:test'
import assert from 'node:assert/strict'
import { generateVCard, foldLine } from '../src/lib/vcard.ts'
import { profiles, canRenderProfile } from '../src/content/profiles.ts'

test('vCard escapes field delimiters and folds UTF-8 without corrupting characters', () => {
  const p = {
    slug: 'example',
    displayName: 'Zoë, 李; \\ Example',
    givenName: 'Zoë',
    familyName: '李',
    organization: 'Line one\r\nLine two',
    title: 'Architect '.repeat(25),
    photo: '/photo',
    public: false,
    email: 'zoe@example.com',
    phone: '+1 555 0100',
    address: {
      street: '12; Main, Street',
      city: 'Test',
      region: 'MN',
      postalCode: '12345',
      country: 'US',
    },
  }
  const card = generateVCard(p)
  assert.ok(card.endsWith('\r\n'))
  assert.equal(card.replace(/\r\n/g, '').includes('\n'), false)
  for (const line of card.split('\r\n'))
    assert.ok(Buffer.byteLength(line, 'utf8') <= 75)
  const unfolded = card.replace(/\r\n /g, '')
  assert.ok(unfolded.includes('FN:Zoë\\, 李\\; \\\\ Example\r\n'))
  assert.ok(unfolded.includes('ORG:Line one\\nLine two\r\n'))
  assert.ok(unfolded.includes('URL:https://johnweland.me/p/example\r\n'))
  assert.ok(
    unfolded.includes('ADR;TYPE=WORK:;;12\\; Main\\, Street;Test;MN;12345;US')
  )
  assert.equal(
    foldLine('李'.repeat(100)).replace(/\r\n /g, ''),
    '李'.repeat(100)
  )
})
test('each identity exports only its own configured details', () => {
  for (const p of profiles) {
    const card = generateVCard(p).replace(/\r\n /g, '')
    assert.ok(card.includes(`URL:https://johnweland.me/p/${p.slug}\r\n`))
    assert.ok(card.includes(`ORG:${p.organization}\r\n`))
    assert.equal(card.includes('EMAIL;'), Boolean(p.email))
    assert.equal(card.includes('TEL;'), Boolean(p.phone))
    if (p.email)
      assert.ok(card.includes(`EMAIL;TYPE=INTERNET,WORK:${p.email}\r\n`))
    if (p.phone) assert.ok(card.includes(`TEL;TYPE=WORK:${p.phone}\r\n`))
    for (const other of profiles.filter((o) => o.slug !== p.slug)) {
      assert.ok(!card.includes(`/p/${other.slug}\r\n`))
      if (other.email && other.email !== p.email)
        assert.ok(!card.includes(other.email))
      if (other.phone && other.phone !== p.phone)
        assert.ok(!card.includes(other.phone))
    }
  }
})
test('all six drafts are excluded from production exports by default', () => {
  const oldNode = process.env.NODE_ENV,
    oldPreview = process.env.PROFILE_PREVIEW
  try {
    process.env.NODE_ENV = 'production'
    delete process.env.PROFILE_PREVIEW
    assert.equal(profiles.length, 6)
    assert.equal(profiles.filter(canRenderProfile).length, 0)
    process.env.PROFILE_PREVIEW = 'true'
    assert.equal(profiles.filter(canRenderProfile).length, 6)
  } finally {
    if (oldNode === undefined) delete process.env.NODE_ENV
    else process.env.NODE_ENV = oldNode
    if (oldPreview === undefined) delete process.env.PROFILE_PREVIEW
    else process.env.PROFILE_PREVIEW = oldPreview
  }
})

test('biography notes are included only when explicitly enabled', () => {
  const dcs = profiles.find((p) => p.slug === 'damnedcat')
  const unfold = (value) => value.replace(/\r\n /g, '')
  const card = unfold(generateVCard(dcs))
  assert.ok(
    card.includes(
      'NOTE:I’m a co-founder of Damned Cat Studio\\, bringing a software engineer’s perspective to independent game development.\r\n'
    )
  )
  assert.ok(
    !unfold(generateVCard({ ...dcs, includeBioInVCard: false })).includes(
      'NOTE:'
    )
  )
  for (const profile of profiles.filter((p) => p.slug !== 'damnedcat')) {
    assert.ok(!unfold(generateVCard(profile)).includes(dcs.bio.split(',')[0]))
  }
})
