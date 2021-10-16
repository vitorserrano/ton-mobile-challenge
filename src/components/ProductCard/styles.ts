import styled, { css } from 'styled-components/native'

import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

type ActionButtonProps = TouchableOpacityProps & {
  hasCurrentProduct: boolean
}

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    box-shadow: ${colors.shadow};
  `};

  flex: 1;
  max-width: 160px;
  padding: 16px;
  margin-top: 30px;
  margin-right: 24px;
  border-radius: 8px;
`

export const Image = styled.Image`
  width: 58px;
  height: 95px;
  align-self: center;
`

export const Name = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.heading};
    font-family: ${fonts.heading700};
    font-size: 16px;
    margin-top: 20px;
  `}
`

export const Amount = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text};
    font-family: ${fonts.text400};
    font-size: 13px;
    text-decoration-line: line-through
    margin-top: 8px;
  `}
`

export const DicountAmount = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.green500};
    font-family: ${fonts.text500};
    font-size: 18px;
    margin-top: 4px;
  `}
`

export const ActionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ActionButtonProps>`
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  bottom: 0;

  width: 47px;
  height: 44px;

  border-top-left-radius: 160px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 160px;

  background: ${({ theme, hasCurrentProduct }) =>
    hasCurrentProduct ? theme.colors.red500 : theme.colors.green500};
`

export const ActionIcon = styled(Feather).attrs(({ name }) => ({
  name,
  size: 22,
}))`
  color: ${({ theme }) => theme.colors.white};
`
