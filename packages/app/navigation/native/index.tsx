import React, { useRef } from 'react'
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotFoundScreen from '../../features/NotFoundScreen'
import { BottomTabNavigator } from './bottom-stack-navigator'
// import LinkingConfiguration from "./LinkingConfiguration";

import WalkthroughStackNavigator from './walkthrough-stack-navigator'
import AuthStackNavigator from './auth-stack-navigator'
import MotivationStackNavigator from './motivation-stack-navigator'
import CalculatorStackNavigator from './calculator-stack-navigator'
import YouStackNavigator from './you-stack-navigator'
import PaymentStackNavigator from './payment-stack-navigator'

const Stack = createNativeStackNavigator()

export function NativeNavigation({ session }) {
  const navigationRef = useRef()
  const routeNameRef = useRef()

  return (
    <NavigationContainer
      ref={navigationRef}
      independent={true}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
    >
      <RootNavigator session={session} />
    </NavigationContainer>
  )
}

function RootNavigator({ session }: { session: any }) {
  const nonUserScreens = {
    Walkthrough: WalkthroughStackNavigator,
    Calculator: CalculatorStackNavigator,
    Auth: AuthStackNavigator,
    NotFound: NotFoundScreen,
  }

  const userScreens = {
    Main: BottomTabNavigator,
    Motivation: MotivationStackNavigator,
    Calculator: CalculatorStackNavigator,
    You: YouStackNavigator,
    Payment: PaymentStackNavigator,
    NotFound: NotFoundScreen,
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries({
        ...(session && session.user ? userScreens : nonUserScreens),
      }).map(([name, component]) => (
        //@ts-ignore
        <Stack.Screen name={name} component={component} />
      ))}
    </Stack.Navigator>
  )
}
