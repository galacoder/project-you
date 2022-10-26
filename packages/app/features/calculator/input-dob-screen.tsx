import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { SingleButton } from 'app/components/button/single'
import DatePicker from '@dietime/react-native-date-picker'
// import DatePicker from 'react-native-date-picker'
import { useState } from 'react'
import { NavigationButtonsGroup } from 'app/components/button/navigation-group'

export const CalculatorInputDOBScreen = () => {
  const [date, setDate] = useState()

  return (
    <Layout className="items-center justify-center">
      <Smartie content="Hello" />
      <H3 className="text-[#fff]">Họ tên đầy đủ của tôi là </H3>
      <H3 className="text-[#fff]">
        {date ? date.toDateString() : 'Select date...'}
      </H3>
      <DatePicker
        value={date}
        onChange={(value) => setDate(value)}
        format="dd-mm-yyyy"
        textColor="#fff"
        fadeColor="#4B4B4B"
        height={200}
      />
      {/* <DatePicker date={date} onDateChange={setDate} /> */}
      {/* <NavigationButtonsGroup
        //backward
        backButtonIconSrc={require('../../assets/icons/back_hand_icon.png')}
        backdNavigateParent="Calculator"
        backScreenName="CalculatorInputNameScreen"
        // backButtonName="Chưa"
        // forward
        forwardNavigateParent="Calculator"
        forwardScreenName="CalculatorLoadingScreen"
        // forwardButtonName="Có"
        forwardButtonIconSrc={require('../../assets/icons/forward_hand_icon.png')}
      /> */}
    </Layout>
  )
}
