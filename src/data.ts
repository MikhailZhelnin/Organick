import {IOffer} from "@/global/interfaces/IOffer";
import {IAboutFeature} from "@/global/interfaces/IAboutFeature";
import {ITestimonialsFeature} from "@/global/interfaces/ITestimonialsFeature";
import {IWhoWeAreFeature} from "@/global/interfaces/IWhoWeAreFeature";
import {IGallery} from "@/global/interfaces/IGallery";

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