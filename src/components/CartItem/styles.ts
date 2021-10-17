import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 30px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    box-shadow: ${colors.shadow};
  `}
`

export const QuantityOfItems = styled.View`
  align-items: center;
`

export const AddItem = styled(Feather).attrs({
  name: 'plus',
  size: 24,
})`
  color: ${({ theme }) => theme.colors.heading};
`

export const NumberContainer = styled.View`
  width: 28px;
  height: 28px;
  margin: 8px 0;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.green100};
`

export const NumberText = styled.Text`
  color: ${({ theme }) => theme.colors.green700};
`

export const RemoveItem = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`

export const RemoveIcon = styled(Feather).attrs({
  name: 'minus',
  size: 24,
})`
  color: ${({ theme }) => theme.colors.heading};
`

export const Item = styled.View`
  flex-direction: row;
`

export const Image = styled.Image`
  width: 46px;
  height: 75px;
`

export const TextGroup = styled.View`
  margin-left: 12px;
`

export const Name = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.heading};
    font-family: ${fonts.heading700};
    font-size: 18px;
  `}
`

export const Amount = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.green500};
    font-family: ${fonts.text500};
    font-size: 16px;
    margin-top: 6px;
  `}
`

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.red50};
`

export const TrashIcon = styled(Feather).attrs({
  name: 'trash',
  size: 24,
})`
  color: ${({ theme }) => theme.colors.red500};
`
