import { View } from 'app/design/view'
import { P, H1 } from 'app/design/typography'
// import Lottie from 'lottie-react-native';

type Props = {
  content: string
}

export const Smartie = (props: Props) => {
  return (
    <View>
      {/* <Lottie source={require('./animation.json')} autoPlay loop /> */}
      <H1>Smartie</H1>
      {/* <P>{props.content}</P> */}
    </View>
  )
}



