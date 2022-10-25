import React, { Suspense } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from '../../components/activity-indicator'

//SignUp
import {
  UserProfileScreen,
  NumPersonDetailScreen,
  NumCategoryDetailScreen,
  NumUserListScreen,
  NumActiveCategoryDetailScreen,
  NumInactiveCategoryDetailScreen,
} from '../../features/you'

const Stack = createNativeStackNavigator<{
  UserProfileScreen: undefined
  NumUserListScreen: undefined
  NumPersonDetailScreen: undefined
  NumCategoryDetailScreen: undefined
  NumActiveCategoryDetailScreen: undefined
  NumInactiveCategoryDetailScreen: undefined
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
    name: 'UserProfileScreen',
    component: UserProfileScreen,
    options: {
      title: 'Thông Tin Cá Nhân',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'NumUserListScreen',
    component: NumUserListScreen,
    options: {
      title: 'Danh Sách Người Dùng',
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'NumPersonDetailScreen',
    component: NumPersonDetailScreen,
    options: { title: 'Thông Tin Chi Tiết', headerTitleAlign: 'center' },
  },
  {
    name: 'NumCategoryDetailScreen',
    component: NumCategoryDetailScreen,
    options: { title: 'Thông Tin TSH', headerTitleAlign: 'center' },
  },
  {
    name: 'NumActiveCategoryDetailScreen',
    component: NumActiveCategoryDetailScreen,
    options: { title: 'Thông Tin Active', headerTitleAlign: 'center' },
  },
  {
    name: 'NumInactiveCategoryDetailScreen',
    component: NumInactiveCategoryDetailScreen,
    options: { title: 'Thông Tin Inactive', headerTitleAlign: 'center' },
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
