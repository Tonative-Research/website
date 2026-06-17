import { genPageMetadata } from 'app/seo'
import DatasetToolsMain from '@/components/dataset-tools/Main'

export const metadata = genPageMetadata({
  title: 'Datasets & Tools',
  description:
    'Browse and download open-source African language datasets — including XNLI, HealthBench-Africa, and KKD Parallel Corpora — plus AI-powered tools for translation validation and NLP development.',
  keywords: [
    'African language datasets download',
    'open-source African NLP datasets',
    'XNLI African languages',
    'HealthBench Africa',
    'KKD parallel corpus',
    'Igbo dataset',
    'Yoruba dataset',
    'Hausa dataset',
    'Swahili parallel text',
    'African NLP benchmark',
    'AI translation validation tool',
    'low-resource language dataset',
  ],
})

export default function Page() {
  return <DatasetToolsMain />
}
