import {
  IOffer,
  IAboutFeature,
  ITestimonialsFeature,
  IWhoWeAreFeature,
  IGallery,
  IFooterContact,
  IFooterSocial,
  IFooterPage,
  IWhyChooseUsFeature,
  IMenuItem,
  IServicesFeature
} from './global/interfaces/index'

import {images} from "../public/assets/images/images";
import {icons} from "../public/assets/icons/icons";

export const menuItemsData: IMenuItem[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about-us',
  },
  {
    id: 3,
    title: 'Pages',
    link: '/',
    submenu: [
      {
        id: 1,
        title: 'Services',
        link: '/services',
      },
      {
        id: 2,
        title: 'Quality',
        link: '/',
      },
      {
        id: 3,
        title: 'Portfolio',
        link: '/',
      },
      {
        id: 4,
        title: 'Team',
        link: '/',
      },
      {
        id: 5,
        title: 'Contact',
        link: '/',
      },
    ],
  },
  {
    id: 4,
    title: 'Shop',
    link: '/shop',
  },
  {
    id: 5,
    title: 'Projects',
    link: '/',
  },
  {
    id: 6,
    title: 'News',
    link: '/',
  },
]

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

export const whyChooseUsFeatures: IWhyChooseUsFeature[] = [
  {
    id: 1,
    icon: icons.why_choose_us.one,
    title: 'Return Policy',
    text: 'Simply dummy text of the printintypesetting industry.'
  },
  {
    id: 2,
    icon: icons.why_choose_us.two,
    title: '100% Fresh',
    text: 'Simply dummy text of the printintypesetting industry.'
  },
  {
    id: 3,
    icon: icons.why_choose_us.three,
    title: 'Support 24/7',
    text: 'Simply dummy text of the printintypesetting industry.'
  },
  {
    id: 4,
    icon: icons.why_choose_us.four,
    title: 'Secured Payment',
    text: 'Simply dummy text of the printintypesetting industry.'
  },
]

export const servicesFeaturesData: IServicesFeature[] = [
  {
    id: 1,
    icon: icons.services.one,
    title: 'Dairy Products',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'
  },
  {
    id: 2,
    icon: icons.services.two,
    title: 'Store Services',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'
  },
  {
    id: 3,
    icon: icons.services.three,
    title: 'Delivery Services',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'
  },
  {
    id: 4,
    icon: icons.services.four,
    title: 'Agricultural Services',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'
  },
  {
    id: 5,
    icon: icons.services.five,
    title: 'Organic Products',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'
  },
  {
    id: 6,
    icon: icons.services.six,
    title: 'Fresh Vegetables',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'
  },
]