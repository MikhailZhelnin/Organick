import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import PageHeading from "@/components/PageHeading/PageHeading";
import ContactUsSocials from "@/components/ContactUsPage/ContactUsSocials/ContactUsSocials";
import ContactUsLocation from "@/components/ContactUsPage/ContactUsLocation/ContactUsLocation";
import ContactUsForm from "@/components/ContactUsPage/ContactUsForm/ContactUsForm";
import Subscribe from "@/components/Subscribe/Subscribe";

import {images} from "../../public/assets/images/images";

export default function ContactUsPage() {
  return (
    <Main meta={<Meta title='Organick Contact Us' description='Organick Contact Us Page'/>}>
      <PageHeading title='Contact Us' image={images.page_heading.contact_us}/>
      <ContactUsSocials/>
      <ContactUsLocation/>
      <ContactUsForm/>
      <Subscribe/>
    </Main>
  )
}