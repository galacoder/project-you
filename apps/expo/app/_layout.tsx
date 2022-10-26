import { Provider } from 'app/provider'
import 'react-native-url-polyfill/auto'
import { Stack } from 'expo-router'

export default function App() {
  // const session = {
  //   user: true,
  // }

  // const session = {}

  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
