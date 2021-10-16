import React, { useState, createContext, useContext, ReactNode } from 'react'
import { ProductProps } from '../services/procucts'

type CartContextProps = {
  cartItems: ProductProps[]
  addProduct: (product: ProductProps) => void
  removeProduct: (product: ProductProps) => void
}

type CartProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductProps[]>([])

  const addProduct = (product: ProductProps) =>
    setCartItems([...cartItems, product])

  const removeProduct = (product: ProductProps) =>
    setCartItems(cartItems.filter(item => item.id !== product.id))

  return (
    <CartContext.Provider value={{ cartItems, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextProps => useContext(CartContext)
