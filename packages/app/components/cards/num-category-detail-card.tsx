import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { MotiLink } from 'solito/moti'

type NumCategoryDetailCardType = {
  number?: string
  numberName?: string
  iconSrc?: ImageSourcePropType
  backgroundColor?: string
  href?: any
  as?: string
}

const NumCategoryDetailCard = ({
  number,
  numberName,
  iconSrc,
  backgroundColor,
  href,
  as
}: NumCategoryDetailCardType) => {

  const colorHandler =
    backgroundColor === 'transparent'
      ? ['rgba(0,0,0,0.3)', 'transparent']
      : ['#14F1D9', '#3672F8']

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

      <View style={styles.numCategoryDetailCardTouchableOpacity}>
        <LinearGradient
          colors={colorHandler}
          style={styles.backgroundLinearGradient}
        >
          <View style={styles.layoutView}>
            <View style={styles.iconGroupView}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={iconSrc || require('../../assets/icons/sphere.png')}
              />
            </View>
            <View style={styles.numberGroupView}>
              <Text style={styles.numberNameText}>{numberName}</Text>
              <Text style={styles.numberText}>{number}</Text>
            </View>
          </View>
        </LinearGradient>

      </View >
    </MotiLink>
  )
}

const styles = StyleSheet.create({
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
  iconGroupView: {
    position: 'relative',
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  numberNameText: {
    position: 'relative',
    fontSize: 13,
    lineHeight: 17,
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'center',
  },
  numberText: {
    position: 'relative',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'right',
    width: 99,
  },
  numberGroupView: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  layoutView: {
    width: '100%',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numCategoryDetailCardTouchableOpacity: {
    width: '100%',
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255,0.3)',
    // borderWidth: 0.5,
    position: 'relative',
    flexDirection: 'column',
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  backgroundLinearGradient: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
})

export default NumCategoryDetailCard
