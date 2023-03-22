import {IMenuItem} from "@/global/interfaces";

import MenuItems from "@/layout/Header/Navbar/MenuItems/MenuItems";

import styles from "./Navbar.module.scss";

interface NavbarProps {
    items: IMenuItem[],
}

const Navbar = ({items}: NavbarProps) => {
    return (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {items.map(item => (
              <MenuItems item={item} key={item.id}/>
            ))}
          </ul>
        </nav>
    )
}

export default Navbar;