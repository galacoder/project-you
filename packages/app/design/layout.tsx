import { View, ImageBackground, StyleSheet } from 'react-native'
import { styled } from 'nativewind'

const LayoutView = styled(
  View,
  'flex top-0 sm:justify-center items-center w-full h-full '
)

const ChildrenView = styled(
  View,
  'flex w-full sm:justify-center items-center px-[16px] '
)

export const Layout = ({ children }) => {
  return (
    <LayoutView>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/background01.png')}
      />
      <ChildrenView>{children}</ChildrenView>
    </LayoutView>
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
