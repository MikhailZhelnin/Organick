import Link from "next/link";
import Image from "next/image";

import {socialsData} from "@/data";

import styles from "./Socials.module.scss";

const Component = () => {
    return (
      <div className={styles.socials}>
        {socialsData.map(social => (
          <Link href={social.link} key={social.id} className={styles.socialsItem}>
            <Image src={social.icon} alt={social.name} className={styles.socialsItemImage}/>
          </Link>
        ))}
      </div>
    )
}

export default Component;