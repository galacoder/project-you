import * as React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native'

type CardMiniType = {
  title?: string
  icon?: ImageSourcePropType
}

const CardMini = ({ title, icon }: CardMiniType) => {
  return (
    <ImageBackground
      style={styles.cardMiniIcon}
      imageStyle={{ borderRadius: 8 }}
      resizeMode="cover"
      source={require('../../assets/background02.png')}
    >
      <View style={styles.layoutView}>
        <View style={styles.titleIconView}>
          <Text style={styles.titleText}>{title}</Text>
          <Image
            style={[styles.icon, styles.ml4]}
            resizeMode="cover"
            source={icon}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  titleText: {
    position: 'relative',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    fontFamily: 'Roboto',
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
  titleIconView: {
    width: 104,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  layoutView: {
    width: 104,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardMiniIcon: {
    borderRadius: 10,
    width: 168,
    height: 106,
    flexShrink: 0,
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
})

export default CardMini
