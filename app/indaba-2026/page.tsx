import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'DLI 2026 Workshop - Tonative',
  description:
    'Tonative at Deep Learning Indaba 2026, Nigeria. Workshop on community-driven African language data curation, human-in-the-loop AI, and indigenous dataset building.',
})

const organizers = [
  {
    name: 'Chinenye Anikwenze',
    role: 'Lead Organiser',
    bio: 'Founder of Tonative and advocate for inclusive AI. Her work centres on human-in-the-loop validation and community-driven dataset building for African languages.',
    linkedin: 'https://www.linkedin.com/in/chinenye-anikwenze/',
    avatar: 'CA',
    color: 'from-primary-600 to-primary-800',
  },
  {
    name: 'Cynthia Amol',
    role: 'Organiser',
    bio: 'AI researcher and community builder focused on bridging the gap between African language communities and modern NLP research.',
    linkedin: 'https://www.linkedin.com/in/cynthia-amol/',
    avatar: 'CA',
    color: 'from-accent-500 to-accent-700',
  },
]

const speakers = [
  {
    name: 'Samuel Rutunda',
    role: 'Digital Umuganda',
    bio: "Building Rwanda's community-driven digital infrastructure initiative — Digital Umuganda — which harnesses collective civic action to power open language datasets and AI tools for Kinyarwanda.",
    linkedin: 'https://rw.linkedin.com/in/samuel-rutunda-07bb818a',
    avatar: 'SR',
    color: 'from-teal-600 to-cyan-700',
    org: 'Digital Umuganda',
  },
  {
    name: 'Lilian Wanzare',
    role: 'KenCorpus',
    bio: 'Researcher at KenCorpus dedicated to building large-scale corpora for Kenyan languages, enabling downstream NLP tasks and lowering the barrier for researchers working with East African language data.',
    linkedin: 'https://ke.linkedin.com/in/liliwanzie',
    avatar: 'LW',
    color: 'from-purple-600 to-pink-600',
    org: 'KenCorpus',
  },
]

const agenda = [
  {
    time: 'Opening',
    title: 'Welcome & Framing the Problem',
    desc: 'Why African languages remain critically under-resourced in AI — and what community-driven curation can change.',
    icon: '🌍',
  },
  {
    time: 'Talk 1',
    title: 'Digital Umuganda: Civic Tech for Language Data',
    desc: "Samuel Rutunda on how Rwanda's collective digital action model creates sustainable, community-owned language datasets.",
    icon: '🤝',
  },
  {
    time: 'Talk 2',
    title: 'KenCorpus: Building East African Language Corpora',
    desc: 'Lilian Wanzare on corpus construction pipelines, annotation challenges, and lessons from Kenyan language data collection.',
    icon: '📚',
  },
  {
    time: 'Talk 3',
    title: 'Human-in-the-Loop AI for African Languages',
    desc: 'Chinenye Anikwenze on how linguist-led validation catches semantic collapse and cultural misrepresentation in AI outputs.',
    icon: '🔬',
  },
  {
    time: 'Workshop',
    title: 'Hands-On: Annotate, Validate, Extend',
    desc: 'Participants work directly with real African language data — annotating, flagging errors, and experiencing the curation workflow first-hand.',
    icon: '⚙️',
  },
  {
    time: 'Discussion',
    title: 'Open Floor: Building Collective Infrastructure',
    desc: 'Collaborative session on shared tooling, ethical data practices, and how attendees can plug into the broader African NLP ecosystem.',
    icon: '💬',
  },
]

const logistics = [
  {
    icon: '📍',
    label: 'Location',
    value: 'Nigeria — Deep Learning Indaba 2026 (in-person only)',
  },
  {
    icon: '🗓️',
    label: 'Format',
    value: 'In-person workshop (virtual or hybrid not supported)',
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
          <div className="bg-accent-500/20 border-accent-400/40 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
            <span className="bg-accent-400 h-1.5 w-1.5 rounded-full"></span>
            Deep Learning Indaba 2026 · Nigeria
          </div>

          <h1 className="mb-5 text-4xl leading-tight font-black tracking-tight text-white md:text-6xl">
            Closing the Data Gap:
            <br />
            <span className="from-accent-300 to-accent-500 bg-linear-to-r bg-clip-text text-transparent">
              Community-Driven Curation
            </span>
            <br />
            for African Languages
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            A hands-on workshop at DLI 2026 exploring how native speakers, linguists, and AI
            researchers can build the language infrastructure Africa's AI future depends on.
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
                Despite the rapid growth of AI globally, the majority of African languages remain
                critically absent from training datasets, benchmarks, and deployed systems. This
                workshop brings together practitioners actively building the data infrastructure to
                change that.
              </p>
              <p>
                Hosted by <strong className="text-gray-900">Tonative</strong> at the{' '}
                <strong className="text-gray-900">Deep Learning Indaba 2026</strong> in Nigeria,
                this session combines short talks from leading African NLP projects with a
                participatory hands-on exercise — giving attendees direct experience in the
                annotation, validation, and extension of real African language data.
              </p>
              <p>
                All participants must be present in person. The workshop cannot be delivered in
                virtual or hybrid format.
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
      <section className="bg-white py-20">
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
                {/* Top accent strip */}
                <div className={`h-2 w-full bg-linear-to-r ${speaker.color}`}></div>

                <div className="p-8">
                  {/* Avatar + name */}
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br ${speaker.color} text-xl font-black text-white shadow-lg`}
                    >
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
      </section>

      {/* ── Organisers ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-black text-gray-900">Workshop Organisers</h2>
            <div className="from-primary-500 to-primary-700 h-1.5 w-24 rounded-full bg-linear-to-r"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {organizers.map((org, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`h-2 w-full bg-linear-to-r ${org.color}`}></div>

                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br ${org.color} text-xl font-black text-white shadow-lg`}
                    >
                      {org.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">{org.name}</h3>
                      <p className="font-semibold text-gray-500">{org.role}</p>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">{org.bio}</p>

                  <a
                    href={org.linkedin}
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
            the Tonative team — we want to hear from you.
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
