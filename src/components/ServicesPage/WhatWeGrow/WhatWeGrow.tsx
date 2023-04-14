import Image from "next/image";

import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";
import Button from "@/components/Shared/Button/Button";

import {servicesFeaturesData} from "@/data";
import {images} from "../../../../public/assets/images/images";

import styles from './WhatWeGrow.module.scss'

const WhatWeGrow = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <SectionHeading
          overhead='What we Grow'
          title='Better Agriculture for Better Future'
          marginBottom='0'
        />
        <div className={styles.content}>
          <ul className={styles.list}>
            {servicesFeaturesData.slice(0, 3).map(feature => (
              <li key={feature.id} className={`${styles.listItem} ${styles.listItemLeft}`}>
                <div className={styles.listItemImage}>
                  <Image src={feature.icon} alt={feature.title}/>
                </div>
                <h6 className={styles.listItemTitle}>{feature.title}</h6>
                <div className={styles.listItemText}>
                  <p>{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.image}>
            <Image src={images.services.pack} alt='Services pack'/>
          </div>
          <ul className={styles.list}>
            {servicesFeaturesData.slice(3, 6).map(feature => (
              <li key={feature.id} className={`${styles.listItem} ${styles.listItemRight}`}>
                <div className={styles.listItemImage}>
                  <Image src={feature.icon} alt={feature.title}/>
                </div>
                <h6 className={styles.listItemTitle}>{feature.title}</h6>
                <div className={styles.listItemText}>
                  <p>{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.button}>
          <Button btnType='third' text='Explore More' asLink link='/shop'/>
        </div>
      </div>
    </section>
  )
}

export default WhatWeGrow;