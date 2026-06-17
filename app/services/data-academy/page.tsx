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

export const metadata = genPageMetadata({
  title: 'Tonative Data Academy',
  description:
    'Join the Tonative Data Academy, an intensive program in African Language Data Curation for AI and NLP. Learn to collect, annotate, and curate African language data. Join the next cohort.',
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
    week: 'Week 1',
    date: 'Mar 9',
    topic: 'Kick-off Event & Prerequisites',
    description: 'Orientation, program overview, and prerequisite materials to get you started.',
    icon: '🚀',
  },
  {
    week: 'Week 1',
    date: 'Mar 10',
    topic: 'African Languages & Linguistics for NLP',
    description:
      'Explore the linguistic diversity of African languages and their role in natural language processing.',
    icon: '🌍',
  },
  {
    week: 'Week 2',
    date: 'Mar 17',
    topic: 'Introduction to Data & AI Fundamentals',
    description: 'Core concepts of data science and artificial intelligence applied to language.',
    icon: '🤖',
  },
  {
    week: 'Week 3',
    date: 'Mar 24',
    topic: 'African Data Collection & Preparation',
    description:
      'Hands-on techniques for collecting, cleaning, and preparing African language data.',
    icon: '📊',
  },
  {
    week: 'Week 4',
    date: 'Mar 31',
    topic: 'Data Ethics and Governance',
    description: 'Critical frameworks for ethical data practices, consent, and responsible AI.',
    icon: '⚖️',
  },
  {
    week: 'Week 5',
    date: 'Apr 7',
    topic: 'Data Annotation Tools & Techniques',
    description: 'Practical training on industry-standard no-code annotation tools and workflows.',
    icon: '🏷️',
  },
  {
    week: 'Week 6',
    date: 'Apr 14',
    topic: 'Capstone Project',
    description:
      'Apply everything you have learned in a final project that contributes to open-source African language datasets.',
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

            {/* Stats row */}
            <div className="mb-12 flex flex-wrap justify-center gap-8 text-center">
              {[
                { value: '6', label: 'Weeks' },
                { value: '7', label: 'Modules' },
                { value: '75%', label: 'Min. Attendance' },
                // { value: '$45', label: '2nd Cohort' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-accent-400 text-3xl font-bold">{stat.value}</span>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>

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
                  This program is designed to be completed over 6 weeks through a blend of{' '}
                  <strong>live online sessions</strong>, self-paced reading materials, and
                  interactive projects.
                </p>
                <p className="leading-relaxed">
                  All live sessions are conducted via Google Meet links shared through Google
                  Classroom, where you will find all course materials, assignments, and resources.
                </p>
                <p className="leading-relaxed">
                  Live sessions run on{' '}
                  <strong>Tuesdays and/or Thursdays from 5:00 PM to 6:30 PM WAT</strong> (7:00 PM –
                  8:30 PM EAT), accommodating participants across various African time zones.
                </p>
                <p className="leading-relaxed">
                  Every live session includes a compulsory 10-minute break after the first 45
                  minutes. All classes are recorded, transcribed, and shared via email.
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
                    <span>Tuesdays and/or Thursdays, weekly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="text-primary-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>5:00 PM – 6:30 PM WAT / 7:00 PM – 8:30 PM EAT</span>
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
                    <span>Take-home assignments given on Thursdays, due Monday 11:59 PM WAT</span>
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
              7 sessions across 6 weeks, covering everything from African linguistics to capstone
              project delivery.
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
                        {/* <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.date}, 2026
                        </span> */}
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
                Each module has a dedicated primary tutor and a secondary backup tutor.
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
                      <th className="px-4 py-3 text-left font-semibold">Secondary Tutor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {[
                      {
                        week: 'Week 1',
                        module: 'Kick-off Event',
                        primary: 'Sharon Ibejih',
                        secondary: 'Joy Olusanya',
                      },
                      {
                        week: 'Week 1',
                        module: 'African Languages & Linguistics for NLP',
                        primary: 'Mwihaki Thuo',
                        secondary: 'Odunayo Buliaminu',
                      },
                      {
                        week: 'Week 2',
                        module: 'Introduction to Data & AI Fundamentals',
                        primary: 'Joy Olusanya',
                        secondary: 'Mwihaki Thuo',
                      },
                      {
                        week: 'Week 3',
                        module: 'African Data Collection & Preparation',
                        primary: 'Odunayo Buliaminu',
                        secondary: 'Cynthia Amol',
                      },
                      {
                        week: 'Week 4',
                        module: 'Data Ethics and Governance',
                        primary: 'Doreen Abiero (Guest)',
                        secondary: 'Cynthia Amol',
                      },
                      {
                        week: 'Week 5',
                        module: 'Data Annotation Tools & Techniques',
                        primary: 'Ezekiel Maina (Guest)',
                        secondary: 'Sharon Ibejih',
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
                          TBA
                        </td>
                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400">TBA</td>
                        {/* <td className="text-primary-600 dark:text-primary-400 px-4 py-3 font-medium">
                          {row.primary}
                        </td>
                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                          {row.secondary}
                        </td> */}
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
                  'WhatsApp group for announcements and informal discussions',
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
            <div className="mb-6 text-sm text-gray-400">Limited spots available</div>

            <ul className="mb-8 space-y-3 text-left text-sm text-gray-300">
              {[
                '6 weeks of live instruction',
                'Access to all course materials',
                'Expert tutor support',
                'Certificate of completion',
                'WhatsApp community access',
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
