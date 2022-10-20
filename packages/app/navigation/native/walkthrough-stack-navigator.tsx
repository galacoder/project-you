import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'

import { Start } from '../../features/walkthrough'

const Stack = createNativeStackNavigator<{
  Start: undefined
}>()

export default function WalkthroughStackNavigator() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Stack.Navigator>{startScreensMap}</Stack.Navigator>
    </Suspense>
  )
}

const motivationScreens = [
  {
    name: 'Start',
    component: Start,
    options: {
      title: 'Start',
      headerTitleAlign: 'center',
    },
  },
]

const startScreensMap = motivationScreens.map(
  ({ name, component, options }) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Stack.Screen
        key={name}
        name={name}
        component={component}
        options={{
          title: options.title,
          headerTitleAlign: 'center',
          headerLeft: () => null,
        }}
      />
    )
  }
)
