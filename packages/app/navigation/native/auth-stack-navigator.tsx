import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'

//SignUp
import {
  SignUpEmailScreen,
  SignUpPasswordScreen,
  SignUpNoAccountScreen,
  SignUpPasswordConfirmScreen,
} from '../../features/auth/signup/'

//SignIn
import {
  SignInEmailScreen,
  SignInPasswordScreen,
} from '../../features/auth/signin/'

//ForgotPassword
import {
  CheckEmailScreen,
  EmailResetScreen,
} from '../../features/auth/forgot-password/'

const Stack = createNativeStackNavigator<{
  SignUpEmailScreen: undefined
  SignUpPasswordScreen: undefined
  SignUpPasswordConfirmScreen: undefined
  SignUpNoAccountScreen: undefined
  SignInEmailScreen: undefined
  SignInPasswordScreen: undefined
  CheckEmailScreen: undefined
  EmailResetScreen: undefined
}>()

export default function AuthStackNavigator() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Stack.Navigator>{authScreensMap}</Stack.Navigator>
    </Suspense>
  )
}

const authScreens = [
  {
    name: 'SignInEmailScreen',
    component: SignInEmailScreen,
    options: {
      title: 'Điền Email',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'SignInPasswordScreen',
    component: SignInPasswordScreen,
    options: {
      title: 'Điền Mật Khẩu',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'SignUpEmailScreen',
    component: SignUpEmailScreen,
    options: { title: 'Điền Email', headerTitleAlign: 'center' },
  },
  {
    name: 'SignUpPasswordScreen',
    component: SignUpPasswordScreen,
    options: { title: 'Điền Mật Khẩu', headerTitleAlign: 'center' },
  },
  {
    name: 'SignUpPasswordConfirmScreen',
    component: SignUpPasswordConfirmScreen,
    options: { title: 'Xác Nhận Mật Khẩu', headerTitleAlign: 'center' },
  },
  {
    name: 'SignUpNoAccount',
    component: SignUpNoAccountScreen,
    options: { title: 'Đăng Ký', headerTitleAlign: 'center' },
  },
  {
    name: 'EmailResetScreen',
    component: EmailResetScreen,
    options: {
      title: 'Điền Email Đặt Lại Mật Khẩu',
      headerTitleAlign: 'center',
    },
  },

  {
    name: 'CheckEmailScreen',
    component: CheckEmailScreen,
    options: { title: 'Kiểm Tra Email', headerTitleAlign: 'center' },
  },
]

const authScreensMap = authScreens.map(({ name, component, options }) => {
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
