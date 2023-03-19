import {Yellowtail} from "next/font/google";

import Button from "@/components/Shared/Button/Button";

import styles from './Banner.module.scss'

const yellowtail = Yellowtail({
  weight: ['400'],
  subsets: ['latin'],
})

export const Banner = () => {
    return (
        <section className={styles.banner} >
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={`${styles.overhead} ${yellowtail.className}`}>100% Natural Food</span>
                    <h1 className={styles.title}>Choose the best healthier way of life</h1>
                  <Button btnType='secondary' text='Explore Now'/>
                </div>
            </div>
        </section>
    )
}