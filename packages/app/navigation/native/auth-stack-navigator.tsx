import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'

//SignUp
import {
  SignUpEmail,
  SignUpPassword,
  SignUpNoAccount,
  SignUpPasswordConfirm,
} from '../../features/auth/signup/'

//SignIn
import { SignInEmail, SignInPassword } from '../../features/auth/signin/'

//ForgotPassword
import { CheckEmail, EmailReset } from '../../features/auth/forgot-password/'

const Stack = createNativeStackNavigator<{
  SignUpEmail: undefined
  SignUpPassword: undefined
  SignUpPasswordConfirm: undefined
  SignUpNoAccount: undefined
  SignInEmail: undefined
  SignInPassword: undefined
  CheckEmail: undefined
  EmailReset: undefined
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
    name: 'SignInEmail',
    component: SignInEmail,
    options: {
      title: 'Điền Email',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'SignInPassword',
    component: SignInPassword,
    options: {
      title: 'Điền Mật Khẩu',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'SignUpEmail',
    component: SignUpEmail,
    options: { title: 'Điền Email', headerTitleAlign: 'center' },
  },
  {
    name: 'SignUpPassword',
    component: SignUpPassword,
    options: { title: 'Điền Mật Khẩu', headerTitleAlign: 'center' },
  },
  {
    name: 'SignUpPasswordConfirm',
    component: SignUpPasswordConfirm,
    options: { title: 'Xác Nhận Mật Khẩu', headerTitleAlign: 'center' },
  },
  {
    name: 'SignUpNoAccount',
    component: SignUpNoAccount,
    options: { title: 'Đăng Ký', headerTitleAlign: 'center' },
  },
  {
    name: 'EmailReset',
    component: EmailReset,
    options: {
      title: 'Điền Email Đặt Lại Mật Khẩu',
      headerTitleAlign: 'center',
    },
  },

  {
    name: 'CheckEmail',
    component: CheckEmail,
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
