import { genPageMetadata } from 'app/seo'
import NewsletterForm from 'pliny/ui/NewsletterForm.js'
import siteMetadata from 'data/siteMetadata'

export const metadata = genPageMetadata({ title: 'Community' })

export default function Page() {
  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
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
                Get Involved{' '}
              </button>
            </a>
          </div>
        </div>

        {/* Mission Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="leading-relaxed text-gray-700">
              Our mission is to empower communities and individuals across Africa and the global
              diaspora through innovative technology solutions. We believe in fostering digital
              inclusion by creating tools and resources that bridge language and cultural gaps,
              enabling authentic expression and meaningful connections in the digital age.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-gray-900">2000+</div>
                <div className="text-gray-600">Empowerments</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-gray-900">13</div>
                <div className="text-gray-600">Cities on 4 seas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community in Action */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Community in Action</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
                  title: 'Linguistic Empowerment',
                  desc: 'Celebrating and preserving indigenous languages through technology.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
                  title: 'Youth Language Initiatives',
                  desc: 'Engaging young people in language preservation and digital literacy.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
                  title: 'Digital Skills Empowerment',
                  desc: 'Building capacity through workshops and training programs.',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                    <p className="text-gray-600">{card.desc}</p>
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
                    Join us in our mission to preserve and promote linguistic diversity. Whether
                    you're a language enthusiast, educator, or technologist, there's a place for you
                    in our community. Together, we can ensure that no language is left behind in the
                    digital age.
                  </p>
                  <a href={siteMetadata.volunteerForm} target="_blank">
                    <button className="bg-primary-600 hover:bg-primary-700 rounded-md px-8 py-3 font-semibold text-white transition-colors">
                      Join the Movement
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
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4 pb-10">
            <NewsletterForm />
          </div>
        )}
      </main>
    </>
  )
}
