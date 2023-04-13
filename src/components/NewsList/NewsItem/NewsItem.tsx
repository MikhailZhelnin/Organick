import Image from "next/image";

import Button from "@/components/Shared/Button/Button";

import {urlFor} from "@/helpers/urlFor";
import {icons} from "../../../../public/assets/icons/icons";

import {INews} from "../../../global/interfaces/index";

import styles from './NewsItem.module.scss'

interface NewsItemProps {
  newsItem: INews,
}

const NewsItem = ({newsItem}: NewsItemProps) => {
  return (
    <article className={styles.newsItem}>
      <div className={styles.newsItemImage}>
        <Image
          src={urlFor(newsItem.image).url()}
          alt={newsItem.title}
          width={677}
          height={524}
          className={styles.newsItemImageImage}
        />
      </div>
      <div className={styles.newsItemDate}>
        <span className={styles.newsItemDateDate}>{newsItem.posted}</span>
      </div>
      <div className={styles.newsItemInfo}>
        <div className={styles.newsItemInfoTop}>
          <Image src={icons.user} alt="User" className={styles.newsItemInfoTopIcon}/>
          <span className={styles.newsItemInfoTopName}>{newsItem.name}</span>
        </div>
        <h6 className={styles.newsItemInfoTitle}>{newsItem.title}</h6>
        <div className={styles.newsItemInfoText}>
          <p>{newsItem.text}</p>
        </div>
        <Button btnType='secondary' text='Read More' asLink link={`/news/${newsItem.title}`}/>
      </div>
    </article>
  )
}

export default NewsItem;