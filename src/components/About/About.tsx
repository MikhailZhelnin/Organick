import Image from "next/image";
import {Yellowtail} from "next/font/google";

import Button from "@/components/Shared/Button/Button";
import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";

import {aboutFeaturesData} from "@/data";

import styles from './About.module.scss'

const yellowtail = Yellowtail({
  weight: ['400'],
  subsets: ['latin'],
})

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionHeading
            overhead='About Us'
            title='We Believe in Working Accredited Farmers'
            position='left'
            marginBottom='16px'
          />
          <div className={styles.text}>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <ul className={styles.list}>
            {aboutFeaturesData.map(feature => (
              <li className={styles.listItem} key={feature.id}>
                <div className={styles.listItemImage}>
                  <Image src={feature.icon} alt={feature.title}/>
                </div>
                <div className={styles.listItemContent}>
                  <h6 className={styles.listItemContentTitle}>{feature.title}</h6>
                  <div className={styles.listItemContentText}>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Button btnType='main' text='Shop Now' asLink link='/shop'/>
        </div>
      </div>
    </section>
  )
}

export default About;