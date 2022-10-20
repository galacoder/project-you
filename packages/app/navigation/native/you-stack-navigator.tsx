import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'

//SignUp
import {
  UserProfile,
  NumPersonDetail,
  NumCategoryDetail,
  NumUserList,
} from '../../features/you'

const Stack = createNativeStackNavigator<{
  UserProfile: undefined
  NumUserList: undefined
  NumPersonDetail: undefined
  NumCategoryDetail: undefined
}>()

export default function YouStackNavigator() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Stack.Navigator>{youScreensMap}</Stack.Navigator>
    </Suspense>
  )
}

const youScreens = [
  {
    name: 'UserProfile',
    component: UserProfile,
    options: {
      title: 'Thông Tin Cá Nhân',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'NumUserList',
    component: NumUserList,
    options: {
      title: 'Danh Sách Người Dùng',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'NumPersonDetail',
    component: NumPersonDetail,
    options: { title: 'Thông Tin Chi Tiết', headerTitleAlign: 'center' },
  },
  {
    name: 'NumCategoryDetail',
    component: NumCategoryDetail,
    options: { title: 'Thông Tin TSH', headerTitleAlign: 'center' },
  },
]

const youScreensMap = youScreens.map(({ name, component, options }) => {
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
