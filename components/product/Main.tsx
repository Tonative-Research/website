'use client'
import { useState } from 'react'
import ContactUs from 'components/ContactUs'
import siteMetadata from 'data/siteMetadata'

export default function ProductMain() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        'Tonative helped our entire organisation communicate better with local partners. You see, the clarity it brought to our translation workflow saved us real time.',
      name: 'Chinedu Obiefuna',
      title: 'Programs Lead, AccessHub Africa',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
    {
      quote:
        'I work with rural educators, and this tool closed the language gap for us. It made training sessions smoother. It made our messages clearer.',
      name: 'Halima Musa',
      title: 'Education Coordinator, Kano Literacy Project',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100',
    },
    {
      quote:
        'We create health content for women in underserved areas. Volang helped us produce messages in three languages without losing meaning. That changed everything.',
      name: 'Adeola Ogunleye',
      title: 'Founder, SheHealth Collective',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100',
    },
    {
      quote:
        'Our volunteers used to struggle with multilingual outreach. Now the communication is smooth, and our field reports are far more accurate.',
      name: 'Ibrahim Danladi',
      title: 'Field Coordinator, Kaduna Civic Lab',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    },
    {
      quote:
        'What impressed me was the respect for tone and cultural context. It feels like the tool actually understands how we speak, not just what we type.',
      name: 'Ngozi Nwankwo',
      title: 'Digital Strategist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    },
    {
      quote:
        'As a young developer, I use Tonative to build language-friendly apps. It gave me an edge during hackathons and client demos. It just works.',
      name: 'Tunde Fatoba',
      title: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100',
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 dark:bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=1200')",
          }}
        />
        <div className="relative px-4 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl leading-tight font-black tracking-[-0.033em] text-gray-900 md:text-6xl dark:text-white">
              Real-Time Translation for a Connected World
            </h1>
            <p className="mt-4 text-lg leading-normal font-normal text-gray-700 md:text-xl dark:text-gray-300">
              Break down language barriers, the AI-powered translation app from Tonative.
            </p>
            <a
              className="bg-accent-500 hover:bg-accent-600 mt-8 inline-flex h-12 min-w-[84px] transform cursor-pointer items-center justify-center overflow-hidden rounded-lg px-8 text-base leading-normal font-bold tracking-[0.015em] text-white shadow-md transition-all hover:scale-105"
              href={siteMetadata.volangUrl}
            >
              <span className="truncate">Explore Volang</span>
            </a>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 py-20 md:py-28 dark:bg-gray-800" id="features">
        <div className="mx-auto max-w-6xl px-4 lg:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-[32px] leading-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                  Key Features
                </h2>
                <p className="max-w-[720px] text-base leading-normal font-normal text-gray-700 dark:text-gray-300">
                  Volang offers a suite of powerful features designed to make cross-lingual
                  communication seamless and effective.
                </p>
              </div>
              <a
                className="bg-primary-700 hover:bg-primary-800 flex h-12 w-fit min-w-[84px] cursor-pointer items-center justify-center self-start overflow-hidden rounded-lg px-6 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors md:self-end"
                href={siteMetadata.volangUrl}
              >
                <span className="truncate">Learn More</span>
              </a>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  ),
                  title: 'Instant Translation',
                  description: 'Translate text and speech in real-time with our advanced AI.',
                },
                {
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                  title: '100+ Languages Supported',
                  description:
                    'Communicate in over 100 languages, including a wide range of African languages.',
                },
                {
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  title: 'Cultural Nuances',
                  description:
                    'Our technology understands and adapts to cultural and contextual nuances.',
                },
                {
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: 'Enterprise-Grade Security',
                  description: 'Your data is protected with the highest standards of security.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                >
                  <div className="dark:text-accent-400 text-primary-700">{feature.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-normal font-normal text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Language Coverage Section */}
      <section className="bg-white py-20 md:py-28 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-10">
          <h2 className="text-[28px] leading-tight font-bold tracking-[-0.015em] text-gray-900 md:text-[32px] dark:text-white">
            Extensive Language Coverage
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-normal font-normal text-gray-700 dark:text-gray-300">
            Explore the vast range of languages Volang supports. Our interactive map allows you to
            discover our coverage, with a special focus on preserving and promoting African
            languages.
          </p>
          <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 shadow-lg dark:border-gray-700">
            <img
              alt="World map showing language coverage"
              className="h-auto w-full"
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 md:py-28 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 lg:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <div className="relative">
            <div className="rounded-xl bg-white p-8 shadow-md dark:bg-gray-900">
              <p className="text-lg text-gray-700 italic dark:text-gray-300">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div
                  className="aspect-square h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${testimonials[currentTestimonial].image}')` }}
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentTestimonial === index
                      ? 'dark:bg-accent-400 bg-primary-700 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactUs
        heading="Want to Experience Seamless Communication"
        email={siteMetadata.volangEmail}
      />
    </main>
  )
}
