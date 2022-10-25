import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerM, SpacerXL, SpacerXXL } from 'app/design/spacing'

import NumPerDetailCardMinimal from '../../components/cards/num-per-detail-card-minimal'
import NumCategoryDetailCard from '../../components/cards/num-category-detail-card'

function NumActiveCategoryDetail() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <SpacerM />

      <NumCategoryDetailCard
        number="6"
        numberName="Health"
        navigateParent="You"
        navigateScreenName=""
        backgroundColor="transparent"
      />
      <SpacerM />
    </Layout>
  )
}

export default NumActiveCategoryDetail
