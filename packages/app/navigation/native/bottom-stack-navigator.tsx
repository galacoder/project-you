/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

// import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CalculatorInputNameScreen } from '../../features/calculation'
import MotivationScreen from '../../features/motivation'
import { UserProfileScreen } from '../../features/you/'

import { LinearGradient } from 'expo-linear-gradient'

const BottomTab = createBottomTabNavigator<{
  CalculatorLoading: undefined
  Motivation: undefined
  UserProfile: undefined
}>()

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: 68,
          backgroundColor: 'rgba(255, 255, 255,0.3)',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        },
      }}
    >
      <Tab.Screen name="Motivation" component={MotivationScreen} />
      <Tab.Screen name="You" component={UserProfileScreen} />
      <Tab.Screen name="Calculator" component={CalculatorInputNameScreen} />
    </Tab.Navigator>
  )
}

export { BottomTabNavigator }
