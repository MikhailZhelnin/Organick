import {Yellowtail} from "next/font/google";
import Image from "next/image";

import {icons} from "../../../../public/assets/icons/icons";

import styles from './ContactUsLocation.module.scss'

const yellowtail = Yellowtail({
  weight: ['400'],
  subsets: ['latin'],
})

const ContactUsLocation = () => {
  return (
    <section className={styles.contactUsLocation}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <span className={`${styles.infoOverhead} ${yellowtail.className}`}>Location</span>
            <h2 className={styles.infoTitle}>Our Farms</h2>
            <div className={styles.infoText}>
              <p>
                Established fact that a reader will be distracted by the readable content of a page when looking a
                layout. The point of using.
              </p>
            </div>
            <ul className={styles.infoList}>
              <li className={styles.infoListItem}>
                <div className={styles.infoListItemImage}>
                  <Image src={icons.location} alt='Location'/>
                </div>
                <address className={styles.infoListItemAddress}>
                  <strong>New York, USA:</strong>
                  <div className={styles.infoListItemAddressBottom}>
                    <span>299 Park Avenue New York,</span>
                    <span> New York 10171</span>
                  </div>
                </address>
              </li>
              <li className={styles.infoListItem}>
                <div className={styles.infoListItemImage}>
                  <Image src={icons.location} alt='Location'/>
                </div>
                <address className={styles.infoListItemAddress}>
                  <strong>London, UK:</strong>
                  <div className={styles.infoListItemAddressBottom}>
                    <span>30 Stamford Street,</span>
                    <span>London SE1 9LQ</span>
                  </div>
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsLocation;