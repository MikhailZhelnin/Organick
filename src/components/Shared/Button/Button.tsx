import React from "react";
import Image from "next/image";
import Link from "next/link";

import {icons} from "../../../../public/assets/icons/icons";

import styles from './Button.module.scss';

interface ButtonProps {
  btnType: "main" | "secondary" | 'third'
  text: string
  icon?: boolean
  asLink?: boolean
  link?: string
  btnAction?(): void
}

const Component = ({btnType, text, icon = true, asLink = false, link, btnAction}: ButtonProps) => {
  return (
    <>
      {!asLink ? (
        <button
          className={
            btnType === 'main' ?
              `${styles.button} ${styles.buttonMain}` :
              btnType === 'secondary' ?
                `${styles.button} ${styles.buttonSecondary}` :
                btnType == 'third' ?
                  `${styles.button} ${styles.buttonThird}` :
                  ''
          }
          onClick={btnAction}
        >
          <span className={styles.buttonText}>{text}</span>
          {icon && <div className={styles.buttonIcon}>
              <Image src={icons.arrow_right_for_btn} alt='Arrow right'/>
          </div>}
        </button>
      ) : (
        <Link href={`${link}`}>
          <button
            className={
              btnType === 'main' ?
                `${styles.button} ${styles.buttonMain}` :
                btnType === 'secondary' ?
                  `${styles.button} ${styles.buttonSecondary}` :
                  btnType == 'third' ?
                    `${styles.button} ${styles.buttonThird}` :
                    ''
            }
          >
            <span className={styles.buttonText}>{text}</span>
            {icon && <div className={styles.buttonIcon}>
                <Image src={icons.arrow_right_for_btn} alt='Arrow right'/>
            </div>}
          </button>
        </Link>
      )}
    </>

  )
}

export default Component;