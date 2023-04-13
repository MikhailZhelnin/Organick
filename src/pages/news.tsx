import {GetStaticProps} from "next";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import client from '../../client'
import {images} from "../../public/assets/images/images";

import PageHeading from "@/components/PageHeading/PageHeading";
import NewsList from "@/components/NewsList/NewsList";
import Subscribe from "@/components/Subscribe/Subscribe";

import {INews} from "@/global/interfaces";

import styles from '../styles/NewsPage.module.scss'

interface RecentNewsPageProps {
  news: INews[]
}

export default function RecentNewsPage({news}: RecentNewsPageProps) {
  return (
    <Main meta={<Meta title='Organick Recent News' description='Organick Recent News Page'/>}>
      <PageHeading title='Recent News' image={images.page_heading.news}/>
      <div className={styles.container}>
        <div className={styles.content}>
          <NewsList newsList={news}/>
        </div>
      </div>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const news = await client.fetch(`
    *[_type == "news"] {
      id,
      title,
      text,
      name,
      posted,
      image,
      content
    }
  `)

  return {
    props: {
      news,
    }
  }
}