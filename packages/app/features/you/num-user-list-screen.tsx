import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerM, SpacerXL, SpacerXXL } from 'app/design/spacing'
import { FlashList } from '@shopify/flash-list'
import NumPerDetailCard from '../../components/cards/num-per-detail-card'
import { View } from 'react-native'

const DATA = [
  {
    name: 'Sang Le',
    dob: '06/09/1989',
    personalYearNumber: 1,
    soulUrgeNumber: 2,
    fengShuiNumber: 1,
    rulingNumber: 1,
    outerExpressNumber: 1,
    href: '/you/num-person-detail'
  },
  {
    name: 'Carmen Wong',
    dob: '13/09/1989',
    personalYearNumber: 1,
    soulUrgeNumber: 2,
    fengShuiNumber: 1,
    rulingNumber: 1,
    outerExpressNumber: 1,
    href: '/you/num-person-detail'
  },
  {
    name: 'Alivia Le',
    dob: '02/06/2020',
    personalYearNumber: 1,
    soulUrgeNumber: 2,
    fengShuiNumber: 1,
    rulingNumber: 1,
    outerExpressNumber: 1,
    href: '/you/num-person-detail'
  },
]

function NumUserList() {
  return (
    <Layout>
      <SpacerXXL />
      <Smartie />
      <View className="w-full h-full ">
        <FlashList
          data={DATA}
          renderItem={({ item }) => (
            <NumPerDetailCard
              title={item.name}
              subtitle={item.dob}
              personalYearNumber={item.personalYearNumber}
              soulUrgeNumber={item.soulUrgeNumber}
              fengShuiNumber={item.fengShuiNumber}
              rulingNumber={item.rulingNumber}
              outerExpressNumber={item.outerExpressNumber}
              href={item.href}
            />
          )}
          estimatedItemSize={10}
        />
      </View>
    </Layout>
  )
}

export default NumUserList
