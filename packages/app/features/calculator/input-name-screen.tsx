// import { View as Row } from 'app/design/view'
import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import InputField from 'app/components/text-input'
import { SpacerXXL } from 'app/design/spacing'
import { NavigationButtonsGroup } from 'app/components/button/navigation-group'

export const CalculatorInputNameScreen = () => {
  return (
    <Layout>
      <SpacerXXL />

      <Smartie />
      <H3 className="text-white">Họ tên đầy đủ của bạn là</H3>
      <InputField
        PlaceholderText="Le Ngo Bao Sang"
        PlaceholderTextColor="#999"
      />

      <SpacerXXL />
      <SpacerXXL />

      <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../assets/icons/back_hand_icon.png')}
        backHref="/"
        // backButtonName="Chưa"
        // forward
        forwardHref="/cauculator/input-dob"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../assets/icons/forward_hand_icon.png')}
      />

    </Layout>
  )
}
