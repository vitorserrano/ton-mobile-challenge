import styled, { css } from 'styled-components/native'

export const Text = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.heading};
    font-family: ${fonts.heading700};
    font-size: 24px;
  `}
`
