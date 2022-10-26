// import { View as Row } from 'app/design/view'
import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
// s
import { TextLink, Link as SolitoLink } from 'solito/link'
import { Text, View } from 'react-native'

import { Stack, Link } from 'expo-router'

export const StartScreen = () => {
  return (
    <Layout>
      <SpacerXXL />
      <Stack.Screen options={{ title: 'Start' }} />
      <Smartie />
      <H3 className="text-center text-white ">
        Hi Bạn! Mình là Smartie. Bạn đã có tài khoản chưa?
      </H3>

      <SpacerXXL />
      <SpacerXXL />

      <View>
        <Link className="text-white" href="/calculator/input-dob">
          Next
        </Link>
      </View>

      <SolitoLink viewProps={{ style: { height: 100 } }} href="/">
        <Text className="mt-8 text-white">Calculator</Text>
      </SolitoLink>

      {/* <TextLink className="text-white" href="/calculator/input-dob">
        Go <Text>Home</Text>
      </TextLink> */}
    </Layout>
  )
}
