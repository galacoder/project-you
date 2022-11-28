import { ImageSourcePropType, Image, View } from 'react-native'
import { P } from 'app/design/typography'

type GamificationIndicatorType = {
  crownIndicator?: number;
  heartIndicator?: number;
}

export default function GamificationIndicators(props: GamificationIndicatorType) {
  return (
    <View className='flex-row gap-3 justify-center content-center '>
      <View className='flex-row gap-2 '>
        <Image className='h-6 w-6' source={require('../../assets/icons/gem.png')} />
        <P className='text-white'>{props.crownIndicator || 1}</P>
      </View>
      <View className='flex-row gap-2 '>
        <Image className='h-6 w-6' source={require('../../assets/icons/crown.png')} />
        <P className='text-white'>{props.heartIndicator || 1}</P>
      </View>
    </View>
  )
}

// function Indicator({ imgSrc, number }: { imgSrc?: ImageSourcePropType, number?: number }) {
//   return (
//     <View className='flex-row gap-2 self-center'>
//       <Image className='h-6 w-6' source={imgSrc || require('../../assets/icons/crown.png')} />
//       <P className='text-white'>{number || 1}</P>
//     </View>
//   )
// }

