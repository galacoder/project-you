import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { Smartie } from 'app/components/smartie'
import InputField from 'app/components/text-input'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { H3, P } from 'app/design/typography'

import { createParam } from 'solito'
import { Link } from 'solito/link'

const { useParam } = createParam()

function SignInPasswordScreen() {
  const [email] = useParam('email')
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-white">Mật khẩu của bạn là</H3>
      <H3 className="text-white">{email}</H3>
      <InputField
        PlaceholderText="Admin123"
        PlaceholderTextColor="#999"
        KeyboardType="default"
        SecureTextEntry={true}
      />

      <SpacerXXL />
      <SpacerXXL />

      {/* <Link className="text-white" href="/Auth/sign-in-email"> */}
      {/*   <P className="text-white">Next</P> */}
      {/* </Link> */}

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../../assets/icons/back_hand_icon.png')}
        backHref="/auth/signup/sign-up-email"
        // backButtonName="Chưa"
        // forward
        forwardHref="/auth/signup/sign-up-password-confirm"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../../assets/icons/forward_hand_icon.png')}
      />
    </Layout>
  )
}

export default SignInPasswordScreen
