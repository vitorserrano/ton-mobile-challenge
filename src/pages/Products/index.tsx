import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'

import { useCart } from '../../context/cart'
import { getProducts, ProductProps } from '../../services/procucts'
import { Layout, ProductCard, Heading, StatusBar } from '../../components'

import {
  Header,
  Logo,
  CartButton,
  CartIcon,
  NumberOfCartProducts,
  LoaderContainer,
  Loader,
  Container,
  ProductList,
} from './styles'

import logoImg from '../../assets/logo.png'

export const Products = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<ProductProps[]>([])

  const navigation = useNavigation()
  const { cartItems, addProduct, removeProduct } = useCart()

  const loadProducts = async (): Promise<void> => {
    setLoading(true)

    try {
      const response = await getProducts()
      setProducts(response)
    } catch {
      showMessage({
        message: 'Ops!',
        description: 'Não foi possível carregar os produtos.',
        type: 'danger',
      })
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  const navigateToCart = () => navigation.navigate('Cart')

  const findProduct = (product: ProductProps) =>
    !!cartItems.find(item => item.id === product.id)

  const handleProduct = (product: ProductProps) =>
    findProduct(product) ? removeProduct(product) : addProduct(product)

  console.log(cartItems)

  useEffect(() => {
    loadProducts()
  }, [])

  if (loading) {
    return (
      <Layout>
        <StatusBar variant="primary" />

        <Header>
          <Logo source={logoImg} resizeMode="contain" />
          <CartButton onPress={navigateToCart} style={{ flexDirection: 'row' }}>
            <CartIcon />

            <NumberOfCartProducts>{''}</NumberOfCartProducts>
          </CartButton>
        </Header>

        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </Layout>
    )
  }

  return (
    <Layout>
      <StatusBar variant="primary" />

      <Header>
        <Logo source={logoImg} resizeMode="contain" />

        <CartButton onPress={navigateToCart} style={{ flexDirection: 'row' }}>
          <CartIcon />
          <NumberOfCartProducts>{cartItems.length || ''}</NumberOfCartProducts>
        </CartButton>
      </Header>

      <Container>
        <Heading>Todas as maquininhas</Heading>

        <ProductList
          data={products}
          keyExtractor={(item: ProductProps) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              data={item}
              onPress={() => handleProduct(item)}
              hasCurrentProduct={findProduct(item)}
            />
          )}
        />
      </Container>
    </Layout>
  )
}
