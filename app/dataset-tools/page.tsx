import { genPageMetadata } from 'app/seo'
import DatasetToolsMain from '@/components/dataset-tools/Main'

export const metadata = genPageMetadata({ title: 'Datasets & Tools' })

export default function Page() {
  return <DatasetToolsMain />
}
