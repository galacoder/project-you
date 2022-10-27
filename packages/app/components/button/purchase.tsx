import * as React from 'react'
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native'

import { MotiLink } from 'solito/moti'

type ButtonPurchaseType = {
  title?: string
  subtitle?: string
  iconSrc?: ImageSourcePropType
  navigateScreenName?: string
  navigateParent?: string
  children?: JSX.Element
  href: string
  as?: string
}

const PurchaseButton = ({
  title,
  subtitle,
  iconSrc,
  href,
  as
}: ButtonPurchaseType) => {
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

      <View style={styles.wrapperView}>
        <View style={styles.iconView}>
          <Image style={styles.icon} resizeMode="cover" source={iconSrc} />
        </View>
        <View style={[styles.textView, styles.ml16]}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={[styles.subtitleText, styles.mt4]}>{subtitle}</Text>
        </View>
      </View>
    </MotiLink>
  )

}

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  ml16: {
    marginLeft: 16,
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
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  titleText: {
    position: 'relative',
    fontSize: 15,
    lineHeight: 20,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    width: 208,
  },
  subtitleText: {
    position: 'relative',
    fontSize: 13,
    lineHeight: 17,

    color: '#555',
    textAlign: 'left',
    width: 187,
  },
  textView: {
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapperView: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingRight: 5,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonPurchaseView: {
    position: 'relative',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 0.5,
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255,1)',
    padding: 12,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export default PurchaseButton
