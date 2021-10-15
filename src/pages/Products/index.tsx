import React, { useState, useEffect } from 'react'
import { showMessage } from 'react-native-flash-message'

import { getProducts, ProductProps } from '../../services/procucts'
import { Layout, CardProduct } from '../../components'

import {
  Header,
  Logo,
  CartIcon,
  LoaderContainer,
  Loader,
  ProductList,
} from './styles'
import logoImg from '../../assets/logo.png'

export const Products = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<ProductProps[]>([])

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

  useEffect(() => {
    loadProducts()
  }, [])

  if (loading) {
    return (
      <Layout>
        <Header>
          <Logo source={logoImg} resizeMode="contain" />
          <CartIcon />
        </Header>

        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header>
        <Logo source={logoImg} resizeMode="contain" />
        <CartIcon />
      </Header>

      <ProductList
        data={products}
        keyExtractor={(item: ProductProps) => item.id}
        renderItem={({ item }) => <CardProduct data={item} />}
      />
    </Layout>
  )
}
