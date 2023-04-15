import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

import Navbar from "@/layout/Header/Navbar/Navbar";

import {icons} from "../../../public/assets/icons/icons";
import {menuItemsData} from "@/data";

import styles from './Header.module.scss'
import MobileMenu from "@/layout/Header/MobileMenu/MobileMenu";

const Header = () => {

  const [activeBurger,setActiveBurger] = useState(false);
  const [activeMobileMenu,setActiveMobileMenu] = useState(false);

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
          <div className={styles.actions}>
            <form className={styles.actionsSearch}>
              <input type='text' className={styles.actionsSearchInput}/>
              <button className={styles.actionsSearchButton}>
                <Image src={icons.search} alt='Search icon'/>
              </button>
            </form>
            <div className={styles.actionsCart}>
              <button className={styles.actionsCartButton}>
                <Image src={icons.cart} alt='Cart icon'/>
              </button>
              <span className={styles.actionsCartAmount}>Cart (0)</span>
            </div>
          </div>
          <div className={!activeBurger ? `${styles.burgerMenu}` : `${styles.burgerMenu} ${styles.burgerMenuActive}`} onClick={handleToggle}>
            <span/>
          </div>
        </div>
      </div>
      <MobileMenu active={activeMobileMenu}/>
    </header>
  )
}

export default Header;