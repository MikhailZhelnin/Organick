export interface IPortfolio {
  id: string
  image: Image
  info: string
  text: string
  title: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}