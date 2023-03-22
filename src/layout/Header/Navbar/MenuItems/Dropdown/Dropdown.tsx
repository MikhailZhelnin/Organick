import Link from "next/link";

import {ISubmenu} from "@/global/interfaces";

import styles from './Dropdown.module.scss'

interface DropdownProps {
  submenu: ISubmenu[],
  dropdownOpened: boolean
}

const Dropdown = ({ submenu, dropdownOpened }: DropdownProps) => {
  return (
    <ul className={dropdownOpened ? `${styles.dropdown} ${styles.show}` : `${styles.dropdown}`}>
      {submenu.map(submenu=> (
        <li key={submenu.id} className={styles.dropdownItem}>
          <Link href={submenu.link} className={styles.dropdownItemLink}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;