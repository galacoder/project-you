import { View, ImageBackground, StyleSheet } from 'react-native'
import { styled } from 'nativewind'

const LayoutView = styled(
  View,
  'flex top-0 sm:justify-center items-center w-full h-full '
)

const Layout = ({ children }) => {
  return (
    <LayoutView>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/background01.png')}
      />
      <PaddingHorizontal>{children}</PaddingHorizontal>
    </LayoutView>
  )
}

const PaddingHorizontal = ({ children }) => {
  return (
    <View className="flex w-full w-full items-center px-[16px] sm:justify-center ">
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
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
})

export { Layout }
