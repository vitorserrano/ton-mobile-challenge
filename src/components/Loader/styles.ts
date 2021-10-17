import styled from 'styled-components/native'
import { Flow } from 'react-native-animated-spinkit'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Spinner = styled(Flow).attrs(({ theme }) => ({
  color: theme.colors.green500,
  size: 52,
}))``
