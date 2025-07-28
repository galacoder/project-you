import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { Smartie } from 'app/components/smartie'
import InputField from 'app/components/text-input'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { H3 } from 'app/design/typography'

function SignUpPasswordConfirmScreen() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-center text-white">Xác nhận mật khẩu của bạn là</H3>
      <InputField
        PlaceholderText="Admin123"
        PlaceholderTextColor="#999"
        KeyboardType="default"
        SecureTextEntry={true}
      />

      <SpacerXXL />
      <SpacerXXL />

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../../assets/icons/back_hand_icon.png')}
        backHref="/auth/signup/sign-up-password"
        // backButtonName="Chưa"
        // forward
        forwardHref="/tabs"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../../assets/icons/forward_hand_icon.png')}
      />
    </Layout>
  )
}

export default SignUpPasswordConfirmScreen
