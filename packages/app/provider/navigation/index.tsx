import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'Motivation',
            screens: {
              // Main: {
              //   path: 'main',
              //   screens: {
              //     Motivation: 'motivation',
              //   },
              // },
              Auth: {
                path: 'auth',
                screens: {
                  SignInPassword: 'sign-in-password/:email',
                  SignInEmail: 'sign-in-email',
                },
              },
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
