import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import PageHeading from "@/components/PageHeading/PageHeading";
import Products from "@/components/Products/Products";
import Subscribe from "@/components/Subscribe/Subscribe";

import client from '../../client'
import {images} from "../../public/assets/images/images";

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