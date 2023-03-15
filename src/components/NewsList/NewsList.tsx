import {INews} from "@/global/interfaces/INews";

import NewsItem from "@/components/NewsList/NewsItem/NewsItem";

import styles from './NewsList.module.scss'

interface NewsListProps {
    newsList: INews[],
}

import {PortableText} from '@portabletext/react'
// const components = {
//   block: {
//     h1: ({children}: any) => <h1 style={{fontSize: '100px', marginBottom: '10px'}}>{children}</h1>,
//   },
// }
{/*<PortableText*/}
{/*  value={news[0].content}*/}
{/*  components={components}*/}
{/*/>*/}

const NewsList = ({newsList}: NewsListProps) => {
    return (
        <div className={styles.newsList}>
          {newsList.map(newsItem => (
            <NewsItem newsItem={newsItem} key={newsItem.id}/>
          ))}
        </div>
    )
}

export default NewsList;