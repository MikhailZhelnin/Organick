export interface Asset {
  _ref: string;
  _type: string;
}

export interface Image {
  _type: string;
  asset: Asset;
}

export interface IProduct {
  category: string;
  discount: number;
  id: string;
  image: Image;
  price: number;
  rating: number;
  title: string;
}