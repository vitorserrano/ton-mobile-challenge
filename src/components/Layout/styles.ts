import styled from 'styled-components/native'
import { statusBarHeight, bottomSpaceHeight } from '../../utils/constants'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${statusBarHeight} 0 ${bottomSpaceHeight} 0;
`
