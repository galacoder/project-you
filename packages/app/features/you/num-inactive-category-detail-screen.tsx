import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerM, SpacerXL, SpacerXXL } from 'app/design/spacing'

import NumPerDetailCardMinimal from '../../components/cards/num-per-detail-card-minimal'
import NumCategoryDetailCard from '../../components/cards/num-category-detail-card'
import Accordion from 'app/components/accordion'
import PurchaseButton from 'app/components/button/purchase'

function NumInactiveCategoryDetail() {
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
      <SpacerXXL />
      <PurchaseButton
        title="Mở Khóa Nội Dung"
        subtitle="Bạn cần 1 vương miện"
        iconSrc={require('../../assets/icons/crown.png')}
      />
    </Layout>
  )
}

export default NumInactiveCategoryDetail
