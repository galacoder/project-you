import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'
// import { Auth } from "aws-amplify";

//Auth Import
import {
  CalculatorInputDOBScreen,
  CalculatorLoadingScreen,
  CalculatorInputNameScreen,
} from '../../features/calculation/'

const Stack = createNativeStackNavigator()

export default function CalculatorStackNavigator() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Stack.Navigator>{calculatorScreensMap}</Stack.Navigator>
    </Suspense>
  )
}

const calculatorScreens = [
  {
    name: 'CalculatorInputNameScreen',
    component: CalculatorInputNameScreen,
    options: {
      title: 'Nhập Tên',
      headerTitleAlign: 'center',
      headerTransparent: true,
    },
  },
  {
    name: 'CalculatorInputDOBScreen',
    component: CalculatorInputDOBScreen,
    options: { title: 'Nhập Ngày sinh', headerTitleAlign: 'center' },
  },
  {
    name: 'CalculatorLoadingScreen',
    component: CalculatorLoadingScreen,
    options: { title: 'Đang Tính', headerTitleAlign: 'center' },
  },
]

const calculatorScreensMap = calculatorScreens.map(
  ({ name, component, options }) => (
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
)
