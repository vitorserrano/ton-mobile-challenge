import styled, { css } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

export type ButtonTypeProps = { type: string }

type ButtonProps = TouchableOpacityProps & ButtonTypeProps

export const Modal = styled.Modal``

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Description = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text};
    font-family: ${fonts.text400};
    font-size: 16px;

    line-height: 22px;
    margin-top: 8px;
  `}
`

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  background-color: ${({ theme, type }) =>
    type === 'remove' ? theme.colors.red500 : theme.colors.background};
  margin-left: 20px;
  padding: 12px 16px;
  border-radius: 8px;
`

export const ButtonText = styled.Text<ButtonTypeProps>`
  ${({ theme: { colors, fonts }, type }) => css`
    color: ${type === 'remove' ? colors.red50 : colors.text};
    font-family: ${fonts.text500};
    font-size: 13px;
    text-transform: uppercase;
  `}
`
