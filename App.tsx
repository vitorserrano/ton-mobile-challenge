import React from 'react'

import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components'

import { appTheme } from './src/styles/theme'
import { Products } from './src/pages/Products'

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
      <StatusBar style="light" />
      <Products />
    </ThemeProvider>
  )
}

export default App
