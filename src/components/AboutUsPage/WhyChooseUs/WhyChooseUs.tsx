import Image from "next/image";

import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";

import {icons} from "../../../../public/assets/icons/icons";
import {images} from "../../../../public/assets/images/images";

import styles from './WhyChooseUs.module.scss'

import {whyChooseUsFeatures} from "@/data";

const Component = () => {
  return (
    <section className={styles.whyChooseUse}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <SectionHeading
                overhead='Why Choose Us'
                title='We do not buy from the open market & traders.'
                position='left'
                marginBottom='25px'
              />
              <div className={styles.topLeftText}>
                <p>
                  Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
                  standard the 1500s, when an unknown
                </p>
              </div>
              <ul className={styles.topLeftList}>
                <li className={styles.topLeftListItem}>
                  <div className={styles.topLeftListItemTop}>
                    <Image src={icons.circle} alt='Circle icon' className={styles.topLeftListItemTopIcon}/>
                    <span className={styles.topLeftListItemTitle}>100% Natural Product</span>
                  </div>
                  <div className={styles.topLeftListItemText}>
                    <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                  </div>
                </li>
                <li className={styles.topLeftListItem}>
                  <div className={styles.topLeftListItemTop}>
                    <Image src={icons.circle} alt='Circle icon' className={styles.topLeftListItemTopIcon}/>
                    <span className={styles.topLeftListItemTitle}>Increases resistance</span>
                  </div>
                  <div className={styles.topLeftListItemText}>
                    <p>
                      Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the
                      thing
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.topRight}>
              <Image src={images.why_choose_us} alt='Why Choose Us'/>
            </div>
          </div>

          <div className={styles.bottom}>
            <ul className={styles.bottomList}>
              {whyChooseUsFeatures.map(feature => (
                <li key={feature.id} className={styles.bottomListItem}>
                  <div className={styles.bottomListItemIcon}>
                    <Image src={feature.icon} alt={feature.title} className={styles.bottomListItemIconIcon}/>
                  </div>
                  <h6 className={styles.bottomListItemTitle}>{feature.title}</h6>
                  <div className={styles.bottomListItemText}>
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

export default Component;