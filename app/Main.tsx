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
          <div className="bg-background-light/80 dark:bg-background-dark/80 absolute inset-0"></div>
          <div className="relative container mx-auto px-4">
            <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-20 text-center">
              <h1 className="font-display text-primary text-5xl font-bold tracking-tight md:text-7xl dark:text-white">
                Parlons votre langue
              </h1>
              <p className="font-body text-text-color mt-4 max-w-2xl text-lg dark:text-gray-300">
                Tonative bridges the gap between technology and language preservation for
                enterprises, fostering authentic communication and cultural understanding.
              </p>
              <button className="bg-primary hover:bg-secondary mt-8 flex h-12 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors">
                <span className="truncate">Discover Volang</span>
              </button>
            </div>
          </div>
        </div>

        {/* Problem/Solution Section */}
        <section className="bg-background-light dark:bg-background-dark py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-start gap-12 md:grid-cols-2">
              {/* Problem */}
              <div>
                <h2 className="font-display text-primary mb-4 text-3xl font-bold dark:text-white">
                  The Problem
                </h2>
                <div className="font-body text-text-color space-y-4 dark:text-gray-300">
                  {[
                    'Businesses face significant challenges with language barriers, leading to miscommunication and lost opportunities in global markets.',
                    'Pervasive cultural misunderstandings erode trust and hinder effective collaboration with international partners and customers.',
                    'Inefficient and culturally unaware communication tools decrease productivity and fail to convey the intended message accurately.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-accent mt-1">cancel</span>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div className="border-accent/30 border-t-2 pt-8 md:border-t-0 md:border-l-2 md:pt-0 md:pl-12">
                <h2 className="font-display text-primary mb-4 text-3xl font-bold dark:text-white">
                  The Solution
                </h2>
                <div className="font-body text-text-color space-y-4 dark:text-gray-300">
                  {[
                    "Tonative's advanced language technology and cultural expertise directly address communication hurdles, ensuring clarity and precision.",
                    'Our solutions are built on a foundation of cultural authenticity, helping you build stronger, more respectful relationships.',
                    'Volang, our flagship product, provides an enterprise-grade platform for seamless, culturally-aware communication.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined mt-1 text-green-500">
                        check_circle
                      </span>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Introduction */}
        <section className="bg-secondary/10 dark:bg-secondary/20 py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="font-display text-primary text-4xl font-bold dark:text-white">
                  Introducing Volang
                </h2>
                <p className="font-body text-text-color mt-4 text-lg dark:text-gray-300">
                  Volang is our flagship enterprise software solution, meticulously designed to
                  empower your organization with secure, accurate, and culturally nuanced
                  communication tools. Go beyond mere translation and connect with the world
                  authentically.
                </p>
                <button className="bg-primary hover:bg-secondary mx-auto mt-6 flex h-12 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-base leading-normal font-bold tracking-[0.015em] text-white transition-colors md:mx-0">
                  <span className="truncate">Learn More</span>
                </button>
              </div>
              <div className="flex justify-center">
                <div className="dark:bg-background-dark w-full max-w-lg rounded-xl bg-white p-4 shadow-lg">
                  <img
                    className="h-auto w-full rounded-lg"
                    alt="Abstract representation of the Volang software interface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxwfTx-VI6k4VQpeT1TaUjOFFSE1ysuWA_SR8EArJ329nbW_32rca3Wh1-91gtA_JXSN0tUp-h5UQ1wzB5HE70g130-KuM5c-_U86bIbCwA1y1LAKXJDHgE9pjvOWfm-mQA1v6pBaHRiu2faiIrEPIMIRvSB9yJWfBqRMWoEZJdZiNH9UEbLEIH5scg3ZVzde1UPhZ8Cg2Q5yKPBvbedeJjbNwZrlvXAb_Ny453RCW6lx_MMLsoXoEEMzNRODiC7LP6B2wyPiL1s0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-background-light dark:bg-background-dark py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-primary text-4xl font-bold dark:text-white">
              Our Services
            </h2>
            <p className="font-body text-text-color mx-auto mt-4 max-w-2xl text-lg dark:text-gray-300">
              We offer a suite of services to complement our technology, ensuring you have the
              support you need to succeed globally.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: 'model_training',
                  title: 'Language Technology Consulting',
                  desc: 'Expert guidance to help you integrate the right language solutions into your existing workflows.',
                },
                {
                  icon: 'developer_mode',
                  title: 'Custom Software Development',
                  desc: 'Bespoke software solutions tailored to your unique linguistic and cultural requirements.',
                },
                {
                  icon: 'school',
                  title: 'Cultural Competency Training',
                  desc: "Training programs designed to enhance your team's understanding of cultural nuances in business.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-lg border border-gray-200 p-8 transition-shadow hover:shadow-lg dark:border-gray-700"
                >
                  <span className="material-symbols-outlined text-accent text-4xl">{icon}</span>
                  <h3 className="font-display text-primary mt-4 text-xl font-bold dark:text-white">
                    {title}
                  </h3>
                  <p className="font-body text-text-color mt-2 dark:text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Tonative */}
        <section className="bg-secondary/10 dark:bg-secondary/20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-primary text-4xl font-bold dark:text-white">
              Why Choose Tonative?
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: 'security',
                  title: 'Enterprise-Grade Security',
                  desc: 'Your data is protected with state-of-the-art security protocols and infrastructure.',
                },
                {
                  icon: 'public',
                  title: 'Cultural Expertise',
                  desc: 'Our team includes linguists and cultural experts to ensure authenticity and respect.',
                },
                {
                  icon: 'psychology',
                  title: 'Cutting-Edge AI',
                  desc: 'We leverage the latest advancements in AI to deliver powerful and accurate language solutions.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center p-6">
                  <div className="bg-accent/20 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-accent text-3xl">{icon}</span>
                  </div>
                  <h3 className="font-display text-primary text-xl font-bold dark:text-white">
                    {title}
                  </h3>
                  <p className="font-body text-text-color mt-2 dark:text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-background-light dark:bg-background-dark py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-primary text-4xl font-bold dark:text-white">
              Our Commitment to Community
            </h2>
            <p className="font-body text-text-color mx-auto mt-4 max-w-3xl text-lg dark:text-gray-300">
              At Tonative, we believe technology should empower, not erase. We are deeply committed
              to supporting linguistic diversity and partner with communities to help preserve and
              promote their languages for future generations.
            </p>
            <button className="border-primary text-primary hover:bg-primary/5 mx-auto mt-6 flex h-12 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border px-6 transition-colors dark:border-white dark:text-white dark:hover:bg-white/10">
              <span className="truncate">Learn About Our Initiatives</span>
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
