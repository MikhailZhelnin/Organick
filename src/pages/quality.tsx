import Image from "next/image";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import PageHeading from "@/components/PageHeading/PageHeading";
import Subscribe from "@/components/Subscribe/Subscribe";

import {images} from "../../public/assets/images/images";

import styles from '../styles/QualityStandardPage.module.scss';

export default function QualityStandardPage() {
  return (
    <Main meta={<Meta title='Organick Quality Standard' description='Organick Quality Standard Page'/>}>
      <PageHeading title='Quality Standard' image={images.page_heading.quality}/>
      <section className={styles.qualityStandard}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.mainImage}>
              <Image src={images.quality_standard.main} alt='Quality Standard Main'/>
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.title}>Organic Store Services</h2>
              <div className={styles.text}>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p>
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                  and uncover many web sites still in their infancy. Various versions have evolved over the years
                </p>
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <div className={styles.listItemImage}>
                    <Image src={images.quality_standard.feature_one} alt='Quality Standard Feature One'/>
                  </div>
                  <div className={styles.listItemContent}>
                    <h6 className={styles.listItemContentTitle}>Why Organic</h6>
                    <div className={styles.listItemContentText}>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum
                        as their default model text, and auncover.
                      </p>
                    </div>
                  </div>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listItemImage}>
                    <Image src={images.quality_standard.feature_two} alt='Quality Standard Feature One'/>
                  </div>
                  <div className={styles.listItemContent}>
                    <h6 className={styles.listItemContentTitle}>Speciality Produce</h6>
                    <div className={styles.listItemContentText}>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum
                        as their default model text, and uncover.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <h4 className={styles.titleSmall}>We farm your land</h4>
              <div className={styles.text}>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe/>
    </Main>
  )
}