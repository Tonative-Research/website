'use client'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { useState } from 'react'
import { components } from 'components/MDXComponents'
import { Authors } from '.contentlayer/generated'

export default function Team({ authors }: { authors: Authors[] }) {
  const [selectedMember, setSelectedMember] = useState<Authors | null>(null)

  return (
    <>
      {/* Meet Our Team */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">Meet Our Team</h2>
            <div className="from-primary-500 to-primary-700 mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {authors.map((member, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedMember(member)}
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={
                        member.avatar ||
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600'
                      }
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Content overlay */}
                    <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                      <h3 className="mb-2 text-2xl font-bold transition-all duration-300 group-hover:font-black">
                        {member.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/90">{member.occupation}</p>
                    </div>

                    {/* Plus button */}
                    <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-transform hover:scale-110">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={() => setSelectedMember(null)}
        >
          {/* Main Modal Container: Full Screen Height and Width */}
          <div
            className="relative flex h-full max-h-screen w-full overflow-auto bg-white shadow-2xl md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Absolute Close Button - Sticks to top right of the whole modal */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-0 right-0 z-30 flex h-16 w-16 items-center justify-center bg-gray-100 text-gray-900 transition-colors hover:bg-red-600 hover:text-white"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex h-full w-full flex-col md:flex-row">
              {/* Left: STATIC IMAGE SECTION - Full Height */}
              <div className="relative h-1/2 w-full md:h-full md:w-2/5 lg:w-1/2">
                <img
                  src={selectedMember?.avatar || '/static/images/placeholder.jpg'}
                  alt={selectedMember?.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right: CONTENT SIDE - Fixed Header + Scrollable Bio */}
              <div className="flex w-full flex-col bg-white md:h-full md:w-3/5 lg:w-1/2">
                {/* 1. FIXED TOP SECTION (Name & Socials) */}
                <div className="border-b border-gray-100 p-8 pt-12 md:p-12 md:pb-6">
                  <div className="text-primary-600 mb-2 text-xs font-bold tracking-widest uppercase">
                    {selectedMember?.company || 'Team Member'}
                  </div>

                  <h2 className="text-accent-500 mb-4 text-5xl font-extrabold lg:text-6xl">
                    {selectedMember?.name}
                  </h2>

                  <p className="mb-6 text-xl font-medium text-gray-600">
                    {selectedMember?.occupation}
                  </p>

                  <div className="flex items-center gap-4">
                    {selectedMember?.linkedin && (
                      <a
                        href={selectedMember?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-primary-800 bg-primary-700 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:scale-110"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember?.github && (
                      <a
                        href={selectedMember?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-primary-800 bg-primary-700 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:scale-110"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* 2. SCROLLABLE BIO AREA */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 md:pt-6">
                  <div className="prose prose-lg prose-gray dark:prose-invert max-w-none pb-20 text-gray-800">
                    {selectedMember?.body?.code ? (
                      <MDXLayoutRenderer
                        code={selectedMember.body.code}
                        components={components}
                        toc={selectedMember.toc}
                      />
                    ) : (
                      <p>Biography content is missing or not yet compiled.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
