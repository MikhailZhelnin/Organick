import {GetStaticPaths, GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import PageHeading from "@/components/PageHeading/PageHeading";
import ShopSingle from "@/components/ShopSinglePage/ShopSingle";
import RelatedProducts from "@/components/ShopSinglePage/RelatedProducts/RelatedProducts";
import Subscribe from "@/components/Subscribe/Subscribe";

import client from '../../../client'
import {images} from "../../../public/assets/images/images";

import {IProduct} from "@/global/interfaces";

interface ShopItemPageProps {
  product: IProduct,
  products: IProduct[]
}

export default function ShopItemPage({product, products}: ShopItemPageProps) {
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