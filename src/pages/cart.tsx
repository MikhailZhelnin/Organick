import Image from "next/image";
import { useSnackbar } from 'notistack';

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import Subscribe from "@/components/Subscribe/Subscribe";
import Button from "@/components/Shared/Button/Button";

import {useTypedSelector} from "@/hooks/useTypedSelector";
import {urlFor} from "@/helpers/urlFor";
import {useActions} from "@/hooks/useActions";
import {icons} from "../../public/assets/icons/icons";

import {IProduct} from "../global/interfaces";

import styles from '../styles/CartPage.module.scss'

export default function ShoppingCartPage() {

  const { enqueueSnackbar } = useSnackbar();

  const {cartItems, totalAmount, totalQuantity} = useTypedSelector(state => state.cart);
  const {decrementQuantity, incrementQuantity, removeProduct} = useActions();

  const removeFromCartHandle = (product: IProduct) => {
    enqueueSnackbar(`${product.title} removed from cart`)
    removeProduct(product);
  }

  return (
    <Main meta={<Meta title='Organick Shopping Cart' description='Organick Shopping Cart Page'/>}>
      <section className={styles.cart}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>My Cart</h2>
            {cartItems.length === 0 ? (
              <div className={styles.emptyCart}>
                <span className={styles.emptyCartTitle}>Your cart is empty</span>
                <Button btnType='main' text='Go to shop' asLink link='/shop'/>
              </div>
            ) : (
              <div className={styles.bag}>
                <span className={styles.bagTitle}>
                  There {cartItems.length === 1 ? 'is' : 'are'} {cartItems.length} product{cartItems.length === 1 ? '' : 's'} in
                  your cart
                </span>
                <div className={styles.bagItems}>
                  <ul className={styles.bagItemsList}>
                    {cartItems.map(item => (
                      <li key={item.id} className={styles.bagItemsListItem}>
                        <div className={styles.bagItemsListItemLeft}>
                          <div className={styles.bagItemsListItemLeftImage}>
                            <Image src={urlFor(item.image).url()} alt={item.title} width={120} height={153}/>
                          </div>
                          <span className={styles.bagItemsListItemLeftTitle}>{item.title}</span>
                        </div>
                        <div className={styles.bagItemsListItemCenter}>
                          <div className={styles.bagItemsListItemCenterPrices}>
                            <span className={!item.discount ? styles.bagItemsListItemCenterPricesPrice : `${styles.bagItemsListItemCenterPricesPrice} ${styles.bagItemsListItemCenterPricesPriceOld}`}>
                              ${item.price}
                            </span>
                            {item.discount &&
                                <span className={styles.bagItemsListItemCenterPricesDiscount}>
                                  ${item.price - item.discount}
                                </span>
                            }
                          </div>
                          <div className={styles.bagItemsListItemCenterActions}>
                            <button className={styles.bagItemsListItemCenterActionsMinus}
                                    onClick={() => decrementQuantity(item)}>
                              <Image src={icons.minus} alt='Minus'/>
                            </button>
                            <span className={styles.bagItemsListItemCenterActionsQuantity}>{item.quantity}</span>
                            <button className={styles.bagItemsListItemCenterActionsPlus}
                                    onClick={() => incrementQuantity(item)}>
                              <Image src={icons.plus} alt='Plus'/>
                            </button>
                          </div>
                        </div>
                        <div className={styles.bagItemsListItemRight}>
                          <span className={styles.bagItemsListItemRightPrice}>${item.totalPrice}</span>
                          <button className={styles.bagItemsListItemRightButton} onClick={() => removeFromCartHandle(item)}>
                            <Image src={icons.close} alt='Remove'/>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.bagTotal}>
                  <div className={styles.bagTotalQuantity}>
                    <span className={styles.bagTotalQuantityText}>Total quantity:</span>
                    <span className={styles.bagTotalQuantityNumber}>{totalQuantity}</span>
                  </div>
                  <div className={styles.bagTotalAmount}>
                    <span className={styles.bagTotalAmountText}>Total amount:</span>
                    <span className={styles.bagTotalAmountNumber}>${totalAmount}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Subscribe/>
    </Main>
  )
}