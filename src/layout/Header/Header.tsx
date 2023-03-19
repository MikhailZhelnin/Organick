import Image from "next/image";
import Link from "next/link";

import {icons} from "../../../public/assets/icons/icons";

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Image src={icons.logo} alt='Logo icon'/>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navListItem}>
                                <Link href='/' className={styles.navListItemLink}>Home</Link>
                            </li>
                            <li className={styles.navListItem}>
                                <Link href='/about-us' className={styles.navListItemLink}>About</Link>
                            </li>
                            <li className={styles.navListItem}>
                                <Link href='/' className={styles.navListItemLink}>Pages</Link>
                            </li>
                            <li className={styles.navListItem}>
                                <Link href='/shop' className={styles.navListItemLink}>Shop</Link>
                            </li>
                            <li className={styles.navListItem}>
                                <Link href='/' className={styles.navListItemLink}>Projects</Link>
                            </li>
                            <li className={styles.navListItem}>
                                <Link href='/' className={styles.navListItemLink}>News</Link>
                            </li>
                        </ul>
                    </nav>
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