import { genPageMetadata } from 'app/seo'
import ProductMain from 'components/product/Main'

export const metadata = genPageMetadata({
  title: 'Product',
  description:
    'Volang by Tonative is an AI-powered real-time translation app for face-to-face business settings, supporting 100+ languages including African languages with cultural accuracy and enterprise-grade security.',
  keywords: [
    'Volang translation app',
    'real-time translation Africa',
    'AI translation app',
    'African language translation',
    'business translation tool',
    'face-to-face translation',
    'multilingual communication app',
    'cultural translation AI',
    'enterprise translation tool',
    '100 languages translation',
  ],
})

export default function Page() {
  return <ProductMain />
}
