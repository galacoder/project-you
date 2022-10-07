import { TextInput as NativeTextInput } from 'react-native'
import { styled } from 'nativewind'
import { View } from 'app/design/view'

const StyledTextInput = styled(NativeTextInput)

export const TextInput = (props) => {
  return (
    < View >
      <StyledTextInput className="w-6 h-6" {...props} />
    </View >
  )
}
