import React from 'react'
import { Text } from 'react-native'

import { ProductProps } from '../../services/procucts'
import {
  Container,
  Image,
  Name,
  Amount,
  DicountAmount,
  AddButton,
  AddIcon,
} from './styles'

type CardProductProps = {
  data: ProductProps
}

export const CardProduct = ({ data }: CardProductProps) => {
  const { name, amount, discount_amount, img_url } = data

  return (
    <Container>
      <Image source={{ uri: img_url }} resizeMode="contain" />
      <Name>{name}</Name>

      <Amount>{amount}</Amount>
      <DicountAmount>{discount_amount}</DicountAmount>

      <AddButton onPress={() => console.log('teste')}>
        <AddIcon />
      </AddButton>
    </Container>
  )
}
