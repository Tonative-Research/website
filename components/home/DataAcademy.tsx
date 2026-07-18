'use client'
import Link from 'next/link'

export default function DataAcademy() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="from-primary-900 via-primary-800 relative overflow-hidden rounded-2xl bg-linear-to-br to-slate-950 px-8 py-12 sm:px-12 lg:px-16">
          {/* Background patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[42px_42px]"></div>
          <div className="bg-primary-600/20 absolute top-0 right-0 h-64 w-64 animate-pulse rounded-full blur-3xl"></div>

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <span className="bg-accent-500 rounded-full px-2 py-0.5 text-xs font-bold">
                  New
                </span>
                <span>2nd Cohort - Now Enrolling</span>
              </div>
              <h2
                className="mb-3 text-3xl font-bold text-white sm:text-4xl"
                style={{ fontFamily: 'var(--font-header)' }}
              >
                Tonative Data Academy
              </h2>
              <p className="text-base leading-relaxed text-gray-300">
                A 6-week intensive program in African Language Data Curation for AI. Learn to
                collect, annotate, and curate African language data — no prior experience required.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/services/data-academy">
                <button className="bg-accent-500 hover:bg-accent-600 w-full cursor-pointer rounded-lg px-8 py-3.5 text-sm font-bold text-white transition-colors sm:w-auto">
                  Join the Next Cohort
                </button>
              </Link>
              <Link href="/services/data-academy#curriculum">
                <button className="w-full cursor-pointer rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto">
                  View Curriculum
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
