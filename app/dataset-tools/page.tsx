import { genPageMetadata } from 'app/seo'
import Main from 'components/social-icons/dataset-tools/Main'

export const metadata = genPageMetadata({ title: 'Datasets & Tools' })

export default function Page() {
  return <Main />
}
