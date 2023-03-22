import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import PageHeading from "@/components/PageHeading/PageHeading";
import Subscribe from "@/components/Subscribe/Subscribe";

import {images} from "../../public/assets/images/images";

export default function ServicesPage() {
  return (
    <Main meta={<Meta title='Organick Services' description='Organick Services Page'/>}>
      <PageHeading title='Services' image={images.page_heading.services}/>
      <Subscribe/>
    </Main>
  )
}

