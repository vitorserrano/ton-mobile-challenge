import styled from 'styled-components/native'
import { FlatList } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { Flow } from 'react-native-animated-spinkit'

import { ProductProps } from '../../services/procucts'

export const Header = styled(LinearGradient).attrs(({ theme: { colors } }) => ({
  colors: [colors.lightGreen, colors.darkGreen],
}))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 18px 24px;
`

export const Logo = styled.Image`
  width: 60px;
  height: 53px;
`

export const CartIcon = styled(Ionicons).attrs({
  name: 'ios-cart-outline',
  size: 32,
})`
  color: ${({ theme }) => theme.colors.white};
`

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loader = styled(Flow).attrs(({ theme }) => ({
  color: theme.colors.lightGreen,
  size: 52,
}))``

export const ProductList = styled(
  FlatList as new () => FlatList<ProductProps>
).attrs({
  numColumns: 2,
  columnWrapperStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})`
  padding-left: 24px;
`
