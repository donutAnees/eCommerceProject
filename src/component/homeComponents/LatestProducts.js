import { InView } from "react-intersection-observer";
import styles from "./LatestProducts.module.css";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
export default function LatestProducts() {

  const [latestProducts, setLatestProducts] = useState([]);

  const [latestProductInView, setLatestProductInView] = useState(null);

  const getData = async () => {

    const response = await fetch(
      "https://react-d4c0e-default-rtdb.firebaseio.com/latest-catalogue.json"
    );

    if (!response.ok) {
      throw json({ message: "Couldnt fetch data" }, { status: 500 });
    }

    const data = await response.json();

    setLatestProducts(data);
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.title}>
        <h1>Our Latest Products</h1>
      </div>
      <InView
        onChange={(inView) => {
          if (inView && latestProductInView === null) {
            setLatestProductInView(true);
          }
        }}
      >
        <ul
          className={`${styles["latest-product-container"]} ${
            latestProductInView ? styles.show : ""
          }`}
        >
          {latestProducts.map((product) => {
            return (
              <li className={styles.productGrid} key={product.id}>
                <div className={styles["product-image-container"]}>
                  <img src={product.image} alt="" />
                </div>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productDesc}>{product.description}</div>
              </li>
            );
          })}
        </ul>
      </InView>
    </>
  );
}
