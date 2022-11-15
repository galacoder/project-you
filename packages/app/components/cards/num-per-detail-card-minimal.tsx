// import * as React from 'react'
import { Text, StyleSheet, Image, View, ImageBackground } from 'react-native'

type NumPerDetailCardMinimalType = {
  title?: string
  subtitle?: string
}

const NumPerDetailCardMinimal = ({
  title,
  subtitle,
}: NumPerDetailCardMinimalType) => {
  return (
    <ImageBackground
      style={styles.numPerDetailCardIcon}
      imageStyle={{ borderRadius: 8 }}
      resizeMode="cover"
      source={require('../../assets/background02.png')}
    >
      <View style={styles.headerGroupView}>
        <View style={styles.layoutView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{title}</Text>
            <Image
              style={[styles.icon, styles.ml8]}
              resizeMode="cover"
              source={require('../../assets/icons/sphere.png')}
            />
          </View>
        </View>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  titleText: {
    position: 'relative',
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '600',
    fontFamily: 'SF Pro Text',
    color: '#fff',
    textAlign: 'left',
  },
  icon: {
    position: 'relative',
    width: 24,
    height: 24,
    flexShrink: 0,
    display: 'none',
  },
  titleView: {
    width: 251,
    flexShrink: 0,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  layoutView: {
    width: 251,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  subtitleText: {
    position: 'relative',
    fontSize: 13,
    letterSpacing: -0.08,
    lineHeight: 18,
    fontFamily: 'SF Pro Text',
    color: '#fff',
    textAlign: 'left',
    width: 248,
  },
  headerGroupView: {
    width: 251,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  numPerDetailCardIcon: {
    alignSelf: 'stretch',
    borderRadius: 10,
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export default NumPerDetailCardMinimal
