import * as React from 'react'
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native'
import NumPerDetailCard from '../../components/cards/num-per-detail-card'
import CardMini from '../../components/cards/card-mini'
import { Layout } from 'app/design/layout'
import { SpacerM, SpacerS, SpacerXXL } from 'app/design/spacing'
import { Smartie } from 'app/components/smartie'

const UserProfile = () => {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />

      <View style={styles.homeInfoCardsView}>
        <View style={styles.layoutView3}>
          <NumPerDetailCard
            title="Wong Kwong Man Carmen"
            // icon={{ uri: 'icon8@3x.png' }}
            subtitle="13/09/1989"
            navigateParent="You"
            navigateScreenName="NumPersonDetailScreen"
          />

          <SpacerS />

          <View className="flex-row flex-wrap items-center justify-between flex-1 w-full gap-y-1">
            <View className="flex-row justify-between w-full">
              <CardMini
                title="Động Lực Hằng Ngày "
                icon={require('../../assets/icons/sphere.png')}
                // cardMini={require('../../assets/background02.png')}
              />
              <CardMini
                title="Động Lực Hằng Ngày "
                icon={require('../../assets/icons/sphere.png')}
                // cardMini={require('../../assets/background02.png')}
              />
            </View>
            <View className="flex-row justify-between w-full">
              <CardMini
                title="Động Lực Hằng Ngày "
                icon={require('../../assets/icons/sphere.png')}
                // cardMini={require('../../assets/background02.png')}
              />
              <CardMini
                title="Động Lực Hằng Ngày "
                icon={require('../../assets/icons/sphere.png')}
                // cardMini={require('../../assets/background02.png')}
              />
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
