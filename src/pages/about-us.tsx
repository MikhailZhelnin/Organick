import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import PageHeading from "@/components/PageHeading/PageHeading";
import About from "@/components/About/About";
import Experts from "@/components/Experts/Experts";
import WhyChooseUs from "@/components/AboutUsPage/WhyChooseUs/WhyChooseUs";
import Subscribe from "@/components/Subscribe/Subscribe";

import client from '../../client'
import {images} from "../../public/assets/images/images";

import {IExpert} from "@/global/interfaces/IExpert";

interface AboutUsPageProps {
  experts: IExpert[]
}

export default function AboutUsPage({experts}: AboutUsPageProps) {
  return (
    <Main meta={<Meta title='Organick About Us' description='Organick About Us Page'/>}>
      <PageHeading title='About Us' image={images.page_heading.about_us}/>
      <About/>
      <Experts experts={experts}/>
      <WhyChooseUs/>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const experts = await client.fetch(`
    *[_type == "experts"][0...3] {
     id,
     image,
     name,
     position,
     socials
}
  `)


  return {
    props: {
      experts,
    }
  }
}