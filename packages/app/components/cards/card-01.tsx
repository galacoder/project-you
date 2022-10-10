import * as React from 'react'
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import NumberIndicator from './number-indicator'

type Card01Type = {
  title?: string
  subtitle?: string
}

const Card01 = ({ title, subtitle }: Card01Type) => {
  return (
    <ImageBackground
      style={styles.card01Icon}
      resizeMode="cover"
      source={require('../assets/card011.png')}
    >
      <View style={styles.frameView2}>
        <View style={styles.frameView1}>
          <View style={styles.frameView}>
            <Text style={styles.wongKwongManCarmen}>{title}</Text>
          </View>

          <Image
            style={styles.biarrowRightCircleIcon}
            resizeMode="cover"
            source={require('../../assets/bi-arrow-right-circle.png')}
          />
        </View>
        <Text style={styles.text}>{subtitle}</Text>
      </View>
      <View style={[styles.frameView3, styles.mt8]}>
        <NumberIndicator number="6" text="Chủ Đạo" />
        <NumberIndicator number="6" text="Linh Hồn" />
        <NumberIndicator number="6" text="Thể Hiện" />
        <NumberIndicator number="6" text="Cá Nhân" />
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
  wongKwongManCarmen: {
    position: 'relative',
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '600',
    fontFamily: 'SF Pro Text',
    color: '#fff',
    textAlign: 'left',
  },
  frameView: {
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  biarrowRightCircleIcon: {
    position: 'relative',
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  frameView1: {
    width: 251,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    position: 'relative',
    fontSize: 13,
    letterSpacing: -0.08,
    lineHeight: 18,
    fontFamily: 'SF Pro Text',
    color: '#fff',
    textAlign: 'left',
    width: 248,
  },
  frameView2: {
    width: 251,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  frameView3: {
    width: 251,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  card01Icon: {
    borderRadius: 10,
    width: 288,
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export default Card01
