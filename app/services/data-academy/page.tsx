import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import {
  BookOpen,
  Users,
  Clock,
  Award,
  CheckCircle,
  Calendar,
  ChevronRight,
  Globe,
  Shield,
  Lightbulb,
  BarChart3,
} from 'lucide-react'
import siteMetadata from 'data/siteMetadata'
import CountdownToStart from 'components/data-academy/CountdownToStart'

export const metadata = genPageMetadata({
  title: 'Tonative Data Academy',
  description:
    "Learn to curate AI-ready language data through Tonative's 6-week Data Academy. No prior experience required. Graduates join our expert network and gain access to paid commercial projects across 20+ African languages.",
  keywords: [
    'Tonative Data Academy',
    'African language data curation course',
    'NLP training program Africa',
    'African language annotation training',
    'data curation certificate Africa',
    'learn African language AI',
    'African NLP course online',
    'language data annotation program',
    'AI training Africa',
    'data curation for beginners Africa',
  ],
})

const curriculumWeeks = [
  {
    week: 'Pre-requisite',
    date: 'Sep 6',
    topic: 'Onboarding & Program Kick-off',
    description:
      'Introduction to the program and soft skills, including the Google Workspace environment and communication channels such as email and Slack.',
    icon: '🚀',
  },
  {
    week: 'Week 1',
    date: 'Sep 7 – 11',
    topic: 'Introduction to Language',
    description:
      'African languages and linguistics, phonetics, morphology, orthography, and language variation (dialects, registers, sociolinguistics).',
    icon: '🌍',
  },
  {
    week: 'Week 2',
    date: 'Sep 14 – 18',
    topic: 'Introduction to NLP',
    description:
      'Introduction to Artificial Intelligence, Machine Learning, and Deep Learning; intro to NLP; structured vs. unstructured and quantitative vs. qualitative data; data preprocessing; types of language datasets (audio, text, MT) and corpus-based approaches; training vs. evaluation (benchmarking) datasets; and dataset documentation, including Hugging Face.',
    icon: '🤖',
  },
  {
    week: 'Week 3',
    date: 'Sep 21 – 25',
    topic: 'African Data Collection & Preparation',
    description:
      'Audio data curation (recording tools, audio format, background noise, noise cancellation, sample rates) and text data types and curation methods; data validation for audio and text through automated and manual methods; and quality control frameworks.',
    icon: '📊',
  },
  {
    week: 'Week 4',
    date: 'Sep 28 – Oct 2',
    topic: 'Data Ethics and Governance',
    description:
      'Data policy and governance frameworks, data law, and data quality principles (consistency, coverage, edge cases); ethics around consent, data ownership, cultural sensitivity, and community benefit; and equitable licensing frameworks for African data, including Creative Commons and novel frameworks like NOODL and Esethu.',
    icon: '⚖️',
  },
  {
    week: 'Week 5',
    date: 'Oct 5 – 9',
    topic: 'Data Annotation Tools & Techniques',
    description:
      'Hands-on training with industry-standard tools (Label Studio, Prodigy, or custom platforms); text classification and PoS tagging; named entity recognition for African contexts; sentiment analysis considerations across cultures; machine translation annotation and evaluation; plus further reading on speech, image, and video annotation.',
    icon: '🏷️',
  },
  {
    week: 'Week 6',
    date: 'Oct 12 – 16',
    topic: 'Capstone Project',
    description:
      'Data documentation and open-source data translation, validation, and publication on Hugging Face to close out the program.',
    icon: '🎓',
  },
]

const objectives = [
  'Appreciate the linguistic diversity of African languages and their cultural significance',
  'Understand the fundamentals of data collection, annotation, and validation',
  'Apply no-code tools and techniques to curate African language data for AI applications',
  'Critically evaluate the ethical considerations around African language data',
  'Contribute meaningfully to open-source African language datasets',
]

const programHighlights = [
  {
    icon: Clock,
    title: '6-Week Intensive',
    description: 'Structured, focused curriculum designed to get you job-ready fast',
  },
  {
    icon: Globe,
    title: 'Live Online Sessions',
    description: 'Weekly live classes on Google Meet, recorded and shared for future reference',
  },
  {
    icon: Users,
    title: 'Expert Tutors',
    description: 'Learn from leading African linguists and NLP practitioners',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn a certificate upon completing 75% attendance and program requirements',
  },
  {
    icon: Lightbulb,
    title: 'No Prior Experience',
    description:
      'Open to all backgrounds - engineers, linguistics, communities, or complete beginners',
  },
  {
    icon: Shield,
    title: 'Code of Conduct',
    description: 'A respectful, inclusive, and professionally moderated learning environment',
  },
]

export default function DataAcademyPage() {
  return (
    <main className="w-full bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="from-primary-900 via-primary-800 relative overflow-hidden bg-linear-to-br to-slate-950 py-20 lg:py-32">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[42px_42px]"></div>
        <div className="bg-primary-600/20 absolute top-20 right-1/4 h-72 w-72 animate-pulse rounded-full blur-3xl"></div>
        <div
          className="absolute bottom-20 left-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-600/20 blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="relative container mx-auto px-6 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <span className="bg-accent-500 rounded-full px-2 py-0.5 text-xs font-bold text-white">
                2nd Cohort
              </span>
              <span>Applications Open</span>
            </div>

            <h1
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              Tonative <span className="text-accent-400 relative inline-block">Data Academy</span>
            </h1>

            <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-300">
              African Language Data Curation for AI
            </p>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400">
              A 6-week intensive program equipping you with skills to collect, annotate, and curate
              African language data for artificial intelligence and natural language processing
              applications.
            </p>

            {/* Countdown to kickoff */}
            <CountdownToStart />

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#enroll">
                <button className="bg-accent-500 hover:bg-accent-600 inline-flex cursor-pointer items-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:shadow-xl">
                  Join the Next Cohort
                  <ChevronRight className="h-5 w-5" />
                </button>
              </Link>
              <Link href="#curriculum">
                <button className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  View Curriculum
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-primary-900 mb-4 text-3xl font-bold sm:text-4xl dark:text-white"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              Why Join the Data Academy?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Designed for participants from diverse backgrounds - no prior technical experience
              required.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="bg-primary-50 dark:bg-primary-900/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <item.icon className="text-primary-600 dark:text-primary-400 h-6 w-6" />
                </div>
                <h3
                  className="text-primary-900 mb-2 text-lg font-bold dark:text-white"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
            {/* Left: Overview text */}
            <div>
              <h2
                className="text-primary-900 mb-6 text-3xl font-bold sm:text-4xl dark:text-white"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                Program Overview
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  This program is designed to be completed over 6 weeks (plus a pre-requisite
                  onboarding session) through a blend of <strong>live online sessions</strong>,
                  self-paced reading materials, and interactive projects. Onboarding takes place on{' '}
                  <strong>September 6, 2026</strong>, with weekly teaching running from{' '}
                  <strong>September 7 to October 16, 2026</strong>. Registration closes{' '}
                  <strong>August 30, 2026</strong>.
                </p>
                <p className="leading-relaxed">
                  All live sessions are conducted via Google Meet links shared through Google
                  Classroom, where you will find all course materials, assignments, and resources.
                </p>
                <p className="leading-relaxed">
                  Live sessions run on <strong>Tuesdays and Thursdays</strong> at minimum, with{' '}
                  <strong>Friday</strong> as an optional third class (maximum of three classes per
                  week). Each class lasts <strong>1 hour 30 minutes</strong>: 45 minutes of teaching
                  followed by 35 minutes of classwork or interactive session.
                </p>
                <p className="leading-relaxed">
                  Tutors post all teaching materials for the week on Google Classroom, and an
                  assignment is given at the end of every class, marked and released the following
                  Friday.
                </p>
              </div>

              {/* Session schedule details */}
              <div className="bg-primary-50 dark:bg-primary-900/10 border-primary-200 dark:border-primary-800 mt-8 rounded-xl border p-6">
                <h3
                  className="text-primary-900 mb-4 font-bold dark:text-white"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  Session Details
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Calendar className="text-primary-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Tuesdays and Thursdays, with an optional Friday session, weekly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="text-primary-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Each class runs 1 hr 30 mins (45 min teaching + 35 min classwork)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="text-primary-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>All materials via Google Classroom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="text-primary-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Certificate upon 75% attendance completion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Objectives */}
            <div>
              <h2
                className="text-primary-900 mb-6 text-3xl font-bold sm:text-4xl dark:text-white"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                What You Will Learn
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                By the end of the program, participants will be able to:
              </p>
              <ul className="space-y-4">
                {objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-accent-500 mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="leading-relaxed text-gray-700 dark:text-gray-300">{obj}</span>
                  </li>
                ))}
              </ul>

              {/* Assessments */}
              <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3
                  className="text-primary-900 mb-3 font-bold dark:text-white"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  Assessments
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <BarChart3 className="text-accent-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>In-class quizzes at tutors discretion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="text-accent-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>
                      Assignment given after every class, scores released the following Friday
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="text-accent-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Capstone project in Week 6</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-primary-900 mb-4 text-3xl font-bold sm:text-4xl dark:text-white"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              Curriculum Structure
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              A pre-requisite onboarding session plus 6 weekly modules, running September 6 –
              October 16, 2026, covering everything from African linguistics to capstone project
              delivery.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="from-primary-500 absolute top-0 bottom-0 left-6 w-0.5 bg-linear-to-b to-transparent sm:left-8"></div>

              <div className="space-y-6">
                {curriculumWeeks.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 sm:gap-8">
                    {/* Timeline dot */}
                    <div className="bg-primary-600 border-primary-200 relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-white text-lg shadow-sm dark:border-gray-900">
                      {item.icon}
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                      <div className="mb-1 flex flex-wrap items-center gap-3">
                        <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full px-3 py-0.5 text-xs font-semibold">
                          {item.week}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.date}, 2026
                        </span>
                      </div>
                      <h3
                        className="text-primary-900 mb-1 font-bold dark:text-white"
                        style={{ fontFamily: 'var(--font-header)' }}
                      >
                        {item.topic}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutor Structure */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2
                className="text-primary-900 mb-4 text-3xl font-bold sm:text-4xl dark:text-white"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                Your Tutors
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Each module has a dedicated primary tutor and a backup tutor.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Week</th>
                      <th className="px-4 py-3 text-left font-semibold">Module</th>
                      <th className="px-4 py-3 text-left font-semibold">Primary Tutor</th>
                      <th className="px-4 py-3 text-left font-semibold">Backup Tutor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {[
                      {
                        week: 'Pre-requisite',
                        module: 'Onboarding & Program Kick-off',
                        primary: 'Sharon Ibejih',
                        secondary: 'Naomi',
                      },
                      {
                        week: 'Week 1',
                        module: 'Introduction to Language',
                        primary: 'Cynthia Thuo',
                        secondary: 'Odunayo',
                      },
                      {
                        week: 'Week 2',
                        module: 'Introduction to NLP',
                        primary: 'Sharon Ibejih',
                        secondary: 'Cynthia Thuo',
                      },
                      {
                        week: 'Week 3',
                        module: 'African Data Collection & Preparation',
                        primary: 'Odunayo',
                        secondary: 'Cynthia Amol',
                      },
                      {
                        week: 'Week 4',
                        module: 'Data Ethics and Governance',
                        primary: 'Doreen (Guest)',
                        secondary: 'Cynthia Amol',
                      },
                      {
                        week: 'Week 5',
                        module: 'Data Annotation Tools & Techniques',
                        primary: 'Sharon Ibejih',
                        secondary: '—',
                      },
                      {
                        week: 'Week 6',
                        module: 'Capstone Project',
                        primary: 'Cynthia Amol',
                        secondary: '—',
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                          {row.week}
                        </td>
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.module}</td>
                        <td className="text-primary-600 dark:text-primary-400 px-4 py-3 font-medium">
                          {row.primary}
                        </td>
                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                          {row.secondary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements & Communication */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {/* Technical Requirements */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3
                className="text-primary-900 mb-4 text-xl font-bold dark:text-white"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                Technical Requirements
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  'Laptop or desktop computer',
                  'Stable internet connection',
                  'A Google account',
                  'Join all class links before deadline',
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-accent-500 mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Communication */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3
                className="text-primary-900 mb-4 text-xl font-bold dark:text-white"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                Communication Channels
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  'Course materials and assignments via Google Classroom',
                  'Slack for announcements and informal discussions',
                  'All live classes recorded and shared via email',
                  `Support: Email ${siteMetadata.academyEmail} for any questions or issues`,
                ].map((ch, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary-500 mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment / CTA Section */}
      <section
        id="enroll"
        className="from-primary-900 via-primary-800 bg-linear-to-br to-slate-950 py-20"
      >
        <div className="container mx-auto px-6 text-center sm:px-8">
          <h2
            className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            Ready to Shape the <span className="text-accent-400">Future of African AI?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            Join the next cohort of the Tonative Data Academy. No prior experience required, just a
            passion for African languages and AI.
          </p>

          {/* Pricing / Enrollment Card */}
          <div className="mx-auto mb-10 max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-2 text-sm font-medium tracking-wider text-gray-300 uppercase">
              2nd Cohort
            </div>
            <div className="mb-1 text-5xl font-bold text-white">$45</div>
            <div className="mb-6 text-sm text-gray-400">
              Limited spots available — registration closes August 30, 2026
            </div>

            <ul className="mb-8 space-y-3 text-left text-sm text-gray-300">
              {[
                '6 weeks of live instruction',
                'Access to all course materials',
                'Expert tutor support',
                'Certificate of completion',
                'Slack community access',
                'Recorded class replays',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-accent-400 h-4 w-4 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="https://forms.gle/6GEQ43fD5pTryVvq5" target="_blank" rel="noopener noreferrer">
              <button className="bg-accent-500 hover:bg-accent-600 w-full rounded-lg py-4 text-base font-bold text-white shadow-lg transition-all hover:shadow-xl">
                Join the Next Cohort
              </button>
            </a>

            <p className="mt-4 text-xs text-gray-400">
              Questions? Email{' '}
              <a
                href={`mailto:${siteMetadata.academyEmail}`}
                className="text-accent-400 underline hover:text-white"
              >
                {siteMetadata.academyEmail}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
