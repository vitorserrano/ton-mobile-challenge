import React from 'react'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import AppLoading from 'expo-app-loading'
import FlashMessage from 'react-native-flash-message'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components'

import { CartProvider } from './src/context/cart'
import { appTheme } from './src/styles/theme'
import { Routes } from './src/routes'

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
    <CartProvider>
      <ThemeProvider theme={appTheme}>
        <Routes />

        <FlashMessage position="bottom" />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
