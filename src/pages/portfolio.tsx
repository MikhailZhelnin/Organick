import {GetStaticProps} from "next";
import Image from "next/image";
import {Yellowtail} from "next/font/google";

import client from "../../client";

import {images} from "../../public/assets/images/images";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import PageHeading from "@/components/PageHeading/PageHeading";
import Subscribe from "@/components/Subscribe/Subscribe";

import {IPortfolio} from "@/global/interfaces/IPortfolio";
import {urlFor} from "@/helpers/urlFor";

import styles from '../styles/PortfolioStandardPage.module.scss'

const yellowtail = Yellowtail({
  weight: ['400'],
  subsets: ['latin'],
})

interface PortfolioStandardPageProps {
  portfolio: IPortfolio[]
}

export default function PortfolioStandardPage({portfolio}: PortfolioStandardPageProps) {
  return (
    <Main meta={<Meta title='Organick Portfolio Standard' description='Organick Portfolio Standard Page'/>}>
      <PageHeading title='Portfolio Standard' image={images.page_heading.portfolio}/>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.list}>
            {portfolio.map(elem => (
              <li className={styles.listItem}>
                <div className={styles.listItemTop}>
                  <Image src={urlFor(elem.image).url()} alt={elem.title} fill className={styles.listItemTopImage}/>
                  <div className={styles.listItemTopInfo}>
                    <p>{elem.info}</p>
                  </div>
                </div>
                <h6 className={styles.listItemTitle}>{elem.title}</h6>
                <span className={`${styles.listItemText} ${yellowtail.className}`}>{elem.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const portfolio = await client.fetch(`
    *[_type == "portfolio"] {
      id,
      title,
      image,
      text,
      info
    }
  `)

  return {
    props: {
      portfolio,
    }
  }
}