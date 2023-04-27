import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

import Navbar from "@/layout/Header/Navbar/Navbar";
import MobileMenu from "@/layout/Header/MobileMenu/MobileMenu";

import {icons} from "../../../public/assets/icons/icons";
import {menuItemsData} from "@/data";
import {useTypedSelector} from "@/hooks/useTypedSelector";

import styles from './Header.module.scss'

const Header = () => {

  const [activeBurger, setActiveBurger] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const {totalQuantity} = useTypedSelector(state => state.cart)

  const handleToggle = () => {
    setActiveBurger(!activeBurger);
    setActiveMobileMenu(!activeMobileMenu);
  }

  useEffect(() => {
    if (activeMobileMenu) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeMobileMenu])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href='/' className={styles.logo}>
            <Image src={icons.logo} alt='Logo icon'/>
          </Link>
          <Navbar items={menuItemsData}/>
          <div className={styles.cart}>
            <Link href='/cart' className={styles.cartButton}>
              <Image src={icons.cart} alt='Cart icon'/>
            </Link>
            <span className={styles.cartAmount}>Cart ({totalQuantity})</span>
          </div>
          <div className={!activeBurger ? `${styles.burgerMenu}` : `${styles.burgerMenu} ${styles.burgerMenuActive}`}
               onClick={handleToggle}>
            <span/>
          </div>
        </div>
      </div>
      <MobileMenu active={activeMobileMenu}/>
    </header>
  )
}

export default Header;