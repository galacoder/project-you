import * as React from 'react'
import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native'
import { MotiLink } from 'solito/moti'

type MotivationalCardType = {
  title?: string
  content?: string
  author?: string
  linkText?: string
  logo: ImageSourcePropType
  className?: string
  href: string
  as?: string
}

const MotivationalCard = ({
  title,
  content,
  author,
  linkText,
  logo,
  className,
  href,
  as,
}: MotivationalCardType) => {
  return (
    <MotiLink
      href={href}
      as={as}
      animate={({ hovered, pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.1 : 1,
        }
      }}
      containerStyle={styles.motivationalCardTouchableOpacity}
    >
      {/* <View
        style={styles.motivationalCardTouchableOpacity}
        className={className}
      > */}
      <View style={styles.layoutView}>
        <View style={styles.titleIconGroupView}>
          <Text style={styles.titleText}>{title || 'THẦN SỐ HỌC'}</Text>
          <View style={styles.iconView}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={logo || require('../../assets/icons/sphere.png')}
            />
          </View>
        </View>
        <Text style={[styles.descriptionText, styles.mt11]}>
          {content || '  3 giai đoạn của cuộc đời trong Nhân số học.'}
        </Text>
        <View style={[styles.bottomLayoutView, styles.mt11]}>
          <Text style={styles.authorText}>{author || 'Smartie'}</Text>
          <View style={[styles.dividerView, styles.ml11]} />
          <View style={[styles.learnMoreButtonView, styles.ml11]}>
            <Text style={styles.learnMoreText}>
              {linkText || `Xem chi tiết `}
            </Text>
            <Image
              style={[styles.learnMoreIcon, styles.ml8]}
              resizeMode="cover"
              source={require('../../assets/icons/arrow-right.png')}
            />
          </View>
        </View>
      </View>
      {/* </View> */}
    </MotiLink>
  )
}

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml11: {
    marginLeft: 11,
  },
  mt11: {
    marginTop: 11,
  },
  titleText: {
    position: 'relative',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'left',
  },
  icon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  iconView: {
    position: 'relative',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  titleIconGroupView: {
    alignSelf: 'stretch',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText: {
    alignSelf: 'stretch',
    position: 'relative',
    fontSize: 13,
    lineHeight: 17,
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'left',
  },
  authorText: {
    position: 'relative',
    fontSize: 13,
    lineHeight: 17,
    fontFamily: 'Roboto',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'left',
  },
  dividerView: {
    position: 'relative',
    borderRadius: 3,
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    width: 2,
    height: 8,
    flexShrink: 0,
  },
  learnMoreText: {
    position: 'relative',
    fontSize: 12,
    lineHeight: 19,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#00cffd',
    textAlign: 'left',
  },
  learnMoreIcon: {
    position: 'relative',
    width: 10,
    height: 9,
    flexShrink: 0,
  },
  learnMoreButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomLayoutView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutView: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  motivationalCardTouchableOpacity: {
    borderRadius: 10,
    backgroundColor: 'rgba(235, 235, 245, 0.18)',
    width: '100%',
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
})

export default MotivationalCard
