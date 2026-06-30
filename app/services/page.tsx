import { genPageMetadata } from 'app/seo'
import ContactUs from 'components/ContactUs'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'Services',
  description:
    'Tonative offers the Data Academy (a 6-week African language data curation program), Language Translators Training, and African language data translation services for AI model development.',
  keywords: [
    'African language services',
    'Tonative Data Academy',
    'language translators training Africa',
    'African language data translation',
    'AI training data Africa',
    'African language annotation services',
    'NLP data services Africa',
    'African language curation program',
  ],
})

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
    title: 'Custom Data Curation',
    description:
      'We build custom datasets to your specifications either in African languages or English grounded in African contexts. This covers training and alignment datasets, or evaluation benchmarks to improve AI model performance.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600',
    features: [
      'Translation & Parallel Text',
      'Reasoning & NLI',
      'Evaluation Benchmarks',
      'Agentic Workflow Data',
      'Speech & Transcription',
      'Image Descriptions',
      'Cultural Narratives',
    ],
    cta: 'Curate A Dataset',
    href: '/#contact-form',
    variant: 'primary',
  },
  {
    title: 'Data Validation & Evaluation',
    description:
      'We validate, review, and score existing datasets for linguistic accuracy, cultural authenticity, and domain correctness.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    features: [
      'Linguistic accuracy & cultural authenticity checks',
      'Multi-stage review pipeline',
      'Trained curators & linguistics-background language leads',
      'Quality assurance for production-ready data',
    ],
    cta: 'Learn More',
    href: '/#contact-form',
    variant: 'primary',
  },
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
    title: 'Expert Network',
    description:
      'Hire vetted, trained African language and domain specialists for your annotation, validation, translation, or evaluation projects.',
    image: 'https://images.unsplash.com/photo-1643000867361-cd545336249b?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Vetted African language & domain specialists',
      'Annotation, validation, translation & evaluation',
      'Trained through the Tonative Data Academy',
      'Supervised by technical & language leads',
    ],
    cta: 'Hire A Specialist',
    href: '/#contact-form',
    variant: 'accent',
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
              Data Services for African Context Intelligence
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
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
