import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import PageHeading from "@/components/PageHeading/PageHeading";
import Experts from "@/components/Experts/Experts";
import Subscribe from "@/components/Subscribe/Subscribe";

import client from '../../client'
import {images} from "../../public/assets/images/images";

import {IExpert} from "@/global/interfaces/IExpert";


interface OurTeamPageProps {
  experts: IExpert[]
}

export default function OurTeamPage({experts}: OurTeamPageProps) {
  return (
    <Main meta={<Meta title='Organick Our Team' description='Organick Our Team Page'/>}>
      <PageHeading title='Our Team' image={images.page_heading.team}/>
      <Experts experts={experts}/>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const experts = await client.fetch(`
    *[_type == "experts"] {
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