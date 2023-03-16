import {IProduct} from "../../global/interfaces/index";

import Product from "@/components/Products/Product/Product";

import styles from './Products.module.scss'

interface ProductsProps {
  products: IProduct[],
}

const Products = ({products}: ProductsProps) => {
  return (
    <div className={styles.products}>
      {products.map(product => (
        <Product product={product} key={product.id}/>
      ))}
    </div>

  )
}

export default Products;