import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { Smartie } from 'app/components/smartie'
import InputField from 'app/components/text-input'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { H3, P } from 'app/design/typography'
import React from 'react'
import { Link, TextLink } from 'solito/link'

function SignInEmailScreen() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-white">Email của bạn là</H3>
      <InputField
        PlaceholderText="example@gmail.com"
        PlaceholderTextColor="#999"
        KeyboardType="email-address"
      />

      <SpacerXXL />
      <SpacerXXL />

      <Link className="text-white" href="/auth/sign-in-password">
        <P className="text-white">Next</P>
      </Link>

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../../assets/icons/back_hand_icon.png')}
        backdNavigateParent="Auth"
        backScreenName="SignUpNoAccountScreen"
        // backButtonName="Chưa"
        // forward
        forwardNavigateParent="Auth"
        forwardScreenName="SignInPasswordScreen"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../../assets/icons/forward_hand_icon.png')}
      />
    </Layout>
  )
}

export default SignInEmailScreen
