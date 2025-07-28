import { NumUserListScreen } from 'app/features/you/'
import { Stack } from 'expo-router'

export default function Page() {
  return (<>
    <Stack.Screen options={{ title: 'User List' }} />
    <NumUserListScreen /></>)
}
