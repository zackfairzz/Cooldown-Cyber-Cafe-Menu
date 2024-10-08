"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./ProductsGrid.module.css";
import Container from "../container/Container";
import Image from "next/image";
import { useGlobalStates } from "@/globalState";
const formatter = new Intl.NumberFormat("en-US");

const ProductsGrid = ({ items = [], entertainment = [] }) => {
  const { productPage, entertainmentPage, lang } = useGlobalStates();
  const [products, setProducts] = useState([]);

  const updateProducts = useCallback(() => {
    if (productPage && items.length > 0) {
      return items.filter((item) => item.category === productPage);
    } else if (entertainmentPage && entertainment.length > 0) {
      return entertainment.filter(
        (item) => item.supCategory === entertainmentPage
      );
    }
    return [];
  }, [productPage, entertainmentPage]);

  useEffect(() => {
    const filteredProducts = updateProducts();
    setProducts(filteredProducts);
  }, [updateProducts]);

  return (
    <Container>
      <div className={styles.grid}>
        {products.map((product) => (
          <div className={styles.item} key={product.id}>
            <div className={styles.imgBox}>
              <Image
                src={`${product.img}image.jpg`}
                alt={product.name}
                fill
                className={styles.img}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div
              className={styles.content}
              style={{ flexDirection: lang !== "ar" && "row" }}
            >
              <p
                className={styles.name}
                style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
              >
                {lang === "ar" ? product.name : product.ename}
              </p>
              <p className={styles.price}>
                {formatter.format(product.price)} IQD
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductsGrid;
