import Image from "next/image";

import styles from './PageHeading.module.scss'

interface PageHeadingProps {
  title: string,
  image: string
}

const PageHeading = ({title, image}: PageHeadingProps) => {
  return (
    <div className={styles.pageHeading}>
      <Image src={image} alt={`${title} Heading`} className={styles.pageHeadingImage}/>
      <div className={styles.pageHeadingTitle}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default PageHeading;