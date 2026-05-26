import { genPageMetadata } from 'app/seo'
import ContactUs from 'components/ContactUs'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Services', description: '' })

type Service = {
  title: string
  description: string
  image: string
  badge?: string
  features: string[]
  cta: string
  href: string
  /** 'primary' uses primary-500/600, 'accent' uses accent-500/600 */
  variant: 'primary' | 'accent'
}

const services: Service[] = [
  {
    title: 'Tonative Data Academy',
    description:
      'A 6-week intensive program in African Language Data Curation for AI and NLP. Open to all backgrounds. No prior technical experience required.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
    badge: 'Now Enrolling',
    features: [
      '6 weeks of live online sessions',
      'Expert African linguist tutors',
      'Certificate of completion',
      'Contribute to open-source African AI datasets',
    ],
    cta: 'Join the Next Cohort',
    href: '/services/data-academy',
    variant: 'accent',
  },
  {
    title: 'Language Translators Training',
    description:
      'Master the art and science of translation. Our comprehensive program equips you with advanced skills, cultural expertise, and industry-recognized certification to thrive in the global language market.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600',
    features: [
      'Advanced training in specialized translation domains',
      'Proven techniques for higher accuracy and fluency',
      'Enhanced cultural competency',
      'Industry-recognized certification upon completion',
    ],
    cta: 'Learn More',
    href: '/#data-curator',
    variant: 'primary',
  },
  {
    title: 'African Language Data Translation for AI Models',
    description:
      'We provide high-quality, culturally-sensitive data translation services for African languages to train and improve AI models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    features: [
      'High-quality, accurate data sets',
      'Culturally nuanced translations',
      'Improved AI model performance',
      'Access to a wide range of African languages',
    ],
    cta: 'Learn More',
    href: '/#contact-form',
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

export default async function Page() {
  return (
    <>
      <main className="w-full bg-gray-50 dark:bg-gray-900">
        {/* Services Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4 py-16">
          <div className="flex w-full min-w-72 flex-col gap-3 text-center">
            <h1 className="mb-3 text-4xl leading-tight font-black tracking-[-0.033em] text-gray-900 md:text-5xl dark:text-white">
              Our Services
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-normal font-normal text-gray-500 dark:text-gray-400">
              Bridging cultures through expert language services, empowering communities with
              cutting-edge translation technology and culturally authentic AI solutions.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800"
              >
                {/* Card image */}
                <div
                  className="relative h-48 w-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${service.image}')` }}
                >
                  {service.badge && (
                    <div className="absolute top-4 left-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold text-white ${
                          service.variant === 'accent' ? 'bg-accent-500' : 'bg-primary-500'
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-2 text-xl leading-tight font-bold tracking-[-0.015em] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-normal font-normal text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon variant={service.variant} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link href={service.href}>
                      <button
                        className={`flex h-12 w-full items-center justify-center rounded-lg px-5 text-sm leading-normal font-bold text-white transition-colors ${
                          service.variant === 'accent'
                            ? 'bg-accent-500 hover:bg-accent-600'
                            : 'bg-primary-500 hover:bg-primary-600'
                        }`}
                      >
                        <span className="truncate">{service.cta}</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <ContactUs />
      </main>
    </>
  )
}
