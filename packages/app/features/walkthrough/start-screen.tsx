// import { View as Row } from 'app/design/view'
import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'


import { Stack } from 'expo-router'
import { NavigationButtonsGroup } from '../../components/button/navigation-group'
import { SingleButton } from '../../components/button/single'

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

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../assets/icons/thumbs-down.png')}
        backHref="/calculator/input-name"
        backButtonName="Chưa"
        // forward
        forwardHref="/auth/signin/sign-in-email"
        forwardButtonName="Có"
        forwardButtonIconSrc={require('../../assets/icons/thumbs-up.png')}
      />
      <SingleButton
        href='/motivation'
        iconSrc={require('../../assets/icons/sphere.png')}
      />
    </Layout>
  )
}
