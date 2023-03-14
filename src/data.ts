import {IOffer} from "@/global/interfaces/IOffer";
import {IAboutFeature} from "@/global/interfaces/IAboutFeature";
import {ITestimonialsFeature} from "@/global/interfaces/ITestimonialsFeatures";

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