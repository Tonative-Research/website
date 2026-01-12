'use client'
import { useState } from 'react'
import DataCuratorImg from '@/data/images/home-data-curator.png'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function DataCurator() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const benefits = [
    {
      title: 'Get Trained',
      description:
        'Complete our linguistics training program to learn about data quality standards before starting your first project.',
    },
    {
      title: 'Join Our Network',
      description:
        'Upon certification, you will join our community of expert curators who receive project assignments in their languages.',
    },
    {
      title: 'Language Supervision',
      description:
        'Work with a supervisor who speaks your language and provides guidance and support throughout your projects.',
    },
    {
      title: 'Data Protection',
      description:
        'Our secure pipeline ensures your personal information remains confidential in all curated datasets.',
    },
    {
      title: 'Fair Compensation',
      description:
        'Receive competitive hourly rates that are equitable across all contributors, with payment varying by project type.',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:pb-32">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2
              className="text-primary-900 mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              Become a Data Curator,{' '}
              <span className="text-accent-600 relative inline-block">
                <span className="relative z-10">Shape AI's Future</span>
                <span className="bg-accent-200 absolute bottom-2 left-0 -z-0 h-3 w-full"></span>
              </span>
            </h2>

            <p
              className="mb-8 text-lg leading-relaxed text-gray-700"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We are constantly accepting applications from fluent African language speakers or
              writers who are interested in translating, validating or organizing data resources
              that can be used in improving AI models. No prior experience is required.
            </p>

            {/* Stats */}
            <div className="mb-10 flex gap-8">
              <div>
                <div
                  className="text-accent-600 mb-1 text-5xl font-bold"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  20+
                </div>
                <div
                  className="text-sm tracking-wider text-gray-600 uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Languages
                </div>
              </div>
              <div>
                <div
                  className="text-primary-600 mb-1 text-5xl font-bold"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  300+
                </div>
                <div
                  className="text-sm tracking-wider text-gray-600 uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Curators
                </div>
              </div>
            </div>

            {/* Accordion Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <span
                      className="text-primary-900 text-lg font-bold"
                      style={{ fontFamily: 'var(--font-header)' }}
                    >
                      {openIndex === idx ? '−' : '+'} {benefit.title}
                    </span>
                  </button>

                  {openIndex === idx && (
                    <div className="px-6 pt-2 pb-5">
                      <p
                        className="pl-6 leading-relaxed text-gray-700"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={siteMetadata.dataCuratorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-600 hover:bg-accent-700 mt-8 inline-block rounded px-8 py-3 font-bold text-white transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Apply Now
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={DataCuratorImg}
                alt="African language data curator"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
