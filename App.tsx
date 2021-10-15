import React from 'react'

import AppLoading from 'expo-app-loading'
import FlashMessage from 'react-native-flash-message'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components'

import { appTheme } from './src/styles/theme'
import { Routes } from './src/routes'

import { StatusBar } from './src/components'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar variant="primary" />
      <Routes />

      <FlashMessage position="bottom" />
    </ThemeProvider>
  )
}

export default App
