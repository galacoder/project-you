// import { View as Row } from 'app/design/view'
import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SingleButton } from 'app/components/button/single'
import InputField from 'app/components/text-input'
import { SpacerXXL } from 'app/design/spacing'
import { View } from 'react-native'
import { NavigationButtonsGroup } from 'app/components/button/navigation-group'
import { Link } from 'solito/link'

export const CalculatorInputName = () => {
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
        backdNavigateParent="Walkthrough"
        backScreenName="Start"
        // backButtonName="Chưa"
        // forward
        forwardNavigateParent="Calculator"
        forwardScreenName="CalculatorInputDOB"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../assets/icons/forward_hand_icon.png')}
      />
      <Link href={`/artists/$x=test%3F`} shallow>
        <View />
      </Link>
    </Layout>
  )
}
