import styled, { css } from 'styled-components/native'

import { FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { CartItemProps } from '../../context/cart'

export const Container = styled.View`
  padding: 0 24px;
  margin-top: 40px;
`

export const Header = styled.View`
  padding: 18px 24px;
`

export const BackButton = styled(Feather).attrs({
  name: 'arrow-left',
  size: 28,
})`
  color: ${({ theme }) => theme.colors.green500};
`

export const CartItemList = styled(
  FlatList as new () => FlatList<CartItemProps>
)``

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const EmptyImageContainer = styled.View`
  width: 240px;
  height: 240px;
  border-radius: 22px;
  background-color: #e4e4e4;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

export const EmptyImage = styled.Image`
  width: 200px;
  height: 200px;
`

export const Description = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text};
    font-family: ${fonts.text400};
    font-size: 16px;

    line-height: 22px;
    margin-top: 8px;
    text-align: center;
  `}
`
