import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { H3 } from 'app/design/typography'
// import React from 'react'

function SignUpNoAccountScreen() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-center text-white">
        {' '}
        Bạn vui lòng thiết lập tài khoản để Smartie có thể lưu mọi thông tin tra
        cứu của bạn nhé.
      </H3>

      <SpacerXXL />
      <SpacerXXL />

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../../assets/icons/back_hand_icon.png')}
        backHref="/calculator/input-dob-screen"
        // backButtonName="Chưa"
        // forward
        forwardHref="/auth/signup/sign-up-email-screen"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../../assets/icons/forward_hand_icon.png')}
      />
    </Layout>
  )
}

export default SignUpNoAccountScreen
