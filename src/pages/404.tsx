import Image from "next/image";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import Button from "@/components/Shared/Button/Button";

import {icons} from "../../public/assets/icons/icons";

import styles from '../styles/404Page.module.scss';

export default function Custom404Page() {
  return (
    <Main meta={<Meta title='Organick 404 Page' description='Organick 404 Page'/>}>
      <section className={styles.custom404Page}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div>
              <Image src={icons.icon_404} alt='404 icon'/>
              <h1 className={styles.title}>Page not found</h1>
              <div className={styles.text}>
                <p>The page you are looking for doesn't exist or has been moved</p>
              </div>
              <Button btnType='main' text='Go to Homepage' asLink link='/'/>
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}