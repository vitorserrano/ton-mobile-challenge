import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Products } from '../pages/Products'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Products: undefined
    }
  }
}

const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Products" component={Products} />
    </Navigator>
  </NavigationContainer>
)
