import * as React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ImageSourcePropType,
  Dimensions,
} from 'react-native'

type CardMiniType = {
  title?: string
  icon?: ImageSourcePropType
  cardMini?: ImageSourcePropType
}

const CardMini = ({ title, icon, cardMini }: CardMiniType) => {
  return (
    <>
      {ImageBackground ? (
        <ImageBackground
          style={styles.cardMiniIcon}
          resizeMode="cover"
          source={cardMini}
        >
          <View style={styles.layoutView}>
            <View style={styles.titleNiconGroupView}>
              <Text style={styles.titleText}>{title}</Text>
              <Image style={styles.icon} resizeMode="cover" source={icon} />
            </View>
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.cardMiniIcon}>
          <View style={styles.layoutView}>
            <View style={styles.titleNiconGroupView}>
              <Text style={styles.titleText}>{title}</Text>
              <Image style={styles.icon} resizeMode="cover" source={icon} />
            </View>
          </View>
        </View>
      )}
    </>
  )
}

const gap = 10
const itemPerRow = 2
const totalGapSize = (itemPerRow - 1) * gap
const windowWidth = Dimensions.get('window').width
const childWidth = (windowWidth - totalGapSize) / itemPerRow

const styles = StyleSheet.create({
  titleText: {
    position: 'relative',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: 80,
  },
  icon: {
    position: 'relative',
    width: 18,
    height: 18,
    flexShrink: 0,
  },
  titleNiconGroupView: {
    alignSelf: 'stretch',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  layoutView: {
    alignSelf: 'stretch',
    height: 18,
    flexShrink: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardMiniIcon: {
    width: childWidth,
    flex: 1,
    borderRadius: 10,
    height: childWidth / 2,
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(235, 235, 245, 0.18)',
    marginVertical: gap / 2,
    marginHorizontal: gap / 2,
  },
})

export default CardMini
