// import { View as Row } from 'app/design/view'
import { H3 } from 'app/design/typography'
import { Smartie } from 'app/components/smartie'
import { Layout } from 'app/design/layout'
import { Button } from 'app/components/button'
import { TextInput } from 'app/components/text-input'
import Background from 'app/components/background'

export const FirstScreen = () => {
  return (
    <Layout>
      <Background />
      <Smartie />
      <H3>Họ tên đầy đủ của tôi là </H3>
      <TextInput value="text" />
      <Button name="Next" />
    </Layout>
  )
}
