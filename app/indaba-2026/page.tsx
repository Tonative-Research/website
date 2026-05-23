import { genPageMetadata } from 'app/seo'
import NextImage from 'next/image'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'DLI 2026 Workshop -Tonative',
  description:
    "Tonative at Deep Learning Indaba 2026, Nigeria. Workshop on capacity building for community-led dataset creation and sustainable AI pipelines thereby strengthening Africa's human data infrastructure.",
})

const organizers = [
  {
    name: 'Alfred Kondoro',
    role: 'Lead Organiser',
    occupation: 'Head of Research, Tonative Africa',
    bio: 'Alfred is a Tanzanian PhD researcher in Data Science at Hanyang University, Republic of Korea. He leads community-driven research initiatives at Tonative Africa aimed at strengthening African representation in AI, with work spanning NLP, HCI, and ICTD. His publications have appeared at EACL, AAAI, ACL, CHI, IMWUT, CIKM, CUI, and AfriCHI venues.',
    linkedin: 'https://www.linkedin.com/in/alfred-kondoro-b70605181/',
    image: '/static/images/authors/alfred_kondoro.png',
  },
  {
    name: 'Sharon Ibejih',
    role: 'Organiser',
    occupation: 'Founder, Tonative Africa',
    bio: 'Sharon is a Senior Data Scientist at Ignite Energy Access and the Founder of Tonative Africa. Her work focuses on NLP, data curation, and AI pipeline design for low-resource African languages. She holds an MSc in Data Science and has presented at AfricaNLP, NeurIPS WiML, ICLR workshops, Deep Learning Indaba, and CVPR.',
    linkedin: 'https://www.linkedin.com/in/sharonibejih/',
    image: '/static/images/authors/sharon_ibejih.png',
  },
  {
    name: 'Cynthia Amol',
    role: 'Organiser',
    occupation: 'Co-Founder & Head of Data, Tonative Africa',
    bio: 'Cynthia is a PhD student in Computer Science and Google NLP Fellow at Maseno University, Kenya. A Deep Learning Indaba Alele-Williams Masters Award recipient, she leads the data validation pipeline at Tonative Africa and has co-organised workshops at NeurIPS, LREC-COLING, EACL, and CHI.',
    linkedin: 'https://www.linkedin.com/in/cynthia-amol/',
    image: '/static/images/authors/cynthia_amol.png',
  },
  {
    name: 'Chinenye Anikwenze',
    role: 'Organiser',
    occupation: 'Engineering Lead, Tonative Africa',
    bio: 'Chinenye is a Software Engineer and Automation Specialist focusing on defensive infrastructure and AI safety. As Engineering Lead at Tonative Africa, she manages technical infrastructure for 400+ contributors. Her research on Semantic Collapse and the security of tonal languages was recently presented at AFLC 2026 and Impact Fellowship Summit IREX 2026.',
    linkedin: 'https://www.linkedin.com/in/chinenye-anikwenze/',
    image: '/static/images/authors/chinenye_anikwenze.png',
  },
  {
    name: 'Joy Olusanya',
    role: 'Organiser',
    occupation: 'NLP Researcher & Training Manager, Tonative Africa',
    bio: 'Joy is a linguist and NLP researcher focusing on low-resource language technologies, multilingual NLP, and benchmark evaluation. She served as Workshop Chair for the CLRLC–LLMs Workshop at NeurIPS 2025 and is Founder and CEO of the Center for Low-Resource Languages and Cultures.',
    linkedin: 'https://www.linkedin.com/in/joy-olusanya-209340206/',
    image: '/static/images/authors/joy_naomi.jpeg',
  },
  {
    name: 'Armand Bukama',
    role: 'Organiser',
    occupation: 'Social Manager, Tonative Africa',
    bio: 'Armand is a Congolese computer scientist from the DRC with a degree from the Catholic University of Bukavu. He leads community engagement, outreach, and communications at Tonative Africa, and works at the intersection of AI, electronics, and sustainable energy for underserved communities.',
    linkedin: 'https://www.linkedin.com/in/armandbukama',
    image: '/static/images/authors/armand_bukama.jpg',
  },
  {
    name: 'Faisal Muhammad Adam',
    role: 'Organiser',
    occupation: 'Hausa Language Validation Lead, Tonative Africa',
    bio: 'Faisal is a lecturer and data science practitioner based in Kano, Nigeria, pursuing graduate studies in Applied Data Science at WorldQuant University. He serves as Hausa Language Validation Lead at Tonative Africa, coordinating contributors on multilingual dataset validation and quality assurance.',
    linkedin: 'https://www.linkedin.com/in/vafaisalm93/',
    image: '/static/images/authors/faisal_adam.jpg',
    initials: 'FA',
  },
  {
    name: 'Godspraise Okechukwu',
    role: 'Organiser',
    occupation: 'Project Lead, Tonative Research Group',
    bio: 'Godspraise is a software engineer and NLP researcher based in Nigeria. As Project Lead in the Tonative Research Group, he contributes to dataset creation, validation, and multilingual resource development for African languages, building community-driven data pipelines for low-resource languages.',
    linkedin: 'https://www.linkedin.com/in/okechukwu-god-spraise-48464a1a3/',
    image: '/static/images/authors/godspraise_okechukwu.jpg',
  },
]

const speakers = [
  {
    name: 'Samuel Rutunda',
    role: 'Digital Umuganda',
    bio: "Building Rwanda's community-driven digital infrastructure initiative like Digital Umuganda which harnesses collective civic action to power open language datasets and AI tools for Kinyarwanda.",
    linkedin: 'https://rw.linkedin.com/in/samuel-rutunda-07bb818a',
    avatar: 'SR',
    org: 'Digital Umuganda',
  },
  {
    name: 'Lilian Wanzare',
    role: 'KenCorpus',
    bio: 'Researcher at KenCorpus dedicated to building large-scale corpora for Kenyan languages, enabling downstream NLP tasks and lowering the barrier for researchers working with East African language data.',
    linkedin: 'https://ke.linkedin.com/in/liliwanzie',
    avatar: 'LW',
    org: 'KenCorpus',
  },
]

const agenda = [
  {
    time: 'Section 1 · ~3 min',
    title: 'Opening & Context',
    desc: 'Welcome, session goals, and introduction to the Tonative Data Academy and African AI data challenges. Facilitated by Cynthia Amol.',
    icon: '🌍',
  },
  {
    time: 'Section 2 · ~10 min',
    title: 'Guest Talk',
    desc: 'A short invited talk highlighting challenges in African dataset creation, community capacity-building initiatives, and sustainable data pipelines.',
    icon: '🎙️',
  },
  {
    time: 'Section 3 · ~35 min',
    title: 'Breakout Discussions',
    desc: 'Participants split into groups around key pipeline stages which encompasses dataset creation & collection, translation & validation & annotation, and dataset usage & evaluation in order to identify challenges, needs, and opportunities.',
    icon: '🤝',
  },
  {
    time: 'Section 4 · ~30 min',
    title: 'Collaborative Roadmap Building',
    desc: 'Groups share key insights and co-develop a shared roadmap for strengthening capacity, improving coordination across language communities, and designing scalable data pipelines.',
    icon: '🗺️',
  },
  {
    time: 'Section 5 · ~10 min',
    title: 'Synthesis & Next Steps',
    desc: 'Key takeaways, opportunities for collaboration, and post-Indaba follow-up plans including a shared resource toolkit and cross-community collaboration network.',
    icon: '💬',
  },
]

const logistics = [
  {
    icon: '📍',
    label: 'Location',
    value: 'Nigeria: Deep Learning Indaba 2026 (in-person only)',
  },
  {
    icon: '🗓️',
    label: 'Format',
    value: 'Forums and dialogues (in-person; virtual or hybrid not supported)',
  },
  {
    icon: '⏱️',
    label: 'Duration',
    value: '1 hour, 30 minutes',
  },
  {
    icon: '🎫',
    label: 'Registration',
    value: 'Via the DLI 2026 conference registration process',
  },
  {
    icon: '📡',
    label: 'AV & Scheduling',
    value: 'Coordinated directly with the Indaba organising team',
  },
]

export default function Indaba2026Page() {
  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-primary-800 relative overflow-hidden py-28">
        {/* Grid overlay */}
        <div className="absolute inset-0">
          <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        </div>

        {/* Floating orbs */}
        <div className="bg-primary-600/20 absolute top-20 right-1/4 h-72 w-72 animate-pulse rounded-full blur-3xl"></div>
        <div
          className="absolute bottom-16 left-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-600/20 blur-3xl"
          style={{ animationDelay: '1.2s' }}
        ></div>
        <div
          className="from-accent-500/15 absolute top-1/3 left-1/3 h-48 w-48 animate-pulse rounded-full bg-linear-to-br to-transparent blur-2xl"
          style={{ animationDelay: '0.6s' }}
        ></div>

        <div className="relative container mx-auto max-w-4xl px-4 text-center">
          {/* Badge */}
          <div className="border-l-primary-100 mx-auto mb-6 w-fit border-l-[3px] pl-3 text-center text-[13px] font-medium tracking-[0.4px] text-white/55">
            Deep Learning Indaba 2026 · Nigeria
          </div>

          <h1 className="mb-5 text-4xl leading-tight font-black tracking-tight text-white md:text-6xl">
            Building Africa's Human
            <br />
            <span className="from-accent-300 to-accent-500 bg-linear-to-r bg-clip-text text-transparent">
              Data Infrastructure
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            A capacity-building workshop at DLI 2026 on community-led dataset creation and
            sustainable AI pipelines focused on strengthening the people, skills, and systems
            Africa's AI future depends on.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://deeplearningindaba.com/2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 rounded-md px-8 py-3 font-semibold text-white transition-colors"
            >
              DLI 2026 Website
            </a>
            <a
              href="#workshop-details"
              className="rounded-md border border-white/30 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Workshop Details
            </a>
          </div>
        </div>
      </section>

      {/* ── About the Workshop ───────────────────────────────────────────── */}
      <section id="workshop-details" className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">About the Workshop</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                The rapid growth of generative AI has intensified demand for high-quality datasets,
                yet progress in African AI remains constrained by gaps in{' '}
                <strong className="text-gray-900">human data infrastructure</strong> - the people,
                skills, and coordinated pipelines required to create, translate, validate, and
                maintain datasets for African languages and contexts.
              </p>
              <p>
                Hosted by <strong className="text-gray-900">Tonative Africa</strong> at the{' '}
                <strong className="text-gray-900">Deep Learning Indaba 2026</strong> in Nigeria,
                this session focuses on capacity building for creators, translators, validators, and
                annotators. Through short talks, breakout discussions, and collaborative roadmap
                design, participants will explore best practices for dataset creation, quality
                assurance, and long-term capacity development across African language communities.
              </p>
              <p>
                The session aims to produce shared guidelines, identify priority challenges, and
                co-develop a roadmap for strengthening Africa's sovereign, sustainable, and locally
                owned AI ecosystems. All participants must be present in person.
              </p>
            </div>

            {/* Key facts */}
            <div className="space-y-4">
              {logistics.map((item, i) => (
                <div
                  key={i}
                  className="border-primary-100 flex items-start gap-4 rounded-xl border bg-gray-50 p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Agenda ───────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Session Agenda</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
            <p className="mt-4 text-lg text-gray-600">
              Full schedule to be confirmed with the Indaba organising team.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="from-primary-300 via-primary-500 absolute top-0 left-6 hidden h-full w-0.5 bg-linear-to-b to-transparent md:block"></div>

            <div className="space-y-6">
              {agenda.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex gap-6 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:ml-16"
                >
                  {/* Timeline dot */}
                  <div className="bg-primary-600 border-primary-200 absolute top-6 -left-[3.25rem] hidden h-4 w-4 rounded-full border-4 md:block"></div>

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl transition-all group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="bg-primary-50 text-primary-700 rounded-md px-2 py-0.5 text-xs font-bold tracking-wide uppercase">
                        {item.time}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Guest Speakers ───────────────────────────────────────────────── */}
      {/* <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Guest Speakers</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
            <p className="mt-4 text-lg text-gray-600">
              Confirmed speakers already attending DLI 2026.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="from-primary-600 to-primary-800 h-2 w-full bg-linear-to-r"></div>

                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="from-primary-600 to-primary-800 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br text-xl font-black text-white shadow-lg">
                      {speaker.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">{speaker.name}</h3>
                      <p className="font-semibold text-gray-500">{speaker.org}</p>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">{speaker.bio}</p>

                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Organisers ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Workshop Organisers</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {organizers.map((org, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="from-primary-600 to-primary-800 h-2 w-full bg-linear-to-r"></div>

                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    {'image' in org && org.image ? (
                      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-white">
                        <NextImage
                          src={org.image}
                          alt={org.name}
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="from-primary-600 to-primary-800 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br text-lg font-black text-white shadow-md">
                        {'initials' in org ? org.initials : ''}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg leading-tight font-black text-gray-900">{org.name}</h3>
                      <p className="text-sm font-semibold text-gray-500">{org.occupation}</p>
                      <p className="text-primary-600 text-xs font-bold tracking-wide uppercase">
                        {org.role}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{org.bio}</p>

                  {org.linkedin && (
                    <a
                      href={org.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Audience ──────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Who Should Attend</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
            <p className="mt-4 text-lg text-gray-600">
              This workshop is designed for a broad community of African AI practitioners and
              contributors.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🔬',
                label: 'Researchers',
                desc: 'Working on African language technologies',
              },
              {
                icon: '✏️',
                label: 'Dataset Creators & Annotators',
                desc: 'Building training data for African languages',
              },
              {
                icon: '🌐',
                label: 'Translators & Validators',
                desc: 'Ensuring linguistic accuracy and contextual relevance',
              },
              {
                icon: '💻',
                label: 'Open-Source Contributors',
                desc: 'Supporting community-driven AI tools and pipelines',
              },
              {
                icon: '🎓',
                label: 'Students & Educators',
                desc: 'Working on data-centric AI in academic settings',
              },
              {
                icon: '🏗️',
                label: 'AI Practitioners',
                desc: 'Building AI products and services for African users',
              },
              {
                icon: '📖',
                label: 'African Linguists',
                desc: 'With an interest in data creation for their languages',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-primary-100 flex items-start gap-4 rounded-xl border bg-gray-50 p-5"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="mt-0.5 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expected Outputs ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Expected Outputs</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
            <p className="mt-4 text-lg text-gray-600">
              The workshop aims to produce tangible, community-owned resources and connections.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '📋',
                title: 'Community Guidelines',
                desc: 'Shared guidelines for dataset creation and validation across African language communities.',
              },
              {
                icon: '🧰',
                title: 'Resource & Toolkit List',
                desc: 'A curated list of tools, frameworks, and training resources for African language data pipelines.',
              },
              {
                icon: '🗺️',
                title: 'Capacity-Building Roadmap',
                desc: 'An actionable roadmap for scaling capacity-building initiatives and governance structures.',
              },
              {
                icon: '🤝',
                title: 'Collaboration Network',
                desc: 'A cross-community network linking language teams, researchers, and practitioners.',
              },
              {
                icon: '📄',
                title: 'Post-Indaba Summary Report',
                desc: 'A public synthesis of insights and recommendations to inform future collaborations and publications.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements / What to Expect ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="bg-primary-600/20 absolute top-1/4 right-1/3 h-96 w-96 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-black text-white md:text-5xl">
              Participation Requirements
            </h2>
            <p className="text-lg text-gray-400">What you need to know before attending</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'In-Person Attendance Required',
                desc: 'This workshop is exclusively delivered in person at DLI 2026 in Nigeria. Virtual or hybrid participation cannot be supported.',
                icon: '🎟️',
              },
              {
                title: 'Register via DLI 2026',
                desc: 'Workshop participation is through the official Deep Learning Indaba 2026 registration. See the DLI website for registration deadlines and details.',
                icon: '📝',
              },
              {
                title: 'Speaker & Organiser Deadline',
                desc: 'All confirmed speakers and organisers must finalise their participation by the ticket allocation deadline communicated by the DLI team.',
                icon: '📅',
              },
              {
                title: 'AV & Logistics',
                desc: 'Audio-visual requirements and scheduling will be coordinated directly with the Indaba organising team ahead of the event.',
                icon: '🎙️',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-primary-700/40 group relative overflow-hidden rounded-2xl border bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-4xl font-black text-gray-900">Get Involved</h2>
          <div className="from-primary-500 to-primary-700 mx-auto mb-6 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Interested in collaborating, co-organising, or presenting at this workshop? Reach out to
            the Tonative team... We want to hear from you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact-form"
              className="bg-primary-600 hover:bg-primary-500 rounded-lg px-8 py-3 font-semibold text-white transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="https://deeplearningindaba.com/2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg border px-8 py-3 font-semibold transition-colors"
            >
              DLI 2026 Website
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
