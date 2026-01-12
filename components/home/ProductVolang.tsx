import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import HeroBusinessBenefit from '@/data/images/hero_business_benefit.png'

export default function ProductVolang() {
  return (
    <section className="bg-gray-50 p-16">
      <div className="from-primary-900 via-primary-800 relative overflow-hidden bg-linear-to-br to-slate-950">
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
                    src={HeroBusinessBenefit}
                    alt="Abstract representation of the Tonative software interface"
                    width={600}
                    height={320}
                    className="h-auto w-full rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
