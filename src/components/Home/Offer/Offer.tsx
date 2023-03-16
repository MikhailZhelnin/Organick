import {IProduct} from "../../../global/interfaces/index";

import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";
import Button from "@/components/Shared/Button/Button";
import Products from "@/components/Products/Products";

import styles from './Offer.module.scss'

interface OfferProps {
  products: IProduct[],
}

export const Offer = ({products}: OfferProps) => {

  const filteredProducts = products.filter(product => product.category.toLowerCase() === 'vegetable').slice(0, 4)

  return (
    <section className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading
              overhead='Offer'
              title='We Offer Organic For You'
              position='left'
              marginBottom='0px'
              titleColor='#FFFFFF'
            />
            <Button btnType='secondary' text='View All Products' asLink link='/'/>
          </div>
          <Products products={filteredProducts}/>
        </div>
      </div>
    </section>
  )
}