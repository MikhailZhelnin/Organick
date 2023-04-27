import Image from "next/image";
import {useState} from "react";
import {Rating} from "react-simple-star-rating";
import {useSnackbar} from 'react-simple-snackbar';

import Button from "@/components/Shared/Button/Button";

import {urlFor} from "@/helpers/urlFor";
import {useActions} from "@/hooks/useActions";

import {IProduct} from "@/global/interfaces";

import styles from './ShopSingle.module.scss'

interface ShopSingleProps {
  product: IProduct,
}

const ShopSingle = ({product}: ShopSingleProps) => {

  const [activeTab, setActiveTab] = useState(1);

  const {addProduct} = useActions();

  const [openSnackbar, closeSnackbar] = useSnackbar()

  const toggleActiveTab = (index: number) => setActiveTab(index);

  const addToCartHandler = () => {
    openSnackbar(`${product.title} added to cart`);
    addProduct(product);
  }

  return (
    <div className={styles.shopSingle}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topImage}>
              <Image src={urlFor(product.image).url()} alt={product.title} width={591} height={563}/>
              <div className={styles.topCategory}>
                <span className={styles.topCategoryText}>{product.category}</span>
              </div>
            </div>
            <div className={styles.topInfo}>
              <h3 className={styles.topInfoTitle}>{product.title}</h3>
              <Rating initialValue={product.rating} readonly size={18} className={styles.topInfoRating}/>
              <div className={styles.topInfoPrice}>
                <span className={styles.topInfoPricePrice}>${product.price}</span>
                <span className={styles.topInfoPriceDiscount}>${product.price - product.discount}</span>
              </div>
              <div className={styles.topInfoText}>
                <p>{product.text}</p>
              </div>
              <div className={styles.topInfoButton}>
                <Button btnType='main' text='Add To Cart' btnAction={addToCartHandler}/>
              </div>
            </div>
          </div>

          <div className={styles.tabs}>
            <div className={styles.tabsHead}>
              <div
                className={activeTab === 1 ? styles.tabsHeadItemActive : `${styles.tabsHeadItemActive} ${styles.tabsHeadItem}`}
                onClick={() => toggleActiveTab(1)}
              >
                <h6>Product Description</h6>
              </div>
              <div
                className={activeTab === 2 ? styles.tabsHeadItemActive : `${styles.tabsHeadItemActive} ${styles.tabsHeadItem}`}
                onClick={() => toggleActiveTab(2)}
              >
                <h6>Additional Info</h6>
              </div>
            </div>

            <div className={styles.tabsContent}>
              <div
                className={activeTab === 1 ? styles.tabsContentItemActive : `${styles.tabsContentItemActive} ${styles.tabsContentItem}`}
              >
                <p>{product.description}</p>
              </div>
              <div
                className={activeTab === 2 ? styles.tabsContentItemActive : `${styles.tabsContentItemActive} ${styles.tabsContentItem}`}
              >
                <p>{product.additionalInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopSingle;