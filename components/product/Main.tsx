import siteMetadata from 'data/siteMetadata'
import ContactUs from 'components/ContactUs'
import Image, { StaticImageData } from 'next/image'

// Real Tonative photos
import HeroCommunityWork from '@/data/images/hero_community_work.png'
import HeroGroupSeated from '@/data/images/hero_group_seated.png'

type Product = {
  name: string
  tagline: string
  description: string
  features: string[]
  cta: string
  href: string
  image: string | StaticImageData
  badge?: string
  comingSoon?: boolean
  variant: 'primary' | 'accent'
}

const products: Product[] = [
  {
    name: 'TonalKeys',
    tagline: 'African Language Keyboard',
    description:
      'A Chrome extension that brings African language typing directly into your browser. Write in Yoruba, Igbo, Hausa, Twi, Swahiliand more with correct tonal diacritics, and no copy-pasting from external tools required.',
    features: [
      'Tonal diacritic support for African languages',
      'Works in Gmail, Google Docs, social media, and more',
      'Lightweight Chrome extension - no setup friction',
      'Supports Yoruba, Igbo, Hausa, Twi, Wolof, Swahili and growing',
    ],
    cta: 'Install on Chrome',
    href: siteMetadata.tonalkeysUrl,
    image: '/static/images/products/product_tonalkeys.png',
    variant: 'accent',
  },
  {
    name: 'Label Studio',
    tagline: 'Data Annotation & Validation Platform',
    description:
      "Tonative's annotation and validation platform for African language datasets. Teams use it to label, review, and quality-check text, audio, and image data. Purpose-built for African language AI workflows.",
    features: [
      'Multi-modal annotation: text, audio, and image',
      'Collaborative review and quality assurance workflows',
      'Built for African language curators and linguists',
      "Integrated with Tonative's data pipeline",
    ],
    cta: 'Open Platform',
    href: siteMetadata.labelStudioUrl,
    image: HeroCommunityWork,
    variant: 'primary',
  },
  {
    name: 'Volang',
    tagline: 'Speech Translation App',
    description:
      'An AI-powered real-time speech translation app built for cross-lingual communication in African contexts. Volang handles over 100 languages with cultural nuance, making face-to-face and field conversations seamless.',
    features: [
      'Real-time speech and text translation',
      '100+ languages including a wide range of African languages',
      'Culturally aware and adapts tone and context',
      'Enterprise-grade security',
    ],
    cta: 'Explore Volang',
    href: siteMetadata.volangUrl,
    image: HeroGroupSeated,
    variant: 'accent',
  },
  {
    name: 'MTStudio',
    tagline: 'Machine Translation Studio',
    description:
      'A machine translation studio purpose-built for African languages. MTStudio enables researchers, developers, and language teams to train, fine-tune, and evaluate translation models at scale.',
    features: [
      'African-language-first MT model training',
      'Fine-tuning and evaluation tools',
      'Built for researchers and language technology teams',
      'Integrates with Tonative datasets',
    ],
    cta: 'Coming Soon',
    href: siteMetadata.mtStudioUrl,
    image: '/static/images/products/product_mtstudio.png',
    badge: 'Coming Soon',
    comingSoon: true,
    variant: 'primary',
  },
]

const checkIconPath =
  'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'

function CheckIcon({ variant }: { variant: 'primary' | 'accent' }) {
  return (
    <svg
      className={`mt-0.5 mr-2 h-5 w-5 flex-shrink-0 ${
        variant === 'accent'
          ? 'text-accent-500 dark:text-accent-400'
          : 'text-primary-500 dark:text-primary-400'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path fillRule="evenodd" d={checkIconPath} clipRule="evenodd" />
    </svg>
  )
}

function ProductImage({ image, name }: { image: string | StaticImageData; name: string }) {
  const isStaticImport = typeof image === 'object'
  return (
    <div className="relative h-48 w-full overflow-hidden">
      {isStaticImport ? (
        <Image
          src={image}
          alt={`${name} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
          placeholder="blur"
        />
      ) : (
        <img
          src={image as string}
          alt={`${name} screenshot`}
          width={600}
          height={192}
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  )
}

export default function ProductsMain() {
  return (
    <main className="w-full bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4 py-16">
        <div className="flex w-full min-w-72 flex-col gap-3 text-center">
          <h1 className="mb-3 text-4xl leading-tight font-black tracking-[-0.033em] text-gray-900 md:text-5xl dark:text-white">
            Our Products
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-normal font-normal text-gray-500 dark:text-gray-400">
            Tools built to make African languages a first-class part of the digital world.
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className={`flex flex-col overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800 ${
                product.comingSoon ? 'opacity-80' : ''
              }`}
            >
              {/* Card image */}
              <div className="relative">
                <ProductImage image={product.image} name={product.name} />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold text-white ${
                        product.variant === 'accent' ? 'bg-accent-500' : 'bg-primary-500'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-grow flex-col p-6">
                <p
                  className={`mb-1 text-xs font-semibold tracking-widest uppercase ${
                    product.variant === 'accent'
                      ? 'text-accent-500 dark:text-accent-400'
                      : 'text-primary-500 dark:text-primary-400'
                  }`}
                >
                  {product.tagline}
                </p>
                <h3 className="mb-2 text-xl leading-tight font-bold tracking-[-0.015em] dark:text-white">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm leading-normal font-normal text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>

                <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon variant={product.variant} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={product.href}
                    target={product.comingSoon ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-disabled={product.comingSoon}
                    className={`flex h-12 w-full items-center justify-center rounded-lg px-5 text-sm leading-normal font-bold text-white transition-colors ${
                      product.comingSoon
                        ? 'cursor-not-allowed bg-gray-400 dark:bg-gray-600'
                        : product.variant === 'accent'
                          ? 'bg-accent-500 hover:bg-accent-600'
                          : 'bg-primary-500 hover:bg-primary-600'
                    }`}
                  >
                    <span className="truncate">{product.cta}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <ContactUs />
    </main>
  )
}
