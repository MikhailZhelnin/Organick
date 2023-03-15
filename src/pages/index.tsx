import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import client from '../../client'

import Banner from "@/components/Home/Banner/Banner";
import OfferBanner from "@/components/Home/OfferBanner/OfferBanner";
import About from "@/components/About/About";
import Categories from "@/components/Home/Categories/Categories";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Offer from "@/components/Home/Offer/Offer";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import Gallery from "@/components/Home/Gallery/Gallery";
import News from "@/components/Home/News/News";

import {IProduct} from "@/global/interfaces/IProduct";
import {ITestimonial} from "@/global/interfaces/ITestimonial";
import {INews} from "@/global/interfaces/INews";

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
    *[_type == "news"] {
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
      products: products,
      testimonials: testimonials,
      news: news
    }
  }
}