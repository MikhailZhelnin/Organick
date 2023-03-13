import type { ReactNode } from 'react'
import {Roboto} from "next/font/google";

import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

import styles from './Main.module.scss'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

const Main = ({meta, children}: IMainProps) => {
  return (
    <div className={`${roboto.className}`}>
      {meta}

      <Header/>

      <main className={styles.mainContent}>{children}</main>

      <Footer/>

    </div>
  )
}

export { Main }