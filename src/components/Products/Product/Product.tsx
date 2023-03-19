import Image from "next/image";
import Link from "next/link";
import {Rating} from 'react-simple-star-rating'

import {IProduct} from "../../../global/interfaces/index";

import {urlFor} from "@/helpers/urlFor";

import styles from './Product.module.scss'

interface ProductProps {
  product: IProduct,
}

const Product = ({product}: ProductProps) => {
  return (
    <Link href={`/shop/${product.title}`} className={styles.product}>
      <div className={styles.productCategory}>
        <span className={styles.productCategoryText}>{product.category}</span>
      </div>
      <div className={styles.productImage}>
        <Image src={urlFor(product.image).url()} alt={product.title} width={335} height={483}/>
      </div>
      <div className={styles.productInfo}>
        <h6 className={styles.productInfoTitle}>{product.title}</h6>
        <div className={styles.productInfoBottom}>
          <div className={styles.productInfoBottomLeft}>
            <span className={styles.productInfoBottomLeftPrice}>${product.price}</span>
            <span className={styles.productInfoBottomLeftDiscount}>${product.price - product.discount}</span>
          </div>
          <Rating initialValue={product.rating} readonly size={18}/>
        </div>
      </div>
    </Link>

  )
}

export default Product;