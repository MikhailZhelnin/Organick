import Image from "next/image";

import {galleryData} from "@/data";

import styles from './Gallery.module.scss'

export const Gallery = () => {
    return (
        <div className={styles.gallery}>
          <div className={styles.content}>
            <ul className={styles.list}>
              {galleryData.map(item => (
                <li className={styles.listItem} key={item.id}>
                  <Image src={item.image} alt={item.title} className={styles.listItemImage}/>
                  <div className={styles.listItemContent}>
                    <h6 className={styles.listItemContentTitle}>{item.title}</h6>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
}