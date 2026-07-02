import { genPageMetadata } from 'app/seo'
import Team from 'components/about/Team'
import { allAuthors } from '.contentlayer/generated'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'Tonative is an African AI data company building the data layer that enables African AI innovation. NeurIPS 2025 published. Trusted by research institutions and AI companies.',
  keywords: [
    'about Tonative',
    'African language data curation',
    'community-driven AI',
    'inclusive AI Africa',
    'low-resource language datasets',
    'African linguists',
    'human-AI collaboration',
    'ethical AI data',
    'African NLP research',
    'language technology Africa',
  ],
})

export default function About() {
  // 1. Define the specific list of leaders to show
  const coreLeaders = [
    'https://www.linkedin.com/in/sharonibejih/',
    'https://www.linkedin.com/in/cynthia-amol/',
    'https://www.linkedin.com/in/joy-olusanya-209340206/',
    'https://www.linkedin.com/in/alfred-kondoro-b70605181/',
    'https://www.linkedin.com/in/chinenye-anikwenze/',
    'https://www.linkedin.com/in/damilare-keshinro/',
  ]

  // 2. Filter by the whitelist and draft status
  const activeAuthors = allAuthors.filter((author) => {
    // Check if they are in the core list and NOT a draft
    const isCore = coreLeaders.some((link) =>
      author.linkedin?.toLowerCase().includes(link.toLowerCase().trim())
    )
    return isCore && !author.draft
  })

  // 3. Sort by the 'order' string property (converted to number)
  const sortedAuthors = activeAuthors.sort((a, b) => {
    const orderA = parseInt(a.order || '99', 10)
    const orderB = parseInt(b.order || '99', 10)
    return orderA - orderB
  })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-800 relative overflow-hidden py-24">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        </div>

        {/* Floating orbs */}
        <div className="bg-primary-600/20 absolute top-20 right-1/4 h-72 w-72 animate-pulse rounded-full blur-3xl"></div>
        <div
          className="bg-primary-600/20 absolute bottom-20 left-1/4 h-72 w-72 animate-pulse rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="relative container mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block">
            <h2 className="relative text-5xl font-black text-white">
              About Tonative
              <div className="from-accent-500 to-accent-300 absolute -bottom-2 left-0 h-1 w-20 bg-linear-to-r"></div>
            </h2>
          </div>
          <p className="leading-relaxed text-gray-300 sm:text-xl">
            Data Curation for Under-Resourced Languages
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Who We Are</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Tonative is an African AI data company. 
              We build, validate, and curate language datasets and domain-specific training data for AI, 
              across African languages and in English grounded in African contexts.
            </p>
            <p>
               Our work is powered by a trained network of linguists and domain specialists who live and work across the continent, 
               ensuring every dataset is linguistically accurate, contextually grounded, and immediately usable.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's narrative */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Founder's narrative</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>
          <p className="mb-12 text-lg text-gray-700">
            The rapid growth of AI research and innovation across Africa has created unprecedented opportunities for the continent.
            As global investment, research partnerships, and technological interest in African markets continue to increase,
            so does the demand for language technologies that can understand the linguistic and contextual diversity of Africans.
            But the continent's AI data needs have outgrown what grant-funded and volunteer-driven efforts alone can sustain.
            Meeting this demand requires a scalable commercial data infrastructure.
          </p>
          <p className="mb-12 text-lg text-gray-700">
            Our role at Tonative is to be the data layer that enables African AI innovation.
            By combining trained language and domain experts with AI-assisted curation workflows,
            we make it possible to create data resources that maintain Africa’s cultural and contextual knowledge.

          </p>

        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="bg-primary-600/20 absolute top-1/4 right-1/3 h-96 w-96 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="mb-8 text-4xl font-black text-white md:text-5xl">Why We Exist</h2>
            <div className="space-y-6 text-xl leading-relaxed text-gray-300">
              <p>
                Most AI systems today are trained on data from a small number of dominant languages.
                This creates systemic exclusion for communities whose languages and cultural
                contexts are missing or misrepresented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Credentials</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>

          <div className="space-y-6">
 

            {[
              {
                logo: '/static/images/neurips.png',
                title: 'Published at NeurIPS 2025 Conference',
                desc: 'Human-AI collaborative data curation methodology.',
              },
              {
                logo: '/static/images/HealthBench.png',
                title: 'HealthBench Extended',
                desc: 'Localised OpenAI HealthBench dataset to 6 Nigerian languages with medical practitioners rewriting scoring rubrics to match the Nigerian healthcare system.',
              },
              {
                logo: '/static/images/mlc.png',
                title: 'MLC data validation partner',
                desc: 'Validated custom dataset for research purposes.',
              },
              {
                logo: '/static/images/techcabal.png',
                title: 'Featured in TechCabal YPIT',
                desc: 'Recognized in Africa\'s AI ecosystem as a dataset infrastructure provider.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 rounded-xl border-l-4 border-primary-700 bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">How We Work</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Every dataset passes through a multi-stage pipeline. Our trained curators produce initial data, the quality assurance layer validates the data, 
              the language or domain leads resolve inter-annotator disagreement before the final data is licensed. 
              This process applies equally to both the custom and open-source datasets.
            </p>
            
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="bg-primary-600/20 absolute top-1/4 right-1/3 h-96 w-96 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="mb-8 text-4xl font-black text-white md:text-5xl">Our Vision</h2>
            <div className="space-y-6 text-xl leading-relaxed text-gray-300">
              <p>
                We envision a future where African languages can significantly participate in AI systems,
                 and its communities have agency over how their languages and experiences are represented in technology.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <Team authors={sortedAuthors} />
    </div>
  )
}
