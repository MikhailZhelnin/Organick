import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import client from '../../client'
import {images} from "../../public/assets/images/images";

import PageHeading from "@/components/PageHeading/PageHeading";
import Subscribe from "@/components/Subscribe/Subscribe";

import {IExpert} from "@/global/interfaces/IExpert";
import Experts from "@/components/Experts/Experts";

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