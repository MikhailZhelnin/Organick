import Image from "next/image";
import {Yellowtail} from "next/font/google";

import {offerData} from "@/data";

import styles from './OfferBanner.module.scss'

const yellowtail = Yellowtail({
  weight: ['400'],
  subsets: ['latin'],
})

const OfferBanner = () => {
    return (
        <div className={styles.offerBanner}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {offerData.map(offer => (
                      <div className={styles.item} key={offer.id}>
                          <Image src={offer.background} alt={offer.title} className={styles.itemImage}/>
                          <div className={styles.itemContent}>
                              <span className={`${styles.itemContentOverhead} ${yellowtail.className}`}>{offer.overhead}</span>
                              <h3 className={styles.itemContentTitle}>{offer.title}</h3>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OfferBanner;