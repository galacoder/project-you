import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import 'react-native-url-polyfill/auto'

export default function App() {
  // const session = {
  //   user: true,
  // }

  const session = {}

  return (
    <Provider>
      <NativeNavigation session={session} />
    </Provider>
  )
}
