import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL, SpacerM } from 'app/design/spacing'
import MotivationalCard from 'app/components/cards/motivational-card'

function MotivationScreen() {
  return (
    <Layout>
      <SpacerXXL />
      <SpacerXXL />

      <Smartie />
      <SpacerM />

      <MotivationalCard
        title="THẦN SỐ HỌC"
        descriptionText="3 giai đoạn của cuộc đời trong Nhân số học."
        authorText="Smartie"
        learnMoreText="Xem chi tiết "
      />

      <MotivationalCard
        title="THẦN SỐ HỌC"
        descriptionText="3 giai đoạn của cuộc đời trong Nhân số học."
        authorText="Smartie"
      />



      <SpacerM />
    </Layout>

  )
}

export default MotivationScreen
