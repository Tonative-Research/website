'use client'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroManSmile from '@/data/images/hero_older_man.png'
import HeroCommunityWork from '@/data/images/hero_community_work.png'
import HeroGroupSeated from '@/data/images/hero_group_seated.png'
import HeroServerCables from '@/data/images/hero_server_cables.png'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [HeroManSmile, HeroCommunityWork, HeroGroupSeated, HeroServerCables]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2)
  }
  return (
    <div className="from-primary-900 via-primary-800 relative min-h-screen overflow-hidden bg-linear-to-br to-slate-950">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Main content container */}
      <div className="relative container mx-auto px-6 py-20 sm:px-8">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="bg-accent-600 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white">
            {/* <span className="bg-accent-500 rounded-full px-2 py-0.5 text-xs">New</span> */}
            <span>Introducing Tonative</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Speak your Language
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-4xl text-center text-lg text-gray-400 sm:text-xl">
          We train African data curators, create custom language datasets and build tools that
          foster Africa's inclusion in AI technology{' '}
        </p>

        {/* CTA Button */}
        <div className="mb-20 flex justify-center">
          <a href={siteMetadata.volangUrl} target="_blank">
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl">
              Explore Datasets
              <ArrowRight className="h-5 w-5" />
            </button>
          </a>
        </div>

        {/* Image Grid */}
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-12 items-center gap-4">
            {/* Left image */}
            <div className="col-span-3 hidden lg:block">
              <div className="transform overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
                <Image
                  src={images[0]}
                  alt="Creative work 1"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>

            {/* Center large image - Carousel */}
            <div className="relative col-span-12 lg:col-span-6">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-[400px] sm:h-[500px]">
                  <Image
                    src={images[currentSlide === 0 ? 1 : 3]}
                    alt="Main creative work"
                    className="h-full w-full object-cover transition-opacity duration-500"
                  />

                  {/* Carousel navigation */}
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 shadow-lg transition-all hover:bg-white"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 shadow-lg transition-all hover:bg-white"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Slide indicators */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {[0, 1].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          currentSlide === idx ? 'w-8 bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-span-3 hidden lg:block">
              <div className="transform overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
                <Image
                  src={images[2]}
                  alt="Creative work 2"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom left decorative image */}
          <div className="absolute -bottom-12 left-0 hidden w-64 xl:block">
            <div className="transform overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
                alt="Decorative element"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  )
}
