'use client'

import { useEffect, useState } from 'react'
import NextImage from 'next/image'

type GalleryPhoto = {
  src: string
  alt: string
  category: string
}

const photos: GalleryPhoto[] = [
  // Tonative Group Picture
  {
    src: '/static/images/dli2026/tonative_dli.jpg',
    alt: 'Workshop participants posing together at DLI 2026',
    category: 'Tonative Group Picture',
  },
  {
    src: '/static/images/dli2026/tonative_dli2026.jpg',
    alt: 'Workshop participants posing together at DLI 2026',
    category: 'Tonative Group Picture',
  },
  {
    src: '/static/images/dli2026/tonative_team.jpg',
    alt: 'Tonative Africa team group photo at DLI 2026',
    category: 'Tonative Group Picture',
  },
  // Community Booth
  {
    src: '/static/images/dli2026/booth_1.jpg',
    alt: 'Tonative team members at the community booth talking with attendees',
    category: 'Community Booth',
  },
  {
    src: '/static/images/dli2026/booth_2.jpg',
    alt: 'Visitors exploring the Tonative booth display',
    category: 'Community Booth',
  },
  {
    src: '/static/images/dli2026/booth_3.jpg',
    alt: 'Booth conversation about African language datasets',
    category: 'Community Booth',
  },
  {
    src: '/static/images/dli2026/booth_4.jpg',
    alt: 'Tonative booth setup at Deep Learning Indaba 2026',
    category: 'Community Booth',
  },
  {
    src: '/static/images/dli2026/booth_5.jpg',
    alt: 'Attendees signing up as contributors at the booth',
    category: 'Community Booth',
  },
  {
    src: '/static/images/dli2026/booth_6.jpg',
    alt: 'Team member demoing the Tonative platform at the booth',
    category: 'Community Booth',
  },

  // Dr. Wanzare's Keynote
  {
    src: '/static/images/dli2026/keynote_speech_1.jpg',
    alt: 'Dr. Lilian Wanzare delivering her keynote talk',
    category: "Dr. Wanzare's Keynote",
  },
  {
    src: '/static/images/dli2026/keynote_speech_2.jpg',
    alt: 'Dr. Wanzare presenting slides on human data infrastructure',
    category: "Dr. Wanzare's Keynote",
  },
  {
    src: '/static/images/dli2026/keynote_q&a.jpg',
    alt: "Audience Q&A following Dr. Wanzare's keynote",
    category: "Dr. Wanzare's Keynote",
  },

  // Workshop Group
  {
    src: '/static/images/dli2026/introduction.jpg',
    alt: 'Opening and introductions at the start of the workshop',
    category: 'Workshop Group',
  },
  {
    src: '/static/images/dli2026/sideview.jpg',
    alt: 'Side view of the workshop room during the session',
    category: 'Workshop Group',
  },
  {
    src: '/static/images/dli2026/synthesis_1.jpg',
    alt: 'Workshop participants during the synthesis and next steps discussion (1)',
    category: 'Workshop Group',
  },
  {
    src: '/static/images/dli2026/synthesis_2.jpg',
    alt: 'Workshop participants during the synthesis and next steps discussion (2)',
    category: 'Workshop Group',
  },
  {
    src: '/static/images/dli2026/synthesis_3.jpg',
    alt: 'Workshop participants during the synthesis and next steps discussion (3)',
    category: 'Workshop Group',
  },

  // Breakout Sessions
  {
    src: '/static/images/dli2026/breakout_session_1.jpg',
    alt: 'Breakout Session 1 group discussing dataset creation and collection',
    category: 'Breakout Session 1',
  },
  {
    src: '/static/images/dli2026/breakout_session_2.jpg',
    alt: 'Breakout Session 2 group discussing translation and validation',
    category: 'Breakout Session 2',
  },
  {
    src: '/static/images/dli2026/breakout_session_3.jpg',
    alt: 'Breakout Session 3 group discussing dataset usage and evaluation',
    category: 'Breakout Session 3',
  },
]

export default function IndabaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const currentPhoto = photos[currentIndex]

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % photos.length)
  }

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + photos.length) % photos.length)
  }

  const openLightbox = () => {
    setLightboxIndex(currentIndex)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const showNextLightbox = () => {
    setLightboxIndex((index) => (index === null ? null : (index + 1) % photos.length))
  }

  const showPreviousLightbox = () => {
    setLightboxIndex((index) =>
      index === null ? null : (index - 1 + photos.length) % photos.length
    )
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return

      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') showNextLightbox()
      if (event.key === 'ArrowLeft') showPreviousLightbox()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex])

  const lightboxPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="bg-primary-600 h-1 w-10 rounded-full" />

            <span className="text-primary-600 text-sm font-bold tracking-[0.2em] uppercase">
              DLI 2026
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Photo Gallery
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Moments from the community booth, keynote, workshop, and breakout sessions at DLI 2026.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <button
            type="button"
            onClick={openLightbox}
            className="group focus-visible:ring-primary-500 relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 focus-visible:ring-2 focus-visible:outline-none sm:aspect-[2/1]"
            aria-label={`View ${currentPhoto.alt}`}
          >
            <NextImage
              key={currentPhoto.src}
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Photo information */}
            <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-white/70 uppercase">
                {currentPhoto.category}
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 font-medium text-white sm:text-base">
                {currentPhoto.alt}
              </p>
            </div>

            {/* Expand icon */}
            <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M8 3H3v5" />
                <path d="M3 3l6 6" />
                <path d="M16 21h5v-5" />
                <path d="M21 21l-6-6" />
              </svg>
            </div>
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous photo"
            className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white backdrop-blur-sm transition hover:bg-black/60 sm:left-5"
          >
            &#8249;
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next photo"
            className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white backdrop-blur-sm transition hover:bg-black/60 sm:right-5"
          >
            &#8250;
          </button>
        </div>

        {/* Carousel metadata */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">{currentPhoto.category}</p>

            <p className="mt-1 text-xs text-gray-500">
              {currentIndex + 1} of {photos.length} photos
            </p>
          </div>

          <button
            type="button"
            onClick={openLightbox}
            className="text-primary-600 hover:text-primary-700 text-sm font-semibold transition-colors"
          >
            View full gallery
          </button>
        </div>

        {/* Progress indicators */}
        <div className="mt-6 flex gap-1.5">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to photo ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'w-1.5 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.alt}
          onClick={closeLightbox}
        >
          {/* Counter */}
          <div className="absolute top-5 left-5 text-sm font-medium text-white/70">
            {(lightboxIndex ?? 0) + 1} / {photos.length}
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            &times;
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousLightbox()
            }}
            aria-label="Previous photo"
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 md:left-6"
          >
            &#8249;
          </button>

          {/* Image */}
          <div
            className="flex max-h-[90vh] w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[72vh] w-full">
              <NextImage
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-5 text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
                {lightboxPhoto.category}
              </p>

              <p className="mt-2 text-sm text-white/90">{lightboxPhoto.alt}</p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNextLightbox()
            }}
            aria-label="Next photo"
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 md:right-6"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
