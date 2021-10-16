import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  padding: 0 24px;
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
