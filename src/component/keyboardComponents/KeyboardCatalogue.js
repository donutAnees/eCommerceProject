import { Link, json, useLoaderData } from "react-router-dom";
import styles from "./KeyboardCatalogue.module.css";
import ProductButton from "../../UI/ProductButton";
import Filter from "../../component/filterComponents/Filter";
import useFilter from "../../hooks/useFilter";

export default function KeyboardCatalogue() {
  const data = useLoaderData();
  const {
    filteredItems,
    addItems,
    applyCondition,
    clearCondition,
    clearCategory,
    removeCategory,
  } = useFilter(data);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
      <Filter
        addItems={addItems}
        applyCondition={applyCondition}
        clearCondition={clearCondition}
        clearCategory={clearCategory}
        removeCategory={removeCategory}
      />
      </div>
      <ul className={styles.productGridContainer}>
        {filteredItems.map((product) => {
          return (
            <li className={styles.productGrid} key={product.id}>
              <Link to={`/keyboards/${product.id}`} className={styles.link}>
                <div className={styles["product-image-container"]}>
                  <img src={product.images[0].url} alt="" />
                </div>
                <div className={styles.productName}>{product.title}</div>
                <div className={styles.productDesc}>{product.description}</div>
                <div className={styles.productPrice}>
                  ${parseFloat(product.price).toFixed(2)}
                </div>
              </Link>
              <div className={styles.buttonsContainer}>
                <ProductButton id={product.id} className />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function loader() {
  const response = await fetch(
    "https://react-d4c0e-default-rtdb.firebaseio.com/products.json"
  );

  if (!response.ok) {
    throw json({ message: "Couldnt Fetch Catalogue" }, { status: 500 });
  }

  const data = await response.json();
  return data;
}
