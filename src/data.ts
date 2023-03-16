import {IOffer} from "@/global/interfaces/IOffer";
import {IAboutFeature} from "@/global/interfaces/IAboutFeature";
import {ITestimonialsFeature} from "@/global/interfaces/ITestimonialsFeature";
import {IWhoWeAreFeature} from "@/global/interfaces/IWhoWeAreFeature";
import {IGallery} from "@/global/interfaces/IGallery";
import {IFooterContact} from "@/global/interfaces/IFooterContact";
import {IFooterSocial} from "@/global/interfaces/IFooterSocial";
import {IFooterPage} from "@/global/interfaces/IFooterPage";

import {images} from "../public/assets/images/images";
import {icons} from "../public/assets/icons/icons";

export const offerData: IOffer[] = [
  {
    id: 1,
    overhead: 'Natural!!',
    title: 'Get Garden Fresh Fruits',
    background: images.offer_banner.one
  },
  {
    id: 2,
    overhead: 'Offer!!',
    title: 'Get 10% off on Vegetables',
    background: images.offer_banner.two
  },
]

export const aboutFeaturesData: IAboutFeature[] = [
  {
    id: 1,
    title: 'Organic Foods Only',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    icon: icons.aboutFeatures.one
  },
  {
    id: 2,
    title: 'Quality Standarts',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    icon: icons.aboutFeatures.two
  },
]

export const testimonialsFeaturesData: ITestimonialsFeature[] = [
  {
    id: 1,
    title: '100%',
    text: 'Organic',
  },
  {
    id: 2,
    title: '285',
    text: 'Active Product',
  },
  {
    id: 3,
    title: '350+',
    text: 'Organic Orchads',
  },
  {
    id: 4,
    title: '25+',
    text: 'Years of Farming',
  },
]

export const whoWeAreFeaturesData: IWhoWeAreFeature[] = [
  {
    id: 1,
    title: 'Start with Our Company First',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    id: 2,
    title: 'Learn How to Grow Yourself',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    id: 3,
    title: 'Farming Strategies of Today',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
]

export const galleryData: IGallery[] = [
  {
    id: 1,
    title: 'Organic Juice',
    image: images.gallery.one,
  },
  {
    id: 2,
    title: 'Organic Food',
    image: images.gallery.two,
  },
  {
    id: 3,
    title: 'Nuts Cookies',
    image: images.gallery.three,
  },
]

export const footerContactsData: IFooterContact[] = [
  {
    id: 1,
    title: "Email",
    text: 'needhelp@Organia.com',
  },
  {
    id: 2,
    title: "Phone",
    text: '666 888 888',
  },
  {
    id: 3,
    title: "Address",
    text: '88 road, brooklyn street, USA',
  },
]

export const footerSocialsData: IFooterSocial[] = [
  {
    id: 1,
    name: 'Instagram',
    icon: icons.socials.instagram,
    link: 'https://www.instagram.com',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: icons.socials.facebook,
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    name: 'Twitter',
    icon: icons.socials.twitter,
    link: 'https://twitter.com',
  },
  {
    id: 4,
    name: 'Pinterest',
    icon: icons.socials.pinterest,
    link: 'https://www.pinterest.com',
  },
]

export const footerPagesData: IFooterPage[] = [
  {
    id: 1,
    text: 'Style Guide',
    link: '/',
  },
  {
    id: 2,
    text: '404 Not Found',
    link: '/',
  },
  {
    id: 3,
    text: 'Password Protected',
    link: '/',
  },
  {
    id: 4,
    text: 'Licences',
    link: '/',
  },
  {
    id: 5,
    text: 'Changelog',
    link: '/',
  },
]