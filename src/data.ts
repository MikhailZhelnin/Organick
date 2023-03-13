import {IOfferData} from "@/global/interfaces/IOfferData";
import {IAboutFeaturesData} from "@/global/interfaces/IAboutFeaturesData";

import {images} from "../public/assets/images/images";
import {icons} from "../public/assets/icons/icons";

export const offerData: IOfferData[] = [
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

export const aboutFeaturesData: IAboutFeaturesData[] = [
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