import { SingleButton } from 'app/components/button/single'
import { ImageSourcePropType, View } from 'react-native'

type NavigationGroupType = {
  backScreenName: string
  backButtonIconSrc?: ImageSourcePropType
  backButtonName?: string
  backdNavigateParent?: string
  forwardScreenName: string
  forwardButtonName?: string
  forwardButtonIconSrc?: ImageSourcePropType
  forwardNavigateParent?: string
}

export const NavigationButtonsGroup = (props: NavigationGroupType) => {
  return (
    <>
      <View className="flex-row gap-3 ">
        <SingleButton
          name={props.backButtonName || ''}
          navigateScreenName={props.backScreenName || ''}
          navigateParent={props.backdNavigateParent}
          iconSrc={
            props.backButtonIconSrc ||
            require('../../assets/icons/back_hand_icon.png')
          }
        />
        <SingleButton
          name={props.forwardButtonName || ''}
          navigateScreenName={props.forwardScreenName}
          navigateParent={props.forwardNavigateParent}
          iconSrc={
            props.forwardButtonIconSrc ||
            require('../../assets/icons/forward_hand_icon.png')
          }
        />
      </View>
    </>
  )
}
