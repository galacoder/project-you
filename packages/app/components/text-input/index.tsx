// import * as React from 'react'
import { TextInput, StyleSheet } from 'react-native'

type InputFieldType = {
  PlaceholderText?: string
  KeyboardType?: string
  PlaceholderTextColor?: string
  SecureTextEntry?: boolean
}

const InputField = ({
  PlaceholderText,
  KeyboardType,
  PlaceholderTextColor,
  SecureTextEntry,
}: InputFieldType) => {
  return (
    <TextInput
      style={styles.inputFieldTextInput}
      placeholder={PlaceholderText}
      keyboardType={KeyboardType}
      placeholderTextColor={PlaceholderTextColor}
      autoFocus
      secureTextEntry={SecureTextEntry}
    />
  )
}

const styles = StyleSheet.create({
  inputFieldTextInput: {
    borderRadius: 14,
    width: 261,
    height: 59,
    flexShrink: 0,
    flexDirection: 'column',
    padding: 16,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#00CFFD',
    fontWeight: '600',
    fontSize: 18,
  },
})

export default InputField
