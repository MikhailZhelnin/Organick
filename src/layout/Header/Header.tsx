import Image from "next/image";
import Link from "next/link";

import Navbar from "@/layout/Header/Navbar/Navbar";

import {icons} from "../../../public/assets/icons/icons";
import {menuItemsData} from "@/data";

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link href='/'>
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
                </div>
            </div>
        </header>
    )
}

export default Header;