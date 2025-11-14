import { genPageMetadata } from 'app/seo'
import ProductMain from 'components/product/Main'

export const metadata = genPageMetadata({ title: 'Product' })

export default function Page() {
  return <ProductMain />
}
