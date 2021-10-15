import React, { useContext } from 'react'

import {
  SafeAreaView,
  StatusBarProps as RNStatusBarProps,
  StatusBarStyle,
} from 'react-native'

import { ThemeContext } from 'styled-components'

import { StyledStatusBar } from './styles'

type StatusBarProps = RNStatusBarProps & {
  variant: 'primary' | 'secondary'
}

export const StatusBar = ({ variant, ...rest }: StatusBarProps) => {
  const { colors } = useContext(ThemeContext)

  const colorsVariant = {
    primary: { backgroundColor: colors.lightGreen, barStyle: 'light-content' },
    secondary: { backgroundColor: colors.background, barStyle: 'dark-content' },
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.lightGreen }}>
      <StyledStatusBar
        backgroundColor={colorsVariant[variant].backgroundColor}
        barStyle={colorsVariant[variant].barStyle as StatusBarStyle}
        translucent
        {...rest}
      />
    </SafeAreaView>
  )
}
