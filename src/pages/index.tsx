import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import client from '../../client'

import Banner from "@/components/Home/Banner/Banner";
import OfferBanner from "@/components/Home/OfferBanner/OfferBanner";
import About from "@/components/About/About";
import Categories from "@/components/Home/Categories/Categories";

import {IProduct} from "@/global/interfaces/IProduct";

interface HomeProps {
  products: IProduct[]
}

export default function Home(props: HomeProps) {

  const {products} = props;

  return (
    <Main meta={<Meta title='Organick Home' description='Organick Home Page'/>}>
      <Banner/>
      <OfferBanner/>
      <About/>
      <Categories products={products}/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await client.fetch(`
    *[_type == "products"][0...8] {
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
      products: products,
    }
  }
}