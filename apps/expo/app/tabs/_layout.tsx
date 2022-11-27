import { Link, Tabs, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native'
import { P } from 'app/design/typography'
import { SpacerS } from 'app/design/spacing'


export default function AppLayout() {
  return (
    <>
      {/*  */}
      <Stack.Screen
        options={{
          // headerShown: false,
          headerBackVisible: false,
          headerTransparent: true,
          headerTitleStyle: { color: 'white' },
          headerTitleAlign: 'left',
          headerBackground: () => (
            <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
          ),

          headerRight: () => (
            <>
              <P className="text-white">Crown</P>
              <SpacerS />
              <P className="text-white">Heart</P>
            </>
          )
        }}
      />

      {/* Tabs Config */}
      <Tabs initialRouteName='profile' screenOptions={({ route }) => ({

        headerShown: false,
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


// export default Tabs;
