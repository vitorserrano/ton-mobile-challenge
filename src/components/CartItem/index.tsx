import React from 'react'

import { ProductProps } from '../../services/procucts'

import {
  Container,
  QuantityOfItems,
  AddItem,
  NumberContainer,
  NumberText,
  RemoveItem,
  Item,
  Image,
  TextGroup,
  Name,
  Amount,
  DeleteButton,
  TrashIcon,
} from './styles'

type CartItemProps = {
  data: ProductProps
  onDelete: () => void
}

export const CartItem = ({ data, onDelete }: CartItemProps) => {
  const { name, discount_amount, img_url } = data

  return (
    <Container>
      <QuantityOfItems>
        <AddItem />

        <NumberContainer>
          <NumberText>2</NumberText>
        </NumberContainer>

        <RemoveItem />
      </QuantityOfItems>

      <Item>
        <Image source={{ uri: img_url }} resizeMode="contain" />

        <TextGroup>
          <Name>{name}</Name>
          <Amount>{discount_amount}</Amount>
        </TextGroup>
      </Item>

      <DeleteButton onPress={onDelete}>
        <TrashIcon />
      </DeleteButton>
    </Container>
  )
}
