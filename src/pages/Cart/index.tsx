import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { useCart, CartItemProps } from '../../context/cart'
import { StatusBar, Layout, Heading, CartItem } from '../../components'

import {
  Header,
  BackButton,
  Container,
  CartItemList,
  EmptyContainer,
  EmptyImageContainer,
  EmptyImage,
  Description,
} from './styles'

import emptyImg from '../../assets/empty-cart.png'

export const Cart = () => {
  const navigation = useNavigation()
  const { cartItems, handleItem, deleteProduct } = useCart()

  const navigateToBack = () => navigation.goBack()

  return (
    <Layout>
      <StatusBar variant="secondary" />

      <Header>
        <BackButton onPress={navigateToBack} />
      </Header>

      <Container>
        {!!cartItems.length && (
          <Heading>
            {`${cartItems.length} ${
              cartItems.length > 1
                ? 'produtos adicionados'
                : 'produto adicionado'
            }:`}
          </Heading>
        )}

        <CartItemList
          data={cartItems}
          keyExtractor={(item: CartItemProps) => item.id}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <CartItem
              key={item.id}
              data={item}
              onAdd={() => handleItem(item, 'add')}
              onRemove={() => handleItem(item, 'remove')}
              onDelete={() => deleteProduct(item)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyContainer>
              <EmptyImageContainer>
                <EmptyImage source={emptyImg} resizeMode="contain" />
              </EmptyImageContainer>

              <Heading>Carrinho vazio</Heading>
              <Description>
                Não sabe o que comprar? {'\n'} Milhares de produtos esperam por
                você!
              </Description>
            </EmptyContainer>
          )}
        />
      </Container>
    </Layout>
  )
}
