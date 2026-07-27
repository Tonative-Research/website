export type NavLink = {
  href: string
  title: string
  subLinks?: {
    href: string
    title: string
    description: string
    external?: boolean
    comingSoon?: boolean
  }[]
}

const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/services', title: 'Services' },
  { href: '/dataset-tools', title: 'Datasets' },
  { href: '/about', title: 'About' },
  {
    href: '/product',
    title: 'Products',
    subLinks: [
      {
        href: 'https://chromewebstore.google.com/detail/tonalkeys-african-languag/hpancnlkbahagcopnopahadijkammphn',
        title: 'TonalKeys',
        description: 'African Language Keyboard',
        external: true,
      },
      {
        href: 'https://validation.tonative.org/user/login/',
        title: 'Label Studio',
        description: 'Data Annotation & Validation',
        external: true,
      },
      {
        href: 'https://www.volang.app/',
        title: 'Volang',
        description: 'Speech Translation App',
        external: true,
      },
      {
        href: 'https://mtstudio.tonative.org/',
        title: 'MTStudio',
        description: 'Machine Translation Studio',
        external: true,
        comingSoon: true,
      },
    ],
  },
  { href: '/community', title: 'Community' },
  // { href: '/research', title: 'Research' },
  { href: '/publications', title: 'Research' },
  { href: '/indaba-2026', title: 'Indaba 2026' },
]

export default headerNavLinks
