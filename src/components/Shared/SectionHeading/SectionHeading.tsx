import {Yellowtail} from "next/font/google";

import styles from './SectionHeading.module.scss'

const yellowtail = Yellowtail({
  weight: ['400'],
  subsets: ['latin'],
})

interface SectionHeadingProps {
  overhead?: string
  title: string
  position?: 'center' | 'left'
  marginBottom?: string
}

const SectionHeading = ({overhead, title, position = 'center', marginBottom = '40px'}: SectionHeadingProps) => {
  return (
    <div
      style={{marginBottom: marginBottom}}
      className={position === 'center' ? `${styles.sectionTitle} ${styles.sectionTitleCenter}` : position === 'left' ? `${styles.sectionTitle} ${styles.sectionTitleLeft}` : ''}>
      {overhead &&
          <span className={`${styles.sectionTitleOverhead} ${yellowtail.className}`}>{overhead}</span>
      }
      <h2 className={styles.sectionTitleTitle}>{title}</h2>

    </div>
  )
}

export default SectionHeading;