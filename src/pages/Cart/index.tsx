import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { useCart } from '../../context/cart'
import { StatusBar, Layout, Heading, CartItem } from '../../components'
import { Header, BackButton, Container } from './styles'

export const Cart: React.FC = () => {
  const navigation = useNavigation()
  const { cartItems, removeProduct } = useCart()

  const navigateToBack = () => navigation.goBack()

  return (
    <Layout>
      <StatusBar variant="secondary" />

      <Header>
        <BackButton onPress={navigateToBack} />
      </Header>

      <Container>
        <Heading>2 produtos adicionados:</Heading>

        {cartItems.map(item => (
          <CartItem
            key={item.id}
            data={item}
            onDelete={() => removeProduct(item)}
          />
        ))}
      </Container>
    </Layout>
  )
}
