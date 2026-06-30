'use client'
import { useState } from 'react'
import DataCuratorImg from '@/data/images/home-data-curator.png'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function DatasetPortfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const datasets = [
    {
      title: 'Domain-Specific LLM Benchmarks',
      description:
        ' Prompt datasets and standardised scoring criteria optimized for easy integration into LLM-as-a-Judge workflows and automated evaluation pipelines to track performance and ensure domain accuracy in specific regions.',
    },
    {
      title: 'Agentic Workflow Benchmarks',
      description:
        'Multi-turn evaluation datasets designed to rigorously test AI agents for reliable reasoning, accurate tool calling, and autonomous task execution.',
    },
    {
      title: 'Reasoning & NLI (Natural Language Inference)',
      description:
        'Advanced logic, comprehension, and text-entailment datasets to test complex problem-solving and reduce model hallucinations.',
    },
    {
      title: 'SFT & RLHF Alignment Data',
      description:
        'Expert-authored instruction-response pairs for Supervised Fine-Tuning (SFT) and human preference/comparison data for RLHF, optimized to align AI models with localized safety, tone, and cultural guidelines.',
    },
    {
      title: 'Parallel Text Translation',
      description:
        'High-quality bilingual and multilingual parallel corpora built to train and validate machine translation models.',
    },
    {
      title: 'African Speech & Transcription',
      description:
        'Long- and short-form audio recordings paired with high-accuracy transcripts across major African languages for STT (Speech-to-Text) and TTS (Text-to-Speech) systems.',
    },
    {
      title: 'Localized Image Descriptions',
      description:
        'Culturally accurate visual descriptions in African languages to train multimodal models and image-to-text applications.',
    },
    {
      title: 'Cultural Narratives & Idioms',
      description:
        'Rich datasets featuring creative storytelling, African proverbs, cultural references, and idiomatic expressions to ensure AI models are culturally aware and contextually accurate.',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:pb-32" id="data-curator">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2
              className="text-primary-900 mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              Our Dataset Portfolio{' '}
            </h2>

            <p
              className="mb-8 text-lg leading-relaxed text-gray-700"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              High-quality African language datasets for training, fine-tuning, and benchmarking AI models.
            </p>

            {/* Stats */}
            <div className="mb-10 flex gap-8">
              <div>
                <div
                  className="text-accent-600 mb-1 text-5xl font-bold"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  5+
                </div>
                <div
                  className="text-sm tracking-wider text-gray-600 uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Datasets
                </div>
              </div>
            </div>

            {/* Accordion datasets */}
            <div className="space-y-3">
              {datasets.map((dataset, idx) => (
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
                      {openIndex === idx ? '−' : '+'} {dataset.title}
                    </span>
                  </button>

                  {openIndex === idx && (
                    <div className="px-6 pt-2 pb-5">
                      <p
                        className="px-3 leading-relaxed text-gray-700 lg:pl-6"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {dataset.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

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
