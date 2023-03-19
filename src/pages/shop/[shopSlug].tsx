import {GetStaticPaths, GetStaticProps} from "next";
import {Rating} from 'react-simple-star-rating'

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import client from '../../../client'
import {images} from "../../../public/assets/images/images";

import PageHeading from "@/components/PageHeading/PageHeading";
import Subscribe from "@/components/Subscribe/Subscribe";

import {IProduct} from "@/global/interfaces";
import ShopSingle from "@/components/ShopSinglePage/ShopSingle";
import RelatedProducts from "@/components/ShopSinglePage/RelatedProducts/RelatedProducts";

interface ShopPageProps {
  product: IProduct,
  products: IProduct[]
}

export default function ShopPage({product, products}: ShopPageProps) {
  return (
    <Main meta={<Meta title={`Organick ${product.title}`} description={`Organick ${product.title} Page`}/>}>
      <PageHeading title='Shop Single' image={images.page_heading.shop_single}/>
      <ShopSingle product={product}/>
      <RelatedProducts products={products}/>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const product = await client.fetch(`
    *[_type == "products" && title == '${params?.shopSlug}'] {
      id,
      title,
      text,
      description,
      additionalInfo,
      price,
      discount,
      image,
      rating,
      category
    }
  `)
  const products = await client.fetch(`
    *[_type == "products"][0...4] {
      id,
      title,
      text,
      description,
      additionalInfo,
      price,
      discount,
      image,
      rating,
      category
    }
  `)

  return {
    props: {
      product: product[0],
      products
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const products = await client.fetch(`
    *[_type == "products"] {
      id,
      title,
      text,
      description,
      additionalInfo,
      price,
      discount,
      image,
      rating,
      category
    }
  `)
  const paths = products.map((product: IProduct) => {
    return {
      params: {
        shopSlug: product.title,
      },
    }
  })

  return {
    paths,
    fallback: false
  }
}