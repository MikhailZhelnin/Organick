import Image from "next/image";

import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";

import {icons} from "../../../../public/assets/icons/icons";

import styles from './OrganicOnly.module.scss'

const Component = () => {
  return (
    <section className={styles.organicOnly}>
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionHeading
            overhead='Organic Only'
            title='Everyday Fresh & Clean'
            marginBottom='24px'
          />
          <div className={styles.text}>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
              standard dummy text ever since the
            </p>
          </div>
          <button className={styles.playButton}>
            <Image src={icons.play} alt='Play button' className={styles.playButtonIcon}/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Component;