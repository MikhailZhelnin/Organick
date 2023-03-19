import Image from "next/image";
import Link from "next/link";
import {Yellowtail} from "next/font/google";

import {urlFor} from "@/helpers/urlFor";

import {IExpert} from "@/global/interfaces/IExpert";

import {icons} from "../../../../public/assets/icons/icons";

import styles from './Expert.module.scss'

const yellowtail = Yellowtail({
  weight: ['400'],
  subsets: ['latin'],
})

const selectExpertSocialIcon = (socialName: string) => {
  switch (socialName) {
    case 'Instagram':
      return { icon: icons.socials.instagram };
    case 'Facebook':
      return { icon: icons.socials.facebook };
    case 'Twitter':
      return { icon: icons.socials.twitter };
  }
};

interface ExpertProps {
  expert: IExpert,
}

const Expert = ({expert}: ExpertProps) => {
  return (
    <div className={styles.expert}>
      <div className={styles.expertImage}>
        <Image src={urlFor(expert.image).url()} alt={expert.name} width={449} height={485}/>
      </div>
      <div className={styles.expertInfo}>
        <div className={styles.expertInfoLeft}>
          <h6 className={styles.expertInfoLeftName}>{expert.name}</h6>
          <span className={`${styles.expertInfoLeftPosition} ${yellowtail.className}`}>
            {expert.position}
          </span>
        </div>
        <div className={styles.expertInfoRight}>
          {expert.socials.map(social => (
            <Link href={social.link} key={social._key} target='_blank' className={styles.expertInfoRightSocial}>
              <Image src={selectExpertSocialIcon(social.name)?.icon} alt={social.name}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expert;