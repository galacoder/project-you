import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { H3 } from 'app/design/typography'
import { ActivityIndicator } from 'react-native'

export function CalculatorLoadingScreen() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-center text-white">
        Smartie đang tính toán thông tin thần số học của bạn...
      </H3>

      <SpacerXXL />
      <ActivityIndicator size="large" color="#fff" />
      <SpacerXXL />

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../assets/icons/back_hand_icon.png')}
        backHref="/calculator/input-dob-screen"
        // backButtonName="Chưa"
        // forward
        forwardHref="auth/signup/sign-up-no-account-screen"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../assets/icons/forward_hand_icon.png')}
      />
    </Layout>
  )
}
