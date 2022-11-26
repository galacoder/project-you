import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SpacerXXL } from 'app/design/spacing'
import { H3 } from 'app/design/typography'

function HelpScreen() {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-white">Help Screen</H3>

      <SpacerXXL />
      <SpacerXXL />

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../assets/icons/back_hand_icon.png')}
        backHref="/"
        backButtonName="Return home"
        // forward
        forwardHref="/payment/help-screen"
        forwardButtonName="Next"
        forwardButtonIconSrc={require('../../assets/icons/forward_hand_icon.png')}
      />
    </Layout>
  )
}

export default HelpScreen
