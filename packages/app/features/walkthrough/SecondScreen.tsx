import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { Button } from 'app/components/button'
import DatePicker from '@dietime/react-native-date-picker'
import { useState } from 'react'

export const FirstScreen = () => {
  const [date, setDate] = useState()

  return (
    <Layout className="items-center justify-center">
      <Smartie content="Hello" />
      <H3>Họ tên đầy đủ của tôi là </H3>
      <H3>{date ? date.toDateString() : 'Select date...'}</H3>
      <DatePicker
        value={date}
        onChange={(value) => setDate(value)}
        format="dd-mm-yyyy"
      />
      <Button name="Next" />
    </Layout>
  )
}
