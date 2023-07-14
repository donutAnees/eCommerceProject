import { InView } from "react-intersection-observer";
import styles from "./LatestProducts.module.css";
import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
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
        <h1>
          Our Latest <span class={styles.titleSpan}>Products</span>
        </h1>
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
              <li key={product.id}>
                <Link
                  to={`/keyboards/${product.id}`}
                  className={styles.productGrid}
                >
                  <div className={styles.new}>
                    <p>Latest</p>
                  </div>
                  <div className={styles["product-image-container"]}>
                    <img src={product.image} alt="" />
                  </div>
                  <div className={styles.productName}>{product.name}</div>
                  <div className={styles.productDesc}>
                    {product.description}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </InView>
    </>
  );
}
