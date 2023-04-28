export interface Asset {
  _ref: string
  _type: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface IProduct {
  category: string
  id: string
  image: Image
  price: number
  rating: number
  title: string
  color: string
  text?: string
  description?: string
  additionalInfo?: string
  quantity?: number
  totalPrice?: number
}