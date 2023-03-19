import Image from "next/image";

import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";

import {whoWeAreFeaturesData} from "@/data";

import {images} from "../../../../public/assets/images/images";

import styles from './WhoWeAre.module.scss'

export const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAre}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image src={images.who_we_are} alt='Who we are' className={styles.leftImage}/>
        </div>
        <div className={styles.right}>
          <div className={styles.rightContent}>
            <SectionHeading
              overhead='Eco Friendly'
              title='Organick is a Friendly Organic Store'
              position='left'
              marginBottom='35px'
            />
            <ul className={styles.rightContentList}>
              {whoWeAreFeaturesData.map(feature => (
                <li key={feature.id} className={styles.rightContentListItem}>
                  <h6 className={styles.rightContentListItemTitle}>{feature.title}</h6>
                  <div className={styles.rightContentListItemText}>
                    <p>{feature.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}