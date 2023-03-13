import {IProduct} from "@/global/interfaces/IProduct";

import Products from "@/components/Products/Products";
import Button from "@/components/Shared/Button/Button";
import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";

import styles from "./Categories.module.scss";

interface CategoriesProps {
  products: IProduct[],
}

const Categories = ({products}: CategoriesProps) => {
    return (
        <section className={styles.categories}>
          <div className={styles.container}>
            <div className={styles.content}>
              <SectionHeading overhead='Categories' title='Our Products'/>
              <Products products={products}/>
              <div className={styles.button}>
                <Button
                  btnType='main'
                  text='Load More'
                  asLink
                  link='/'
                />
              </div>
            </div>
          </div>
        </section>
    )
}

export default Categories;