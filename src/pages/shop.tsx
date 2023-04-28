import {GetStaticProps} from "next";
import React, {useEffect, useState} from "react";

import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import PageHeading from "@/components/PageHeading/PageHeading";
import Products from "@/components/Products/Products";
import Subscribe from "@/components/Subscribe/Subscribe";

import client from '../../client'
import {images} from "../../public/assets/images/images";

import {IProduct} from "@/global/interfaces";

import styles from '../styles/ShopPage.module.scss'

interface ShopPageProps {
  products: IProduct[]
}

export default function ShopPage({products}: ShopPageProps) {
  const categoriesData: string[] = ['All categories', ...new Set(products.map(item => item.category))];
  const ratingsData: string[] = ['All stars', '1', '2', '3', '4', '5'];
  const colorsData: string[] = [...new Set(products.map(item => item.color))];

  const [arrayOfProducts, setArrayOfProducts] = useState<IProduct[]>(products);
  const [arrayOfFilteredProducts, setArrayOfFilteredProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>(categoriesData[0]);
  const [rating, setRating] = useState<string>(ratingsData[0]);
  const [colors, setColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filterBySearch = (array: IProduct[]) => {
    if (search === '') {
      return array;
    } else {
      return array.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }
  }

  const filterByCategory = (array: IProduct[]) => {
    if (category.toLowerCase() === 'all categories') {
      return array;
    } else {
      return array.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
  };

  const filterByRating = (array: IProduct[]) => {
    if (rating.toLowerCase() === 'all stars') {
      return array;
    } else {
      return array.filter(item => item.rating.toString() === rating);
    }
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...colors];
    if (e.target.checked) {
      updatedList = [...colors, e.target.value];
    } else {
      updatedList.splice(colors.indexOf(e.target.value), 1);
    }
    setColors(updatedList);
  };

  const filterByColors = (array: IProduct[]) => {
    if (colors.length === 0) {
      return array;
    } else {
      const existingItems: IProduct[] = [];
      array.forEach(product => {
        colors.forEach(color => {
          if (color.toLowerCase() === product.color.toLowerCase()) {
            existingItems.push(product)
          }
        })
      });
      return existingItems;
    }
  }

  const clearFilters = () => {
    setArrayOfFilteredProducts(products);
    setSearch('');
    setCategory(categoriesData[0]);
    setRating(ratingsData[0]);
    setColors([]);
  }

  useEffect(() => {
    let result = arrayOfProducts;
    result = filterBySearch(result);
    result = filterByCategory(result);
    result = filterByRating(result);
    result = filterByColors(result);
    setArrayOfFilteredProducts(result);
  }, [category, rating, colors, search]);

  return (
    <Main meta={<Meta title='Organick Shop' description='Organick Shop Page'/>}>
      <PageHeading title='Shop' image={images.page_heading.shop}/>
      <div className={styles.container}>
        <div className={styles.content}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={styles.showFiltersButton}
          >
            {!showFilters ? 'Show' : 'Hide'} filters
          </button>
          <aside className={!showFilters ? styles.filters : `${styles.filters} ${styles.filtersShow}`}>
            <div className={styles.filtersGroup}>
              <input
                type='text'
                placeholder='Type to search...'
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                className={styles.filtersGroupSearch}
              />
            </div>
            <div className={styles.filtersGroup}>
              <span className={styles.filtersGroupTitle}>Categories:</span>
              {categoriesData.map(item => (
                <div className={styles.filtersGroupItem}>
                  <input
                    type='radio'
                    id={item}
                    value={item}
                    name='category'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
                    className={styles.filtersGroupItemInput}
                    checked={item.toLowerCase() === category.toLowerCase()}
                  />
                  <label
                    htmlFor={item}
                    className={styles.filtersGroupItemLabel}
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
            <div className={styles.filtersGroup}>
              <span className={styles.filtersGroupTitle}>Rating:</span>
              {ratingsData.map(item => (
                <div className={styles.filtersGroupItem}>
                  <input
                    type='radio'
                    id={item}
                    value={item}
                    name='rating'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
                    className={styles.filtersGroupItemInput}
                    checked={item.toLowerCase() === rating.toLowerCase()}
                  />
                  <label
                    htmlFor={item}
                    className={styles.filtersGroupItemLabel}
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
            <div className={styles.filtersGroup}>
              <span className={styles.filtersGroupTitle}>Colors:</span>
              {colorsData.map((item, index) => (
                <div key={index} className={styles.filtersGroupItem}>
                  <input
                    type='checkbox'
                    id={item}
                    name={item}
                    onChange={handleCheck}
                    value={item}
                    className={styles.filtersGroupItemInput}
                    checked={colors.includes(item)}
                  />
                  <label
                    htmlFor={item}
                    className={styles.filtersGroupItemLabel}
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
            <button className={styles.filtersClearButton} onClick={clearFilters}>Clear all</button>
          </aside>
          <div className={styles.products}>
            <span className={styles.productsTitle}>
              {arrayOfFilteredProducts.length} Product{arrayOfFilteredProducts.length === 1 ? '' : 's'} Found
            </span>
            <Products products={arrayOfFilteredProducts}/>
          </div>
        </div>
      </div>
      <Subscribe/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await client.fetch(`
    *[_type == "products"] {
      id,
      title,
      price,
      discount,
      image,
      rating,
      category,
      color
    }
  `)

  return {
    props: {
      products,
    }
  }
}