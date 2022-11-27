import { Provider } from 'app/provider'
import 'react-native-url-polyfill/auto'
import { Stack } from 'expo-router'
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native'

export default function App() {
  // const session = {
  //   user: true,
  // }

  // const session = {}

  return (
    <Provider>
      {/* <Stack screenOptions={{ */}
      {/*   headerBackVisible: false, */}
      {/*   headerTitle: () => null, */}
      {/*   headerTransparent: true, */}
      {/*   headerTitleStyle: { color: 'white' }, */}
      {/*   headerTitleAlign: 'left', */}
      {/*   headerBackground: () => ( */}
      {/*     <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} /> */}
      {/*   ), */}

      {/* }} /> */}
      <Stack />
    </Provider>
  )
}
