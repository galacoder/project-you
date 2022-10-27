import { SingleButton } from 'app/components/button/single'
import { ImageSourcePropType, View } from 'react-native'

type NavigationGroupType = {
  backHref: string
  backButtonIconSrc?: ImageSourcePropType
  backButtonName?: string
  forwardHref: string
  forwardButtonName?: string
  forwardButtonIconSrc?: ImageSourcePropType
}

export const NavigationButtonsGroup = (props: NavigationGroupType) => {
  return (
    <>
      <View className="flex-row ">
        <SingleButton
          name={props.backButtonName || ''}
          href={props.backHref || ''}
          iconSrc={
            props.backButtonIconSrc ||
            require('../../assets/icons/back_hand_icon.png')
          }
        />
        <SingleButton
          name={props.forwardButtonName || ''}
          href={props.forwardHref}
          iconSrc={
            props.forwardButtonIconSrc ||
            require('../../assets/icons/forward_hand_icon.png')
          }
        />
      </View>
    </>
  )
}
