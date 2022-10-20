/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

// import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { ActivityIndicator } from '../../components/activity-indicator'
// import React, { Suspense } from 'react'
// import { Image } from 'react-native'

// import { supabase } from '../lib/supabase'

import { CalculatorInputName } from '../../features/calculation'
import Motivation from '../../features/motivation'
import { UserProfile } from '../../features/you/'
// import { P } from 'app/design/typography'

const BottomTab = createBottomTabNavigator<{
  CalculatorLoading: undefined
  Motivation: undefined
  UserProfile: undefined
}>()

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Motivation" component={Motivation} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
      <Tab.Screen name="CalculatorInputName" component={CalculatorInputName} />
    </Tab.Navigator>
  )
}

export { BottomTabNavigator }
