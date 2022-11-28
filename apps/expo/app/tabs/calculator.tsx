import { Tabs, Stack } from 'expo-router'
import { CalculatorInputNameScreen } from 'app/features/calculator'

export default function Page() {
  return (
    <>
      {/* <Stack.Screen options={{ title: 'Calculator' }} /> */}
      <CalculatorInputNameScreen />
    </>
  )
}
