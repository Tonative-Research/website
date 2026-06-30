import Hero from '@/components/home/Hero'
import DataCurator from '@/components/home/DataCurator'
import ContactForm from '@/components/home/ContactForm'
import OurCoverage from '@/components/home/OurCoverage'
import DataAcademy from '@/components/home/DataAcademy'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <>
      <main className="w-full">
        <Hero />
        <OurCoverage /> 
        <DataCurator />
        <DataAcademy />

        {/* Community Section has been removed */}
       
        <ContactForm />
      </main>
    </>
  )
}
