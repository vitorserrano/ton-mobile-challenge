import React from 'react'

import { ProductProps } from '../../services/procucts'
import { formatCurrency } from '../../utils/format'

import {
  Container,
  Image,
  Name,
  Amount,
  DicountAmount,
  ActionButton,
  ActionIcon,
} from './styles'

type ProductCardProps = {
  data: ProductProps
  onPress: () => void
  hasCurrentProduct: boolean
}

export const ProductCard = ({
  data,
  onPress,
  hasCurrentProduct,
}: ProductCardProps) => {
  const { name, amount, discount_amount, img_url } = data

  return (
    <Container>
      <Image source={{ uri: img_url }} resizeMode="contain" />
      <Name>{name}</Name>

      <Amount>{amount}</Amount>
      <DicountAmount>{formatCurrency(discount_amount)}</DicountAmount>

      <ActionButton onPress={onPress} hasCurrentProduct={hasCurrentProduct}>
        <ActionIcon name={hasCurrentProduct ? 'trash' : 'plus'} />
      </ActionButton>
    </Container>
  )
}
