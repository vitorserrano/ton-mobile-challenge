import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { Flow } from 'react-native-animated-spinkit'

import { ProductProps } from '../../services/procucts'

export const Header = styled(LinearGradient).attrs(({ theme: { colors } }) => ({
  colors: [colors.green500, colors.green700],
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

export const CartButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
`

export const CartIcon = styled(Ionicons).attrs({
  name: 'ios-cart-outline',
  size: 32,
})`
  color: ${({ theme }) => theme.colors.white};
`

export const NumberOfCartProducts = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.white};
    font-family: ${fonts.text500};
    font-size: 13px;
    margin-left: 4px;
  `}
`

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loader = styled(Flow).attrs(({ theme }) => ({
  color: theme.colors.green500,
  size: 52,
}))``

export const Container = styled.View`
  margin-top: 40px;
  padding-left: 24px;
`

export const ProductList = styled(
  FlatList as new () => FlatList<ProductProps>
).attrs({
  numColumns: 2,
  columnWrapperStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})``
