import * as React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from 'react-native'

type PersonNumberIconType = {
  number?: number
  numberName?: string
  iconBg?: ImageSourcePropType
}

const PersonNumberIcon = ({
  number,
  numberName,
  iconBg,
}: PersonNumberIconType) => {
  return (
    <View style={styles.personNumberIconView}>
      <View style={styles.numberIconView}>
        {/* <Image style={styles.iconBg} resizeMode="cover" source={iconBg} /> */}
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <Text style={[styles.numberNameText, styles.mt3]}>{numberName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mt3: {
    marginTop: 3,
  },
  iconBg: {
    position: 'absolute',
    top: 0,
    left: -4,
    width: 34,
    height: 34,
  },
  numberText: {
    position: 'absolute',
    fontSize: 14,
    letterSpacing: -0.15,
    lineHeight: 19,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#000',
    textAlign: 'center',
  },
  numberIconView: {
    position: 'relative',
    width: 26,
    height: 26,
    flexShrink: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  numberNameText: {
    position: 'relative',
    fontSize: 11,
    letterSpacing: 0.07,
    lineHeight: 13,
    fontFamily: 'Roboto',
    color: '#f0f3f5',
    textAlign: 'left',
  },
  personNumberIconView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export default PersonNumberIcon
