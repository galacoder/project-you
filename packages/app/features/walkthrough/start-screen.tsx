// import { View as Row } from 'app/design/view'
import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { SingleButton } from 'app/components/button/single'

export const StartScreen = () => {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-center text-white ">
        Hi Bạn! Mình là Smartie. Bạn đã có tài khoản chưa?
      </H3>

      <SpacerXXL />
      <SpacerXXL />

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../assets/icons/thumbs-down.png')}
        backdNavigateParent="Calculator"
        backScreenName="CalculatorInputNameScreen"
        backButtonName="Chưa"
        // forward
        forwardNavigateParent="Auth"
        forwardScreenName="SignInEmail"
        forwardButtonName="Có"
        forwardButtonIconSrc={require('../../assets/icons/thumbs-up.png')}
      />
      <SingleButton
        navigateParent="Main"
        navigateScreenName="MotivationScreen"
        iconSrc={require('../../assets/icons/sphere.png')}
      />
    </Layout>
  )
}
