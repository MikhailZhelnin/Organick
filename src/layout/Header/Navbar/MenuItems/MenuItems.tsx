import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

import Dropdown from "@/layout/Header/Navbar/MenuItems/Dropdown/Dropdown";

import {icons} from "../../../../../public/assets/icons/icons";

import {IMenuItem} from "@/global/interfaces";

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
            <span>{item.title}{' '}</span>
            <Image src={icons.arrow_bottom} alt='Arrow bottom'/>
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