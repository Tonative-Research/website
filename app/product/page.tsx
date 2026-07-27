import { genPageMetadata } from 'app/seo'
import ProductMain from 'components/product/Main'

export const metadata = genPageMetadata({
  title: 'Products',
  description:
    'Tonative products: TonalKeys African language keyboard, Label Studio annotation platform, Volang speech translation app, and MTStudio machine translation studio. These tools are built to make African languages first-class in the digital world.',
  keywords: [
    'TonalKeys African keyboard',
    'African language keyboard Chrome extension',
    'Volang speech translation',
    'African language translation app',
    'Label Studio annotation platform',
    'African language data annotation',
    'MTStudio machine translation',
    'African language AI tools',
    'Tonative products',
    'African NLP tools',
  ],
})

export default function Page() {
  return <ProductMain />
}
