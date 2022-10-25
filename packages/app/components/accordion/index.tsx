import React from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import { AnimateHeight } from './animate-height'
import { Ionicons } from '@expo/vector-icons'
import { MotiView } from 'moti'
import Constants from 'expo-constants'

export default function Accordion() {
  return (
    <View style={styles.screen}>
      {new Array(3).fill('').map((_, i) => {
        return <Item key={i} index={i} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    backgroundColor: 'rgba(235, 235, 245, 0.18)',
    width: '100%',
    borderRadius: 10,
  },
})

function Item({ index }: { index: number }) {
  const [show, toggle] = React.useReducer((open) => !open, false)

  return (
    <View style={itemStyles.container}>
      <Pressable onPress={toggle} style={itemStyles.question}>
        <Text selectable={false} style={itemStyles.questionText}>
          Question {index}
        </Text>
        <MotiView
          animate={{
            rotateZ: show ? '-90deg' : '0deg',
          }}
        >
          <Ionicons name="chevron-forward" color="white" size={17} />
        </MotiView>
      </Pressable>
      <AnimateHeight enterFrom="bottom" hide={!show}>
        <View style={itemStyles.answer}>
          <Text style={itemStyles.answerText}>
            Against staggering odds, two things happened: one, the universe.
            Two, you. Let’s walk at our full height, honor the forebears, have a
            smile and for god’s sake, floss.
          </Text>
        </View>
      </AnimateHeight>
    </View>
  )
}

const itemStyles = StyleSheet.create({
  question: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  answer: {
    padding: 16,
    marginTop: -16,
  },
  answerText: {
    color: '#A09FA5',
    lineHeight: 20,
  },
  container: {
    width: '100%',

    borderBottomWidth: 1,
    borderBottomColor: '#232326',
  },
  questionText: {
    color: '#EDEDEE',
    fontWeight: 'bold',
  },
})
