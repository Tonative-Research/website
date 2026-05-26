import Hero from '@/components/home/Hero'
import DataCurator from '@/components/home/DataCurator'
import ContactForm from '@/components/home/ContactForm'
import ProductVolang from '@/components/home/ProductVolang'
import ProblemSolution from '@/components/home/ProblemSolution'
import DataAcademy from '@/components/home/DataAcademy'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <>
      <main className="w-full">
        <Hero />
        <ProblemSolution />
        <ProductVolang />
        <DataCurator />
        <DataAcademy />

        {/* Community Section */}
        <section className="from-primary-900 via-primary-800 relative bg-linear-to-br to-slate-950 py-16 lg:py-32">
          <div className="container mx-auto px-6 text-center sm:px-8">
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white">
              Whether you need custom datasets, want us to demo Volang, or are interested in hiring
              trained African linguists, let's talk.
            </p>
            <Link href="/about">
              <button className="bg-accent-500 hover:bg-accent-600 mx-auto mt-6 cursor-pointer rounded-sm px-6 py-2.5 text-sm font-medium text-white transition-colors">
                Learn About Our Initiatives
              </button>
            </Link>
          </div>
        </section>
        <ContactForm />
      </main>
    </>
  )
}
