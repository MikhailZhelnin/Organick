import {INews} from "../../global/interfaces/index";

import NewsItem from "@/components/NewsList/NewsItem/NewsItem";

import styles from './NewsList.module.scss'

interface NewsListProps {
    newsList: INews[],
}

const NewsList = ({newsList}: NewsListProps) => {
    return (
        <div className={styles.newsList}>
          {newsList.sort((a, b) => a.id - b.id).map(newsItem => (
            <NewsItem newsItem={newsItem} key={newsItem.id}/>
          ))}
        </div>
    )
}

export default NewsList;