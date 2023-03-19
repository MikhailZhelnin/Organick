export interface IExpert {
  id: string
  image: Image
  name: string
  position: string
  socials: Social[]
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Social {
  _key: string
  _type: string
  link: string
  name: string
}