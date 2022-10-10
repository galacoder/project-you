import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { HomeScreen } from '../../features/home/screen'
// import { UserDetailScreen } from '../../features/user/detail-screen'
import { FirstScreen } from '../../features/walkthrough/FirstScreen'

const Stack = createNativeStackNavigator<{
  'first-screen': undefined
  // home: undefined
  // 'user-detail': {
  //   id: string
  // }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="first-screen"
        component={FirstScreen}
        options={{
          title: 'Home',
        }}
      />
      {/* <Stack.Screen */}
      {/*   name="user-detail" */}
      {/*   component={UserDetailScreen} */}
      {/*   options={{ */}
      {/*     title: 'User', */}
      {/*   }} */}
      {/* /> */}
    </Stack.Navigator>
  )
}
