import {GetStaticPaths, GetStaticProps} from "next";

import client from '../../../client'

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";

import Subscribe from "@/components/Subscribe/Subscribe";
import NewsSingle from "@/components/NewsSinglePage/NewsSingle";

import {INews} from "@/global/interfaces";

interface NewsItemPagePageProps {
  news: INews,
}

export default function NewsItemPage({news}: NewsItemPagePageProps) {
  return (
    <Main meta={<Meta title={`Organick ${news.title}`} description={`Organick ${news.title} Page`}/>}>
      <NewsSingle news={news}/>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const news = await client.fetch(`
    *[_type == "news" && title == '${params?.newsSlug}'] {
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
      news: news[0],
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

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
  const paths = news.map((news: INews) => {
    return {
      params: {
        newsSlug: news.title,
      },
    }
  })

  return {
    paths,
    fallback: false
  }
}