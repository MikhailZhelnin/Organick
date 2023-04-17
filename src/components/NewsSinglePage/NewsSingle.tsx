import Image from "next/image";
import {PortableText, PortableTextComponents} from '@portabletext/react'

import {icons} from "../../../public/assets/icons/icons";
import {urlFor} from "@/helpers/urlFor";

import {INews} from "@/global/interfaces";

import styles from './NewsSingle.module.scss'

interface NewsSingleProps {
  news: INews,
}

const components: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className={styles.textH1}>{children}</h1>,
    h3: ({children}) => <h3 className={styles.textH3}>{children}</h3>,
    normal: ({children}) => <p className={styles.textNormal}>{children}</p>,
  },
  listItem: {
    bullet: ({children}) => <li className={styles.textList}>{children}</li>,
    number: ({children}) => <ol className={styles.textList}>{children}</ol>,
  },
}

const NewsSingle = ({news}: NewsSingleProps) => {
  return (
    <div className={styles.newsSingle}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Image src={urlFor(news.image).url()} alt={news.title} fill className={styles.topImage}/>
            <div className={styles.topInfo}>
              <div className={styles.topInfoUser}>
                <span className={styles.topInfoUserPosted}><strong>Posted On:</strong> {news.posted}</span>
                <Image src={icons.user} alt={news.name} className={styles.topInfoUserIcon}/>
                <span className={styles.topInfoUserName}>{news.name}</span>
              </div>
              <h5 className={styles.topInfoTitle}>{news.title}</h5>
              <div className={styles.topInfoText}>
                <p>{news.text}</p>
              </div>
            </div>
          </div>

          <div className={styles.text}>
            <PortableText
              value={news.content}
              components={components}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSingle;