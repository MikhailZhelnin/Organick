import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";
import Products from "@/components/Products/Products";

import {IProduct} from "@/global/interfaces";

import styles from './RelatedProducts.module.scss'

interface RelatedProductsProps {
  products: IProduct[],
}

const RelatedProducts = ({products}: RelatedProductsProps) => {
  return (
    <section className={styles.relatedProducts}>
      <div className={styles.container}>
        <SectionHeading title='Related Products'/>
        <Products products={products}/>
      </div>
    </section>
  )
}

export default RelatedProducts;