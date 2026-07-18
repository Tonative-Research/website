import Hero from '@/components/home/Hero'
import DatasetPortfolio from '@/components/home/DatasetPortfolio'
import ContactForm from '@/components/home/ContactForm'
import OurCoverage from '@/components/home/OurCoverage'
import DataAcademy from '@/components/home/DataAcademy'
import Image from 'next/image'
import HeroBusinessBenefit from '@/data/images/hero_business_benefit.png'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <>
      <main className="w-full">
        <Hero />
        <OurCoverage /> 
        
        {/* CTA Button */}
        <section className="bg-gray-50 md:p-16">
          <div className="from-primary-900 via-primary-800 relative overflow-hidden bg-linear-to-br to-slate-950">
            {/* Product Introduction */}
            <section className="bg-primary-800 py-16">
              <div className="container mx-auto px-6 sm:px-8">
                <div className="grid items-center gap-12 md:grid-cols-2">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Work With Us</h2>
                    <p className="text-primary-50 mt-4 text-base leading-relaxed">
                      We develop custom, high-fidelity Africa NLP datasets that reflect its local languages, cultural nuances and regional realities. 
                      You can also explore our pre-built dataset catalog.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <a href="#contact-form">
                        <button className="bg-accent-500 hover:bg-accent-600 w-full cursor-pointer rounded-lg px-8 py-3.5 text-sm font-bold text-white transition-colors sm:w-auto">
                          Request Custom Dataset
                        </button>
                      </a>
                      <a href="/dataset-tools">
                        <button className="w-full cursor-pointer rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto">
                          Browse Our Datasets
                        </button>
                      </a>
                    </div>
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

        <DatasetPortfolio />
        <DataAcademy />

        {/* Community Section has been removed */}
       
        <ContactForm />
      </main>
    </>
  )
}
