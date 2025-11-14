import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Services', description: '' })

export default async function Page() {
  return (
    <>
      <main className="w-full bg-gray-50 dark:bg-gray-900">
        {/* Services Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4 py-16">
          <div className="flex w-full min-w-72 flex-col gap-3 text-center">
            <p className="text-4xl leading-tight font-black tracking-[-0.033em] dark:text-white">
              Our Services
            </p>
            <p className="mx-auto max-w-2xl text-base leading-normal font-normal text-gray-500 dark:text-gray-400">
              We offer specialized services to enhance language technology and empower communities
              through cultural authenticity and cutting-edge research.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Language Translators Training Card */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
              <div
                className="h-48 w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600')",
                }}
              />
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl leading-tight font-bold tracking-[-0.015em] dark:text-white">
                  Language Translators Training
                </h3>
                <p className="mb-4 text-sm leading-normal font-normal text-gray-500 dark:text-gray-400">
                  Our comprehensive training program is designed to equip language translators with
                  the skills and knowledge needed to excel in a competitive global market.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Professional development and upskilling
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Improved translation quality and accuracy
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Enhanced cultural competency
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Certification and industry recognition
                  </li>
                </ul>
                <div className="mt-auto">
                  <button className="bg-primary-500 hover:bg-primary-600 flex h-12 w-full items-center justify-center rounded-lg px-5 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors">
                    <span className="truncate">Learn More</span>
                  </button>
                </div>
              </div>
            </div>

            {/* African Language Data Translation Card */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
              <div
                className="h-48 w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600')",
                }}
              />
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl leading-tight font-bold tracking-[-0.015em] dark:text-white">
                  African Language Data Translation for AI Models
                </h3>
                <p className="mb-4 text-sm leading-normal font-normal text-gray-500 dark:text-gray-400">
                  We provide high-quality, culturally-sensitive data translation services for
                  African languages to train and improve AI models.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    High-quality, accurate data sets
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Culturally nuanced translations
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Improved AI model performance
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Access to a wide range of African languages
                  </li>
                </ul>
                <div className="mt-auto">
                  <button className="bg-primary-500 hover:bg-primary-600 flex h-12 w-full items-center justify-center rounded-lg px-5 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors">
                    <span className="truncate">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-4 py-16 text-center">
          <h2 className="text-2xl leading-tight font-bold tracking-[-0.015em] dark:text-white">
            Contact Us
          </h2>
          <p className="mt-2 text-base leading-normal font-normal text-gray-500 dark:text-gray-400">
            Have a question or want to get started? Reach out to our team.
          </p>
          <a
            className="text-primary-500 dark:text-primary-400 mt-4 inline-block text-lg font-medium hover:underline"
            href="mailto:services@tonative.org"
          >
            services@tonative.org
          </a>
        </div>
      </main>
    </>
  )
}
