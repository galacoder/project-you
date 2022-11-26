import { Link, Tabs, Stack } from 'expo-router'

export default function AppLayout() {
  return (
    <>
      {/* Header Config */}
      <Stack.Screen
        options={{
          headerBackVisible: false
        }}
      />

      {/* Tabs Config */}
      <Tabs>
        <Tabs.Screen name="index" options={{
          headerShown: false,
          title: "main",
          // tabBarIcon: ({ focused, color, size }) => { }
        }} />
        <Tabs.Screen name="second" options={{ title: 'Second' }} />
      </Tabs>
    </>
  )
}


// export default Tabs;
