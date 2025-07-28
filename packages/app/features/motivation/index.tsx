import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL, SpacerM } from 'app/design/spacing'
import MotivationalCard from 'app/components/cards/motivational-card'
import { FlashList } from '@shopify/flash-list'
import { View } from 'react-native'

const DATA = [
  {
    title: 'THẦN SỐ HỌC',
    descriptionText: '3 giai đoạn của cuộc đời trong Nhân số học.',
    authorText: 'Smartie',
    learnMoreText: 'Xem chi tiết ',
  },
  {
    title: 'THẦN SỐ HỌC',
    descriptionText: '3 giai đoạn của cuộc đời trong Nhân số học.',
    authorText: 'Smartie',
  },
  {
    title: 'THẦN SỐ HỌC',
    descriptionText: '3 giai đoạn của cuộc đời trong Nhân số học.',
    authorText: 'Smartie',
  },
]

function MotivationScreen() {
  return (
    <Layout>
      <SpacerXXL />
      <SpacerXXL />

      <Smartie />
      <SpacerM />

      <View className="w-full h-full ">
        <FlashList
          data={DATA}
          renderItem={({ item }) => (
            <MotivationalCard
              title={item.title}
              descriptionText={item.descriptionText}
              authorText={item.authorText}
              learnMoreText={item.learnMoreText}
              href="#"
            />
          )}
          estimatedItemSize={20}
        />
      </View>
      {/* <MotivationalCard */}
      {/*   title="THẦN SỐ HỌC" */}
      {/*   descriptionText="3 giai đoạn của cuộc đời trong Nhân số học." */}
      {/*   authorText="Smartie" */}
      {/*   learnMoreText="Xem chi tiết " */}
      {/* /> */}

      {/* <MotivationalCard */}
      {/*   title="THẦN SỐ HỌC" */}
      {/*   descriptionText="3 giai đoạn của cuộc đời trong Nhân số học." */}
      {/*   authorText="Smartie" */}
      {/* /> */}

      <SpacerM />
    </Layout>
  )
}

export default MotivationScreen
