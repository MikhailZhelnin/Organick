import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import client from '../../client'
import {images} from "../../public/assets/images/images";

import Products from "@/components/Products/Products";
import PageHeading from "@/components/PageHeading/PageHeading";
import Subscribe from "@/components/Subscribe/Subscribe";

import {IProduct} from "@/global/interfaces";

import styles from '../styles/ShopPage.module.scss'

interface ShopPageProps {
  products: IProduct[]
}

export default function ShopPage({products}: ShopPageProps) {
  return (
    <Main meta={<Meta title='Organick Shop' description='Organick Shop Page'/>}>
      <PageHeading title='Shop' image={images.page_heading.shop}/>
      <div className={styles.container}>
        <Products products={products}/>
      </div>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await client.fetch(`
    *[_type == "products"] {
      id,
      title,
      price,
      discount,
      image,
      rating,
      category
    }
  `)

  return {
    props: {
      products,
    }
  }
}