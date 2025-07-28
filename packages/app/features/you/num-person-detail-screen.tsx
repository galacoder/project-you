import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerM, SpacerXL, SpacerXXL } from 'app/design/spacing'

import NumPerDetailCardMinimal from '../../components/cards/num-per-detail-card-minimal'
import NumCategoryDetailCard from '../../components/cards/num-category-detail-card'

function NumPersonDetail() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />

      <NumPerDetailCardMinimal title="Le Ngo Bao Sang" subtitle="06/09/1989" />
      <SpacerM />
      <NumCategoryDetailCard
        number="6"
        numberName="Health"
        href="/you/num-active-category-detail"
        backgroundColor="gradient"
      />
      <SpacerM />
      <NumCategoryDetailCard
        number="6"
        numberName="Health"
        href="/you/num-active-category-detail"
        iconSrc={require('../../assets/icons/lock.png')}
        backgroundColor="transparent"
      />
    </Layout>
  )
}

export default NumPersonDetail
