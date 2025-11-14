import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpeHrJ52F6KOyUFDi2MtHS3LhebVAd8iKuqhdJtbF5Re9AiqA7FPi8R0narIuqd94xy7MLYunLnhQOWvOPRBWZfuFJIpfkrNnmSHvI5D0rFov2YMZKOc_KfXC4shdqSlq3j4_u42GSDpAEQr55K4T-oMx0JZlDRsx62z3keD0sBCVf54md6sBFFMEfFFxVUq8cZ1bWKMdCyDB5UzIZu77jxb7UEmwm_6_bKsTA5ERd3_jabLpToJWrc-Y88YtnAQtAxYtCpnHAtpM')",
          }}
        >
          <div className="absolute inset-0 bg-white/85"></div>
          <div className="relative container mx-auto px-6 sm:px-8">
            <div className="flex min-h-[500px] flex-col items-center justify-center py-16 text-center">
              <h1 className="text-primary-900 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Introducting Tonative
              </h1>
              <p className="mt-6 max-w-2xl text-base text-gray-700 sm:text-lg">
                Tonative bridges the gap between technology and language preservation for
                enterprises, fostering authentic communication and cultural understanding.
              </p>
              <button className="bg-primary-800 hover:bg-primary-700 mt-8 rounded px-8 py-3 text-sm font-medium text-white transition-colors">
                Discover Tonative
              </button>
            </div>
          </div>
        </div>

        {/* Problem/Solution Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Problem */}
              <div>
                <h2 className="text-primary-900 mb-6 text-3xl font-bold">The Problem</h2>
                <div className="space-y-5">
                  {[
                    'Businesses face significant challenges with language barriers, leading to miscommunication and lost opportunities in global markets.',
                    'Pervasive cultural misunderstandings erode trust and hinder effective collaboration with international partners and customers.',
                    'Inefficient and culturally unaware communication tools decrease productivity and fail to convey the intended message accurately.',
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
                <h2 className="text-primary-900 mb-6 text-3xl font-bold">The Solution</h2>
                <div className="space-y-5">
                  {[
                    "Tonative's advanced language technology and cultural expertise directly address communication hurdles, ensuring clarity and precision.",
                    'Our solutions are built on a foundation of cultural authenticity, helping you build stronger, more respectful relationships.',
                    'Volang, our flagship product, provides an enterprise-grade platform for seamless, culturally-aware communication.',
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
                  Volang is our flagship enterprise software solution, meticulously designed to
                  empower your organization with secure, accurate, and culturally nuanced
                  communication tools. Go beyond mere translation and connect with the world
                  authentically.
                </p>
                <button className="text-primary-900 mt-6 rounded bg-white px-6 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100">
                  Learn More
                </button>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                  <img
                    className="h-auto w-full rounded"
                    alt="Abstract representation of the Volang software interface"
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
              At Tonative, we believe technology should empower, not erase. We are deeply committed
              to supporting linguistic diversity and partner with communities to help preserve and
              promote their languages for future generations.
            </p>
            <button className="border-primary-800 text-primary-900 hover:bg-primary-50 mx-auto mt-6 rounded border-2 px-6 py-2.5 text-sm font-medium transition-colors">
              Learn About Our Initiatives
            </button>
          </div>
        </section>
      </main>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
