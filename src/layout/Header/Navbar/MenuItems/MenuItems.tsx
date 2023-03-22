import {useState} from "react";

import Link from "next/link";

import {IMenuItem} from "@/global/interfaces";

import Dropdown from "@/layout/Header/Navbar/MenuItems/Dropdown/Dropdown";

import styles from "./MenuItems.module.scss";

interface MenuItemsProps {
  item: IMenuItem,
}

const MenuItems = ({item}: MenuItemsProps) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const onMouseEnter = () => {
    setDropdownOpened(true);
  };

  const onMouseLeave = () => {
    setDropdownOpened(false);
  };

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.navListItem}
    >
      {item.submenu ? (
        <>
          <button className={styles.navListItemBtn}>
            {item.title}{' '}
          </button>
          <Dropdown submenu={item.submenu} dropdownOpened={dropdownOpened}/>
        </>
      ) : (
        <Link href={item.link} className={styles.navListItemLink}>{item.title}</Link>
      )}
    </li>
  )
};

export default MenuItems;