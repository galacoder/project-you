import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'

import {
  PaymentScreen,
  FailurePaymentScreen,
  SuccessPaymentScreen,
  HelpScreen,
} from '../../features/payment'

const Stack = createNativeStackNavigator<{
  Payment: undefined
  FailurePayment: undefined
  SuccessPayment: undefined
  Help: undefined
}>()

export default function PaymentStackNavigator() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Stack.Navigator>{paymentScreensMap}</Stack.Navigator>
    </Suspense>
  )
}

const paymentScreens = [
  {
    name: 'PaymentScreen',
    component: PaymentScreen,
    options: {
      title: 'Thanh Toán',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'FailurePaymentScreen',
    component: FailurePaymentScreen,
    options: {
      title: 'Thanh Toán Thất Bại',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'SuccessPayment',
    component: SuccessPaymentScreen,
    options: { title: 'Thanh Toán Thành Công', headerTitleAlign: 'center' },
  },
  {
    name: 'HelpScreen',
    component: HelpScreen,
    options: { title: 'Trợ Giúp', headerTitleAlign: 'center' },
  },
]

const paymentScreensMap = paymentScreens.map(({ name, component, options }) => {
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
})
