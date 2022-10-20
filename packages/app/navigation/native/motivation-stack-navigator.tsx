import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'

import Motivation from '../../features/motivation'

const Stack = createNativeStackNavigator<{
  Motivation: undefined
}>()

export default function MotivationStackNavigator() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Stack.Navigator>{motivationScreensMap}</Stack.Navigator>
    </Suspense>
  )
}

const motivationScreens = [
  {
    name: 'Motivation',
    component: Motivation,
    options: {
      title: 'Động Lực',
      headerTitleAlign: 'center',
    },
  },
]

const motivationScreensMap = motivationScreens.map(
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
