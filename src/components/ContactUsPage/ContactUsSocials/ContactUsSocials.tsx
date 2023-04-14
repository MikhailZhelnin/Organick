import Image from "next/image";

import Socials from "@/components/Shared/Socials/Socials";

import {images} from "../../../../public/assets/images/images";
import {icons} from "../../../../public/assets/icons/icons";

import styles from './ContactUsSocials.module.scss'

const ContactUsSocials = () => {
  return (
    <section className={styles.contactUsSocials}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Image src={images.contact_us.one} alt='Contact us'/>
          </div>
          <div className={styles.right}>
            <h2 className={styles.rightTitle}>We'd love to talk about how we can work together.</h2>
            <div className={styles.rightText}>
              <p>
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <ul className={styles.rightList}>
              <li className={styles.rightListItem}>
                <div className={styles.rightListItemIcon}>
                  <Image src={icons.mail} alt='Mail'/>
                </div>
                <div className={styles.rightListItemInfo}>
                  <h6 className={styles.rightListItemInfoTitle}>Message</h6>
                  <span className={styles.rightListItemInfoText}>support@organic.com</span>
                </div>
              </li>
              <li className={styles.rightListItem}>
                <div className={styles.rightListItemIcon}>
                  <Image src={icons.phone} alt='Phone'/>
                </div>
                <div className={styles.rightListItemInfo}>
                  <h6 className={styles.rightListItemInfoTitle}>Contact Us</h6>
                  <span className={styles.rightListItemInfoText}>+01 234 456 789</span>
                </div>
              </li>
            </ul>
            <Socials/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSocials;