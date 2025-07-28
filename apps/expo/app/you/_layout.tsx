import { Link, Stack } from 'expo-router'
import { BlurView } from 'expo-blur';
import { StyleSheet, View, Text } from 'react-native'
import GamificationIndicators from 'app/components/gamification'


export default function AppLayout({ route, navigation }) {
  return (
    <>
      {/* Header config */}
      <Stack
        screenOptions={{
          // headerShown: false,
          headerTintColor: 'white',
          headerBackTitleVisible: false,
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
        }}
      />

    </>
  )
}


