import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        {/* <section className="relative bg-white py-20 md:py-32 dark:bg-gray-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=1200')",
            }}
          />
          <div className="relative mx-auto px-4 lg:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-primary-900 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Introducing Tonative
              </h1>
              <p className="mt-6 max-w-2xl text-base text-gray-700 sm:text-lg">
                Tonative bridges the gap between technology and language preservation for
                enterprises, fostering authentic communication and cultural understanding.
              </p>
              <a href={siteMetadata.volunteerForm} target="_blank">
                <button className="bg-accent-600 hover:bg-accent-700 mt-8 rounded px-8 py-3 text-sm font-medium text-white transition-colors">
                  Discover Tonative
                </button>
              </a>
            </div>
          </div>
        </section> */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=1200')",
          }}
        >
          <div className="bg-primary-100 absolute inset-0"></div>
          <div className="relative container mx-auto px-6 sm:px-8">
            <div className="flex min-h-[500px] flex-col items-center justify-center py-16 text-center">
              <h1 className="text-primary-900 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Speak your Language
              </h1>
              <p className="mt-6 max-w-2xl text-base text-gray-700 sm:text-lg">
                We train African data curators, create custom language datasets and build tools that
                foster Africa's inclusion in AI technology
              </p>
              <a href={siteMetadata.volangUrl} target="_blank">
                <button className="bg-accent-600 hover:bg-accent-700 mt-8 rounded px-8 py-3 text-sm font-medium text-white transition-colors">
                  Explore Datasets
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Problem/Solution Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Problem */}
              <div>
                <h2 className="text-primary-900 mb-6 text-3xl font-bold">The Challenge</h2>
                <div className="space-y-5">
                  {[
                    'Most AI models cannot understand African languages due to insufficient training data, leaving many communities behind.',
                    'Scaling AI across African languages is nearly impossible without access to trained native speakers and data quality validation tools.',
                    'Businesses lose customers and revenue in multilingual markets, yet most voice translation apps prioritize only major global languages.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div className="border-primary-600 border-l-4 pl-8">
                <h2 className="text-primary-900 mb-6 text-3xl font-bold">How we Help</h2>
                <div className="space-y-5">
                  {[
                    'Dataset Marketplace: Browse open-source datasets or purchase premium African language collections',
                    'Custom Dataset Curation: Commission bespoke African speech and text datasets for your specific AI training or evaluation needs.',
                    'Trained Linguist Network: Hire vetted, trained African language experts for translation, annotation, and validation projects.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Introduction */}
        <section className="bg-primary-800 py-16">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Introducing Volang</h2>
                <p className="text-primary-50 mt-4 text-base leading-relaxed">
                  Volang is a web app that provides real-time conversation translation in a
                  face-to-face business setting. It supports both African and other global languages
                  with cultural accuracy, low-latency and data protection.
                </p>
                <a href={siteMetadata.volangContactUrl} target="_blank">
                  <button className="text-primary-500 mt-6 rounded bg-white px-6 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100">
                    Book a Demo
                  </button>
                </a>
              </div>
              <div className="flex justify-center">
                <div className="dark:bg-background-dark w-full max-w-lg rounded-xl bg-white p-4 shadow-lg">
                  <Image
                    height={100}
                    width={100}
                    className="h-auto w-full rounded-lg"
                    alt="Abstract representation of the Tonative software interface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxwfTx-VI6k4VQpeT1TaUjOFFSE1ysuWA_SR8EArJ329nbW_32rca3Wh1-91gtA_JXSN0tUp-h5UQ1wzB5HE70g130-KuM5c-_U86bIbCwA1y1LAKXJDHgE9pjvOWfm-mQA1v6pBaHRiu2faiIrEPIMIRvSB9yJWfBqRMWoEZJdZiNH9UEbLEIH5scg3ZVzde1UPhZ8Cg2Q5yKPBvbedeJjbNwZrlvXAb_Ny453RCW6lx_MMLsoXoEEMzNRODiC7LP6B2wyPiL1s0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center sm:px-8">
            <h2 className="text-primary-900 text-3xl font-bold sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700">
              We offer a suite of services to complement our technology, ensuring you have the
              support you need to succeed globally.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: '🎓',
                  title: 'Language Technology Consulting',
                  desc: 'Expert guidance to help you integrate the right language solutions into your existing workflows.',
                },
                {
                  icon: '💻',
                  title: 'Custom Software Development',
                  desc: 'Bespoke software solutions tailored to your unique linguistic and cultural requirements.',
                },
                {
                  icon: '🎯',
                  title: 'Cultural Competency Training',
                  desc: "Training programs designed to enhance your team's understanding of cultural nuances in business.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-lg border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 text-4xl">{icon}</div>
                  <h3 className="text-primary-900 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Tonative */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center sm:px-8">
            <h2 className="text-primary-900 text-3xl font-bold sm:text-4xl">
              Why Choose Tonative?
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: '🔒',
                  title: 'Enterprise-Grade Security',
                  desc: 'Your data is protected with state-of-the-art security protocols and infrastructure.',
                },
                {
                  icon: '🌍',
                  title: 'Cultural Expertise',
                  desc: 'Our team includes linguists and cultural experts to ensure authenticity and respect.',
                },
                {
                  icon: '🤖',
                  title: 'Cutting-Edge AI',
                  desc: 'We leverage the latest advancements in AI to deliver powerful and accurate language solutions.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center">
                  <div className="bg-primary-100 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="text-3xl">{icon}</span>
                  </div>
                  <h3 className="text-primary-900 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center sm:px-8">
            <h2 className="text-primary-900 text-3xl font-bold sm:text-4xl">
              Our Commitment to Community
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
              Whether you need custom datasets, want us to demo Volang, or are interested in hiring
              trained African linguists, let's talk.
            </p>
            <button className="bg-accent-500 hover:bg-accent-600 mx-auto mt-6 cursor-pointer rounded-sm px-6 py-2.5 text-sm font-medium text-white transition-colors">
              Learn About Our Initiatives
            </button>
          </div>
        </section>
      </main>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center sm:px-8">
          {siteMetadata.newsletter?.provider && (
            <div className="flex items-center justify-center pt-4 pb-10">
              <NewsletterForm />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
