import type {ReactNode} from 'react';
import {useEffect, useState} from "react";
import {Roboto} from "next/font/google";

import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

import styles from './Main.module.scss'
import Image from "next/image";
import {icons} from "../../public/assets/icons/icons";

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

const Main = ({meta, children}: IMainProps) => {

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 1000) {
          setBackToTopButton(true)
        } else {
          setBackToTopButton(false)
        }
      });
    }
  }, [backToTopButton])

  const scrollUp = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`${roboto.className}`}>
      {meta}

      <Header/>

      <main>{children}</main>

      <Footer/>


      <button
        onClick={scrollUp}
        className={!backToTopButton ? styles.backToTopButton : `${styles.backToTopButton} ${styles.backToTopButtonActive}`}
      >
        <Image src={icons.toTop} alt='To Top'/>
      </button>
    </div>
  )
}

export {Main}