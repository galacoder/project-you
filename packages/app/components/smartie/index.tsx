import { View } from 'app/design/view'
import { P, H1 } from 'app/design/typography'
import Lottie from 'lottie-react-native'
import { styled } from 'nativewind'
import { SpacerS } from 'app/design/spacing'

type Props = {
  content?: string
}

const Container = styled(View)
const LottieView = styled(Lottie)
const Text = styled(P)

export const Smartie = (props: Props) => {
  return (
    <Container className="flex text-center self-center">
      <LottieView
        className="w-32 h-32"
        source={require('./animation.json')}
        autoPlay
        loop
      />
      <SpacerS />
      <Text>{props.content ? props.content : ''}</Text>
    </Container>
  )
}
