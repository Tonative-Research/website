import { genPageMetadata } from 'app/seo'
import siteMetadata from 'data/siteMetadata'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Community' })

export default function Page() {
  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        {/* <div className="relative bg-gray-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200')",
            }}
          />
          <div className="relative container mx-auto px-4 py-24 text-center">
            <h1 className="mb-3 text-4xl leading-tight font-black tracking-[-0.033em] text-white md:text-5xl">
              Building a More Inclusive
              <br />
              Digital Africa, Together.
            </h1>

            <a href={siteMetadata.volunteerForm} target="_blank">
              <button className="bg-accent-500 hover:bg-accent-600 mt-6 cursor-pointer rounded-md px-8 py-3 font-semibold text-white transition-colors">
                Request to Join
              </button>
            </a>
          </div>
        </div> */}

        {/* Mission Section */}
        <section className="bg-primary-800 relative overflow-hidden py-24">
          {/* Animated background pattern */}
          <div className="absolute inset-0">
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
          </div>

          {/* Floating orbs */}
          <div className="bg-primary-600/20 absolute top-20 right-1/4 h-72 w-72 animate-pulse rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-20 left-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-600/20 blur-3xl"
            style={{ animationDelay: '1s' }}
          ></div>

          <div className="relative container mx-auto max-w-4xl px-4 text-center">
            <div className="mb-6 inline-block">
              <h2 className="relative text-5xl font-black text-white">
                Our Mission
                <div className="from-accent-500 to-accent-300 absolute -bottom-2 left-0 h-1 w-20 bg-linear-to-r"></div>
              </h2>
            </div>
            <p className="leading-relaxed text-gray-300 sm:text-xl">
              Our mission is to empower African language representation in AI technology by creating
              high-quality datasets, tools, and expertise that can bridge existing language and
              cultural gaps.
            </p>
            <a href={siteMetadata.volunteerForm} target="_blank">
              <button className="bg-accent-500 hover:bg-accent-600 mt-6 cursor-pointer rounded-md px-8 py-3 font-semibold text-white transition-colors sm:mb-10">
                Request to Join
              </button>
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-16 bg-transparent pb-8 sm:pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
              {/* Members Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl">
                <div className="bg-primary-500/10 absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full blur-2xl transition-transform group-hover:scale-150"></div>
                <div className="relative">
                  <div className="mb-1 text-3xl font-black text-gray-900 md:text-7xl">
                    <span className="from-primary-600 to-primary-800 bg-linear-to-br bg-clip-text text-transparent">
                      400
                    </span>
                    <span className="text-primary-600">+</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
                    <div className="bg-primary-500 h-px w-8"></div>
                    Members
                  </div>
                </div>
              </div>

              {/* Countries Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-blue-500/10 blur-2xl transition-transform group-hover:scale-150"></div>
                <div className="relative">
                  <div className="mb-1 text-3xl font-black text-gray-900 md:text-7xl">
                    <span className="from-accent-600 to-accent-800 bg-linear-to-br bg-clip-text text-transparent">
                      23
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
                    <div className="bg-accent-500 h-px w-8"></div>
                    African Countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community in Action */}
        <section className="bg-white py-10 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="relative inline-block text-3xl font-black text-gray-900 sm:text-5xl">
                Community in Action
                <div className="from-primary-500 absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 bg-linear-to-r via-blue-500 to-purple-500"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
                  title: 'Tonative Workshop at Deep Learning Indaba 2026, Nigeria',
                  desc: 'Hosting a hands-on workshop on community-driven African language data curation at DLI 2026. Featuring guest speakers from Digital Umuganda and KenCorpus.',
                  gradient: 'from-primary-700/90 to-primary-500/90',
                  href: '/indaba-2026',
                  badge: 'Upcoming',
                },
                {
                  image: '/static/images/tonative_sharon_at_ypit.jpeg',
                  title:
                    'Young People in Tech (YPIT), Artificial Future Conference - Keynote Panel',
                  desc: 'Sharon Ibejih, Founder of Tonative, spoke on the keynote panel "What It Actually Takes to Build AI in Africa" on June 13, 2026, at the Artificial Future Conference held at Civic Centre, Ozumba Mbadiwe, Victoria Island, Lagos.',
                  gradient: 'from-violet-600/90 to-indigo-500/90',
                  href: 'https://www.youtube.com/live/p_tZe1SOXHM?t=6140',
                  linkLabel: 'Watch recording →',
                },
                {
                  image: 'https://img.youtube.com/vi/wNAJYyTSQPc/maxresdefault.jpg',
                  title: 'YPIT AF Workshop: Bridging the Data Skills Gap for African Languages',
                  desc: 'On May 26, 2026, Tonative hosted a virtual workshop as part of The Artificial Future series by Young People In Tech (YPIT), introducing participants to language documentation, translation, validation, and dataset creation for AI. Facilitated by Sharon Ibejih, Cynthia Amol, and Mwihaki Thuo.',
                  gradient: 'from-sky-600/90 to-blue-500/90',
                  href: 'https://www.youtube.com/watch?v=wNAJYyTSQPc&t=5323s',
                  linkLabel: 'Watch recording →',
                },
                {
                  image: 'https://share.cysafepath.com/2026/05/ifs-2026-chinenye-speaker.png',
                  title: '2026 Impact Fellowship Summit (IFN IREX)',
                  desc: 'Virtual presentation on April 27, 2026, by Chinenye Anikwenze on "Human-in-the-Loop AI: Centering African Languages in Fellowship Systems" for the summit hosted in Washington, DC.',
                  gradient: 'from-teal-600/90 to-cyan-500/90',
                },
                {
                  image: '/static/images/cynthia_webinar_women_leading_ai_for_social_good.jpg',
                  title: 'Women Leading AI for Social Good in Africa - Tonative × Divas in AI',
                  desc: 'On April 11, 2026, Tonative co-hosted a webinar with Divas in AI featuring Deborah Arthur, Cynthia Amol, and Tatapong Beyala on using AI to drive meaningful impact across Africa.',
                  gradient: 'from-pink-600/90 to-rose-500/90',
                  href: 'https://luma.com/jo494ckj',
                  linkLabel: 'View Event Details →',
                },
                {
                  image: 'https://share.cysafepath.com/2026/05/aflc-2026-chinenye-speaker.png',
                  title: 'African Languages Conference (AFLC)',
                  desc: 'On February 27, 2026, Chinenye Anikwenze presented "Why Linguists are the Essential Guardrails for African AI," demonstrating how human-in-the-loop validation repairs tonal "Semantic Collapse" in Igbo.',
                  gradient: 'from-emerald-600/90 to-green-500/90',
                  href: 'https://www.youtube.com/live/0eBZ2JJYaLg?t=34876',
                  linkLabel: 'Watch recording →',
                },
                {
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
                  title: 'Tonative Booth at Deep Learning Indaba Conference at Kigali',
                  desc: 'Engaging with other African NLP enthusiasts and signing new members into our community.',
                  gradient: 'from-purple-500/90 to-pink-500/90',
                },
                {
                  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
                  title: 'AfriLang Conference at Kampala',
                  desc: 'Presenting our paper "Tonative: Community-Driven Extension of African Datasets Through Human-AI Collaboration.',
                  gradient: 'from-blue-500/90 to-cyan-500/90',
                },
                {
                  image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
                  title:
                    'Centre for Low-Resource Languages and Cultures Workshop at NeurIPs, Mexico City',
                  desc: 'Founded and chaired by Joy Naomi, with Tonative leaders as part of the co-organisers.',
                  gradient: 'from-green-500/90 to-emerald-500/90',
                },
                {
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
                  title: 'Mawazo Ideas Night: Is the Algo African?',
                  desc: 'Cynthia Amol at a public events platform for science engagement and communication.',
                  gradient: 'from-orange-500/90 to-red-500/90',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100`}
                    ></div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 h-16 w-16 bg-linear-to-br from-white/20 to-transparent"></div>

                    {/* Upcoming badge */}
                    {card.badge && (
                      <div className="bg-accent-500 absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow">
                        {card.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="group-hover:text-primary-600 mb-3 text-xl leading-tight font-bold text-gray-900 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">{card.desc}</p>

                    {/* Bottom accent line */}
                    <div className="from-primary-500 mt-4 h-1 w-0 rounded-full bg-linear-to-r to-blue-500 transition-all duration-500 group-hover:w-full"></div>

                    {card.href && (
                      <Link
                        href={card.href}
                        target={card.href.startsWith('http') ? '_blank' : undefined}
                        rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-600 mt-3 block text-sm font-semibold"
                      >
                        {card.linkLabel || 'View workshop details →'}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Language Champions */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md md:p-12">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold">Become a Language Champion</h2>
                  <p className="mb-6 text-gray-700">
                    Join us in our mission to preserve and promote Africa linguistic diversity.
                    Whether you're a language enthusiast, educator, or technologist, there's a place
                    for you in our community to drive equitable AI.
                  </p>
                  <a href={siteMetadata.volunteerForm} target="_blank">
                    <button className="bg-primary-600 hover:bg-primary-700 rounded-md px-8 py-3 font-semibold text-white transition-colors">
                      Request to Join
                    </button>
                  </a>
                </div>
                <div className="flex justify-center">
                  <div className="rounded-full bg-green-100 p-12">
                    <svg
                      className="text-primary-600 h-32 w-32"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/* {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4 pb-10">
            <NewsletterForm />
          </div>
        )} */}
      </main>
    </>
  )
}
