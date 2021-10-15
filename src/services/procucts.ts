import api from './api'

export type ProductProps = {
  id: string
  name: string
  amount: number
  discount_amount: number
  img_url: string
}

type ResponseProps = {
  data: { card_machines: ProductProps[] }
}

export const getProducts = async (): Promise<ProductProps[]> => {
  const {
    data: { card_machines },
  }: ResponseProps = await api.get('/ton-card-machines.json')

  return card_machines
}
