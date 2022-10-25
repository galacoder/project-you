import { SpacerM } from 'app/design/spacing'
import * as React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native'
import PersonNumberIcon from './person-number-icon'
import { useNavigation } from '@react-navigation/native'

type NumPerDetailCardType = {
  title?: string
  icon?: ImageSourcePropType
  subtitle?: string
  onPress?: () => void
  navigateScreenName: string
  navigateParent: string
}

const NumPerDetailCard = ({
  title,
  icon,
  subtitle,
  onPress,
  navigateScreenName,
  navigateParent,
}: NumPerDetailCardType) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.numPerDetailCardIcon}
      activeOpacity={0.2}
      onPress={() =>
        navigation.navigate(navigateParent, {
          screen: navigateScreenName,
        })
      }
    >
      {/* <ImageBackground
      style={styles.numPerDetailCardIcon}
      imageStyle={{ borderRadius: 8 }}
      resizeMode="cover"
      source={require('../../assets/background02.png')}
    > */}
      {/* <View style={styles.numPerDetailCardIcon}> */}
      <View style={styles.headerGroupView}>
        <View style={styles.layoutView}>
          <View style={styles.titleNiconView}>
            <Text style={styles.titleText}>{title}</Text>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={icon || require('../../assets/icons/sphere.png')}
            />
          </View>
        </View>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
      <SpacerM />
      <View style={[styles.bottomIconsView, styles.mt8]}>
        <PersonNumberIcon
          number="6"
          numberName="Chủ Đạo"
          //   iconBg={require('../assets/iconbg1.png')}
        />
        <PersonNumberIcon
          number="6"
          numberName="Linh Hồn"
          //   iconBg={require('../assets/iconbg.png')}
        />
        <PersonNumberIcon
          number="6"
          numberName="Thể Hiện"
          //   iconBg={require('../assets/iconbg.png')}
        />
        <PersonNumberIcon
          number="6"
          numberName="Phong Thủy"
          //   iconBg={require('../assets/iconbg.png')}
        />
      </View>
      {/* </View> */}
      {/* </ImageBackground> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  titleText: {
    position: 'relative',
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'left',
  },
  icon: {
    position: 'relative',
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  titleNiconView: {
    width: '100%',
    flexShrink: 0,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  layoutView: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  subtitleText: {
    position: 'relative',
    fontSize: 13,
    // letterSpacing: -0.08,
    lineHeight: 18,
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'left',
    width: '100%',
  },
  headerGroupView: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bottomIconsView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  numPerDetailCardIcon: {
    width: '100%',
    borderRadius: 10,
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(235, 235, 245, 0.18)',
  },
})

export default NumPerDetailCard
