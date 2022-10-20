import * as React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native'
import PersonNumberIcon from './person-number-icon'

type NumPerDetailCardType = {
  title?: string
  icon?: ImageSourcePropType
  subtitle?: string
}

const NumPerDetailCard = ({ title, icon, subtitle }: NumPerDetailCardType) => {
  return (
    <ImageBackground
      style={styles.numPerDetailCardIcon}
      imageStyle={{ borderRadius: 8 }}
      resizeMode="cover"
      source={require('../../assets/background02.png')}
    >
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
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ml16: {
    marginLeft: 16,
  },
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
    letterSpacing: -0.08,
    lineHeight: 18,
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'left',
    width: 248,
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
    justifyContent: 'flex-start',
  },
  numPerDetailCardIcon: {
    borderRadius: 10,
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export default NumPerDetailCard
