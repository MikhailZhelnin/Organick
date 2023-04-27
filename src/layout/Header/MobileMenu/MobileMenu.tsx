import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

import {menuItemsData} from "@/data";
import {icons} from "../../../../public/assets/icons/icons";
import {useTypedSelector} from "@/hooks/useTypedSelector";

import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  active: boolean,
}

const MobileMenu = ({active}: MobileMenuProps) => {

  const [openedSubmenu, setOpenedSubmenu] = useState(false);
  const {totalQuantity} = useTypedSelector(state => state.cart)

  return (
    <div className={!active ? styles.mobileMenu : `${styles.mobileMenu} ${styles.mobileMenuActive}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.list}>
            {menuItemsData.map(menu => (
              <li key={menu.id} className={styles.listItem}>
                {!menu.submenu ? (
                  <Link href={menu.link} className={styles.listItemLink}>{menu.title}</Link>
                ) : (
                  <>
                    <button
                      className={styles.listItemButton}
                      onClick={() => setOpenedSubmenu(!openedSubmenu)}
                    >
                      <span>{menu.title}</span>
                      <Image src={icons.arrow_bottom} alt='Arrow bottom'/>
                    </button>
                    {openedSubmenu && (
                      <ul className={styles.listItemButtonSubmenu}>
                        {menu.submenu.map(submenu => (
                          <li key={submenu.id} className={styles.listItemButtonSubmenuItem}>
                            <Link href={submenu.link}
                                  className={styles.listItemButtonSubmenuItemLink}>{submenu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
            <div className={styles.cart}>
              <Link href='/cart' className={styles.cartButton}>
                <Image src={icons.cart} alt='Cart icon'/>
              </Link>
              <span className={styles.cartAmount}>Cart ({totalQuantity})</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;