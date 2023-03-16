import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";
import Button from "@/components/Shared/Button/Button";
import NewsList from "@/components/NewsList/NewsList";

import {INews} from "@/global/interfaces/INews";

import styles from './News.module.scss'

interface NewsProps {
  news: INews[],
}

const News = ({news}: NewsProps) => {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading
              overhead='News'
              title='Discover weekly content about organic food & more'
              position='left'
              marginBottom='0px'
              maxWidth='702px'
            />
            <Button btnType='third' text='More News' asLink link='/'/>
          </div>
          <NewsList newsList={news.slice(0,2)}/>
        </div>
      </div>
    </section>
  )
}

export default News;