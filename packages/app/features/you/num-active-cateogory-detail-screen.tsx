import Accordion from 'app/components/accordion'
// import PurchaseButton from 'app/components/button/purchase'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerM, SpacerXL, SpacerXXL } from 'app/design/spacing'

import NumCategoryDetailCard from '../../components/cards/num-category-detail-card'
import PurchaseButton from '../../components/button/purchase'

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
      />
      <SpacerM />
      <Accordion />
    </Layout>
  )
}

export default NumActiveCategoryDetail
