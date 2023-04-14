import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import {Banner, OfferBanner, Categories, Testimonials, Offer, WhoWeAre, Gallery, News} from '@/components/HomePage';
import About from "@/components/About/About";
import Subscribe from "@/components/Subscribe/Subscribe";

import client from '../../client'

import {IProduct, ITestimonial, INews} from '@/global/interfaces'

interface HomeProps {
  products: IProduct[]
  testimonials: ITestimonial[]
  news: INews[]
}

export default function Home({products, testimonials, news}: HomeProps) {

  return (
    <Main meta={<Meta title='Organick Home' description='Organick Home Page'/>}>
      <Banner/>
      <OfferBanner/>
      <About/>
      <Categories products={products}/>
      <Testimonials testimonials={testimonials}/>
      <Offer products={products}/>
      <WhoWeAre/>
      <Gallery/>
      <News news={news}/>
      <Subscribe/>
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
  const testimonials = await client.fetch(`
    *[_type == "testimonials"] {
      id,
      image,
      rating,
      text,
      name,
      info
    }
  `)
  const news = await client.fetch(`
    *[_type == "news"][0...2] {
      id,
      title,
      text,
      name,
      posted,
      image,
      content
    }
  `)

  return {
    props: {
      products,
      testimonials,
      news
    }
  }
}