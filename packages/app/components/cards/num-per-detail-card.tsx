import { SpacerM } from 'app/design/spacing'
import * as React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from 'react-native'
import PersonNumberIcon from './person-number-icon'
import { MotiLink } from 'solito/moti'

type NumPerDetailCardType = {
  title?: string
  icon?: ImageSourcePropType
  subtitle?: string
  personalYearNumber?: number
  soulUrgeNumber?: number
  fengShuiNumber?: number
  rulingNumber?: number
  outerExpressNumber?: number
  onPress?: () => void
  href?: any
  as?: string
  params?: any
}

const NumPerDetailCard = ({
  title,
  icon,
  subtitle,
  personalYearNumber,
  soulUrgeNumber,
  fengShuiNumber,
  rulingNumber,
  outerExpressNumber,
  onPress,
  as,
  href
}: NumPerDetailCardType) => {

  return (
    <MotiLink
      href={href}
      as={as}
      animate={({ hovered, pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.1 : 1,
        }
      }}>

      <View style={styles.numPerDetailCardIcon}>

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
            number={rulingNumber || 6}
            numberName="Chủ Đạo"
          //   iconBg={require('../assets/iconbg1.png')}
          />
          <PersonNumberIcon
            number={soulUrgeNumber || 6}
            numberName="Linh Hồn"
          //   iconBg={require('../assets/iconbg.png')}
          />
          <PersonNumberIcon
            number={outerExpressNumber || 6}
            numberName="Thể Hiện"
          //   iconBg={require('../assets/iconbg.png')}
          />
          <PersonNumberIcon
            number={personalYearNumber || 6}
            numberName="Năm Cá Nhan"
          //   iconBg={require('../assets/iconbg.png')}
          />
        </View>
        {/* </View> */}
        {/* </ImageBackground> */}

      </View >
    </MotiLink>
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
    marginBottom: 8
  },
})

export default NumPerDetailCard
