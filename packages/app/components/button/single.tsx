import { View } from 'app/design/view'
import { Image, ImageSourcePropType } from 'react-native'
import { P } from 'app/design/typography'
import { StyledComponent } from 'nativewind'
import { MotiLink } from 'solito/moti'

type Props = {
  name?: string
  iconSrc?: ImageSourcePropType
  children?: JSX.Element
  href: string
  as?: string
}

// const StyledButton = styled(TouchableOpacity)

export const SingleButton = (props: Props) => {



  return (
    <View className="flex-row  justify-center px-2 py-1 bg-white w-fit rounded-2xl h-16 m-3">
      <MotiLink
        href={props.href}
        as={props.as}
        animate={({ hovered, pressed }) => {
          'worklet'
          return {
            scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          }
        }}>

        <StyledComponent
          component={Image}
          source={props.iconSrc}
          className="w-12 h-12"
        />

        {/* <Image source={require('../../assets/icons/next_arrow_icon.png')} /> */}
        <P className="text-black"> {props.name || ''}</P>
      </MotiLink >
    </View >
  )
}
