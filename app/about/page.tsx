import { genPageMetadata } from 'app/seo'
import Team from 'components/about/Team'
import { allAuthors } from '.contentlayer/generated'

export const metadata = genPageMetadata({ title: 'About' })

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
              Tonative is a community-driven initiative focused on AI data curation for
              under-resourced languages, with a strong emphasis on African languages. We bring
              together native speakers, linguists, and technologists to build, validate, and extend
              high-quality language datasets that enable inclusive and culturally grounded AI
              systems.
            </p>
            <p>
              Our work sits at the intersection of human expertise and machine intelligence, using
              human-AI collaboration to create datasets that are both scalable and linguistically
              accurate.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">What We Do</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>
          <p className="mb-12 text-lg text-gray-700">
            Tonative focuses on the creation, extension, and validation of language data for AI,
            especially in contexts where data scarcity limits technological progress.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Community-driven data curation',
                desc: 'We work directly with native speakers and language experts to curate, annotate, and validate text and language data.',
                icon: '👥',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Human-AI collaborative dataset extension',
                desc: 'We use AI-assisted methods (such as machine translation or language models) combined with human review to efficiently grow high-quality datasets.',
                icon: '🤝',
                color: 'from-primary-700to-primary-700 to-cyan-500',
              },
              {
                title: 'African and low-resource language datasets',
                desc: 'We prioritize languages that are under-represented in existing AI systems, helping ensure these languages are included in the future of AI.',
                icon: '🌍',
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Open and reusable research outputs',
                desc: 'Where possible, we publish datasets, tools, and methodological insights to support broader research and development.',
                icon: '📚',
                color: 'from-orange-500 to-red-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-linear-to-br ${item.color} opacity-10 blur-2xl transition-all group-hover:scale-150`}
                ></div>
                <div className="relative">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/* Our Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Our Focus Areas</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>
          <p className="mb-12 text-lg text-gray-700">
            Our work centers on several key areas that contribute to creating a more inclusive and
            ethically responsible AI ecosystem.
          </p>

          <div className="space-y-8">
            {[
              {
                title: 'Commercial and Open-Source AI Data Curation for Under-Resourced Languages',
                desc: 'We focus on the meticulous collection, preparation, and management of data for AI systems, specializing in languages that are often neglected by mainstream AI development. This includes creating datasets for both commercial applications and open-source initiatives.',
              },
              {
                title: 'Language Datasets for NLP and Machine Learning',
                desc: 'A core part of our mission is building high-quality, relevant language datasets essential for training robust Natural Language Processing (NLP) models and other machine learning applications.',
              },
              {
                title: 'Annotation and Validation Workflows',
                desc: 'We develop and implement rigorous workflows for annotating and validating data. This ensures the accuracy and reliability of the datasets, which is crucial for the performance of the AI models built upon them.',
              },
              {
                title: 'Ethical and Inclusive AI Data Practices',
                desc: 'Ethics and inclusion are at the foundation of our work. We adhere to and promote practices that ensure AI data is collected and used responsibly, respects linguistic diversity, and minimizes bias against under-represented communities.',
              },
              {
                title: 'Translation Applications that Enable Easy Access to African Languages',
                desc: 'We work on developing and improving translation technologies that make African languages more accessible, facilitating communication and access to information for native speakers and the global community.',
              },
            ].map((area, i) => (
              <div
                key={i}
                className="group border-primary-700 relative overflow-hidden rounded-xl border-l-4 bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">{area.title}</h3>
                <p className="leading-relaxed text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Who We Work With</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Native Speakers and Language Communities',
                desc: 'Our strongest partnerships are with the native speakers and communities whose languages we work with. Their insights and expertise are invaluable to the quality and cultural relevance of our data.',
                icon: '🗣️',
              },
              {
                title: 'Linguists and Language Technologists',
                desc: 'We collaborate with experts in language structure, acquisition, and technology to ensure the scientific rigor and technical excellence of our datasets and applications.',
                icon: '📖',
              },
              {
                title: 'Software Developers',
                desc: 'Partnerships with software developers are key to building and deploying the tools, platforms, and applications necessary for data curation, model training, and end-user access.',
                icon: '💻',
              },
              {
                title: 'Academic and Independent AI Researchers and Initiatives',
                desc: 'We actively engage with researchers, both within academia and independent initiatives, to advance the state-of-the-art in AI for low-resource languages.',
                icon: '🔬',
              },
              {
                title: 'Organizations Interested in Inclusive and Responsible AI',
                desc: 'We partner with different organizations, from businesses to non-profits; that are committed to integrating inclusive and responsible principles into their AI strategies and products.',
                icon: '🏢',
              },
            ].map((partner, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{partner.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{partner.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">How We Operate</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We are a community-first organisation, which mostly comprises trained language
              speakers who are responsible for the annotation and validation of the datasets we
              publish. We are constantly open to having new members join us provided they are
              African speakers, with a fair understanding of English that serves as our common
              language, and is willing to go through our training program.
            </p>
            <p>
              Speakers contribute to both open-source and free datasets, and payable commercial
              datasets. Aside language speakers, we have a rich team of AI researchers and software
              developers. The researchers contribute to identifying data gaps and how Tonative can
              come in, as well as carrying out useful experiments with the datasets to show
              scientific contribution, while the software developers contribute to building,
              deploying and maintaining software tools.
            </p>
            <p>
              Commercial datasets are usually carried out when we get contracts from research
              organisations, or done ahead by us for research organisations to purchase.
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
                We envision a future where African languages can meaningfully participate in AI
                systems, and its communities have agency over how their languages are represented in
                technology.
              </p>
              <p>
                By combining community knowledge with AI tools, Tonative aims to make high-quality
                language data more accessible, ethical, and inclusive.
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
