import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { P, H1 } from 'app/design/typography'
import { styled, StyledComponent } from 'nativewind'
import { Link } from 'solito/link'

type Props = {
  name?: string
  href: string
  iconSrc?: ImageSourcePropType
}

const StyledButton = styled(TouchableOpacity)

export const SingleButton = (props: Props) => {
  return (
    <Link href={props.href}>
      <StyledButton
        className="flex-row items-center justify-center px-2 py-1 bg-white w-fit rounded-2xl"
        {...props}
        activeOpacity={0.2}
        //@ts-ignore
      >
        <StyledComponent
          component={Image}
          source={props.iconSrc}
          className="w-12 h-12 "
        />

        {/* <Image source={require('../../assets/icons/next_arrow_icon.png')} /> */}
        <P className="text-black"> {props.name || ''}</P>
      </StyledButton>
    </Link>
  )
}
