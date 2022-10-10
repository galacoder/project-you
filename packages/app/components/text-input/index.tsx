import { TextInput as NativeTextInput } from 'react-native'
import { styled } from 'nativewind'
import { View } from 'app/design/view'

const StyledTextInput = styled(NativeTextInput)

export const TextInput = (props) => {
  return (
    <View>
      <StyledTextInput className="w-auto h-12" {...props} />
    </View>
  )
}
