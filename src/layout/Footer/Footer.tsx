import Link from "next/link";
import Image from "next/image";

import Socials from "@/components/Shared/Socials/Socials";

import {footerContactsData, footerPagesData} from "@/data";
import {icons} from "../../../public/assets/icons/icons";

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h5 className={styles.leftTitle}>Contact Us</h5>
            <ul className={styles.leftList}>
              {footerContactsData.map(contact => (
                <ul key={contact.id} className={styles.leftListItem}>
                  <span className={styles.leftListItemTitle}>{contact.title}</span>
                  <span className={styles.leftListItemText}>{contact.text}</span>
                </ul>
              ))}
            </ul>
          </div>

          <div className={styles.center}>
            <div className={styles.centerLogo}>
              <Image src={icons.logo} alt="Logo"/>
            </div>
            <div className={styles.centerText}>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
            </div>
            <Socials/>
          </div>

          <div className={styles.right}>
            <h5 className={styles.rightTitle}>Utility Pages</h5>
            <ul className={styles.rightList}>
              {footerPagesData.map(contact => (
                <li key={contact.id} className={styles.rightListItem}>
                  <Link href={contact.link} className={styles.rightListItemLink}>{contact.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;