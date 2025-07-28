import { Link, Tabs, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { StyleSheet, View } from 'react-native'
import GamificationIndicators from 'app/components/gamification'

export default function AppLayout({ route, navigation }) {
  return (
    <>
      {/* Header config */}
      <Stack.Screen
        options={{
          headerShown: false,
          // headerBackVisible: false,
          // headerTransparent: true,
          // headerTitleStyle: { color: 'white' },
          // headerTitleAlign: 'left',
          // headerBackground: () => (
          //   <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
          // ),

          // headerRight: () => (
          //   <>
          //     {/* TODO: Input the Indicator API here*/}
          //     <GamificationIndicators />
          //   </>
          // )
        }}
      />

      {/* Tabs Config */}
      <Tabs initialRouteName='profile' screenOptions={({ route }) => ({
        // headerShown: false,
        headerBackVisible: false,
        headerTransparent: true,
        headerTitleStyle: { color: 'white' },
        headerTitleAlign: 'left',
        headerBackground: () => (
          <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
        ),

        headerRight: () => (
          <View style={{ paddingRight: 16 }}>
            {/* TODO: Input the Indicator API here*/}
            <GamificationIndicators />
          </View>
        ),

        tabBarIcon: ({ focused, color, size }) => {

          let iconName: any;

          if (route.name === 'motivational') {
            iconName = focused
              ? 'ios-sunny'
              : 'ios-sunny-outline';
          }
          else if (route.name === 'profile') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if (route.name === 'calculator') {
            iconName = focused ? 'ios-calculator' : 'ios-calculator-outline';
          }


          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00ffff',
        tabBarInactiveTintColor: 'gray',
        // tabBarShowLabel: false,

        tabBarStyle: { position: 'absolute', borderTopColor: 'rgba(0,0,0,0)' },
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
        ),
      })}>
        <Tabs.Screen name="motivational" options={{
          title: "Motivational",
        }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        <Tabs.Screen name="calculator" options={{ title: 'Calculator' }} />
      </Tabs>
    </>
  )
}


