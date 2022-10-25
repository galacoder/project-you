import MotivationalCard from 'app/components/motivational-card'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { StyleSheet, View } from 'react-native'

function MotivationScreen() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />

      <MotivationalCard
        title="THẦN SỐ HỌC"
        content="3 giai đoạn của cuộc đời trong Nhân số học."
        author="Smartie"
        linkText="Xem chi tiết"
        logo={require('../../assets/icons/sphere.png')}
      />
      <MotivationalCard
        title="THẦN SỐ HỌC"
        content="3 giai đoạn của cuộc đời trong Nhân số học."
        author="Smartie"
        linkText="Xem chi tiết"
        logo={require('../../assets/icons/sphere.png')}
      />

      <SpacerXXL />
      <SpacerXXL />
    </Layout>
  )
}

export default MotivationScreen
