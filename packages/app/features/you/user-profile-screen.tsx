import { StyleSheet, View } from 'react-native'
import NumPerDetailCard from '../../components/cards/num-per-detail-card'
import CardMini from '../../components/cards/card-mini'
import { Layout } from 'app/design/layout'
import { SpacerM, SpacerS, SpacerXXL } from 'app/design/spacing'
import { Smartie } from 'app/components/smartie'

const DATA = {
  name: 'Sang Le',
  dob: '06/09/1989',
  personalYearNumber: 1,
  soulUrgeNumber: 2,
  fengShuiNumber: 1,
  rulingNumber: 1,
  outerExpressNumber: 1,
}

const UserProfile = () => {
  let href = '/you/num-person-detail'
  return (
    <Layout>
      <View className="px-4">
        <SpacerXXL />
        <SpacerXXL />

        <Smartie />

        <View style={styles.homeInfoCardsView}>
          <View style={styles.layoutView3}>

            <NumPerDetailCard
              title={DATA.name}
              subtitle={DATA.dob}
              personalYearNumber={DATA.personalYearNumber}
              soulUrgeNumber={DATA.soulUrgeNumber}
              fengShuiNumber={DATA.fengShuiNumber}
              rulingNumber={DATA.rulingNumber}
              outerExpressNumber={DATA.outerExpressNumber}
              href={href}
            />

            <SpacerS />

            <View className="w-full flex-1 flex-row flex-wrap items-center justify-between gap-y-1">
              <View className="w-full flex-row justify-between">
                <CardMini
                  title="Động Lực Hằng Ngày "
                  icon={require('../../assets/icons/sphere.png')}
                  href="/you/num-user-list"
                // cardMini={require('../../assets/background02.png')}
                />
                <CardMini
                  title="Động Lực Hằng Ngày "
                  icon={require('../../assets/icons/sphere.png')}
                  // cardMini={require('../../assets/background02.png')}

                  href="/you/num-user-list"
                />
              </View>
              <View className="w-full flex-row justify-between">
                <CardMini
                  title="Động Lực Hằng Ngày "
                  icon={require('../../assets/icons/sphere.png')}
                  // cardMini={require('../../assets/background02.png')}

                  href="/you/num-user-list"
                />
                <CardMini
                  title="Động Lực Hằng Ngày "
                  icon={require('../../assets/icons/sphere.png')}
                  // cardMini={require('../../assets/background02.png')}
                  href="/you/num-user-list"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  )
}

const gap = 8

const styles = StyleSheet.create({
  homeCardMiniGroup1View: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  homeCardMiniGroup2View: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  layoutView3: {
    position: 'relative',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  homeMiniInfoCardsView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  homeInfoCardsView: {
    position: 'relative',

    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  profileScreenView: {
    position: 'relative',
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
})

export default UserProfile
