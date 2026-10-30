// Only information explicitly intended for a public contact card belongs here.
// Drafts render in development or an explicit PROFILE_PREVIEW build only.
export type ProfileLink = { label: string; url: string }
export type IdentityProfile = {
  slug: string
  public: boolean
  displayName: string
  givenName: string
  familyName: string
  organization: string
  title: string
  bio: string
  includeBioInVCard?: boolean
  photo: string
  logo?: string
  email?: string
  phone?: string
  website?: string
  socials?: ProfileLink[]
  links?: ProfileLink[]
  address?: {
    street: string
    city: string
    region: string
    postalCode: string
    country: string
  }
  // Populate only after organization brand review; neutral fallback is deliberate.
  brand?: {
    color: string
    foreground: string
    background: string
    theme?: 'protagona' | 'jackson' | 'damnedcat'
    browserColor?: string
  }
}
const person = {
  public: false,
  displayName: 'John Weland',
  givenName: 'John',
  familyName: 'Weland',
  photo: '/images/john-weland.webp',
}
export const profiles: IdentityProfile[] = [
  {
    ...person,
    public: true,
    slug: 'protagona',
    organization: 'Protagona',
    title: 'Solutions Architect',
    email: 'john.weland@protagona.com',
    logo: '/images/brands/protagona-logo.svg',
    website: 'https://www.protagona.com/',
    brand: {
      color: '#f66568',
      foreground: '#2b2b2b',
      background: '#2b2b2b',
      theme: 'protagona',
      browserColor: '#2b2b2b',
    },
    bio: 'I work in cloud architecture and software engineering, with a focus on AWS, cloud migrations, and infrastructure as code.',
  },
  {
    ...person,
    public: true,
    slug: 'council',
    organization: 'Jackson City Council',
    title: 'City Council Member · Ward 2',
    email: 'jweland@cityofjacksonmn.com',
    phone: '+1 507-841-5822',
    logo: '/images/brands/jackson-mn-logo.png',
    website: 'https://www.cityofjacksonmn.com/',
    brand: {
      color: '#007238',
      foreground: '#ffffff',
      background: '#0e386f',
      theme: 'jackson',
      browserColor: '#ffffff',
    },
    links: [
      {
        label: 'Mayor & Council',
        url: 'https://www.cityofjacksonmn.com/mayor-council',
      },
      {
        label: 'Agendas & Minutes',
        url: 'https://www.cityofjacksonmn.com/agendas-minutes',
      },
    ],
    bio: 'I serve as an elected member of the Jackson City Council. Alongside council responsibilities, I work with staff on city IT infrastructure and security.',
  },
  {
    ...person,
    public: true,
    slug: 'damnedcat',
    organization: 'Damned Cat Studio',
    email: 'jweland@damnedcat.studio',
    title: 'Co-founder',
    logo: '/images/brands/damnedcat-studio.jpg',
    brand: {
      color: '#d97706',
      foreground: '#111827',
      background: '#111827',
      theme: 'damnedcat',
      browserColor: '#111827',
    },
    links: [
      { label: 'Studio on GitHub', url: 'https://github.com/DamnedCatStudio' },
    ],
    bio: 'I’m a co-founder of Damned Cat Studio, bringing a software engineer’s perspective to independent game development.',
    includeBioInVCard: true,
    website: 'https://damnedcat.studio',
  },
  {
    ...person,
    slug: 'cert',
    organization: 'CERT / SAR',
    title: 'Emergency preparedness',
    bio: 'I previously volunteered and taught with New Braunfels CERT and was a founding member of Texas Hill Country Search and Rescue. I bring that experience to my life in Minnesota.',
  },
  {
    ...person,
    slug: 'jfdg',
    organization: 'Jackson Firearm Development Group',
    title: 'Business',
    bio: '',
  },
  {
    ...person,
    slug: 'jcaps',
    organization: 'Jackson County Animal Protection Society',
    title: 'President',
    bio: 'I have served as president since JCAPS was founded in 2020 to address the need for local animal control and rescue services.',
    website: 'https://jcapsmn.org',
  },
]
export function canRenderProfile(profile: IdentityProfile) {
  return (
    profile.public ||
    process.env.NODE_ENV === 'development' ||
    process.env.PROFILE_PREVIEW === 'true'
  )
}
