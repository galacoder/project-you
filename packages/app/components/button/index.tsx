import { View } from 'app/design/view'
import { TouchableOpacity, Image, Text } from 'react-native'
import { P, H1 } from 'app/design/typography'
import { styled } from 'nativewind'


type Props = {
  name: string
  onPress?: () => void
}

const StyledButton = styled(TouchableOpacity)

export const Button = (props: Props) => {
  return (
    <View>
      <StyledButton className="p-3 my-3 w-fit rounded-2xl bg-primary-dark" {...props}>
        {/* <Image source={require('../../assets/icons/next_arrow_icon.png')} /> */}
        <Text> {props.name ? props.name : ""}</Text>
      </StyledButton>
    </View>
  )
}
