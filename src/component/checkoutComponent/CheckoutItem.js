import { useDispatch } from "react-redux";
import styles from "./CheckoutItem.module.css";
import { cartActions } from "../../store";
import { Link } from "react-router-dom";

export default function CheckoutItem(props) {
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch(cartActions.addToCart({ id: id, count: 1 }));
  };

  const decrement = (id) => {
    dispatch(cartActions.removeFromCart({ id: id, count: 1 }));
  };

  return (
    <div className={styles.checkoutItem}>
      {props.currentItem.map((item) => {
        const itemTotalPrice = (item.data.price * item.count).toFixed(2);
        return (
          <div className={styles.productContainer} key={item.data.id}>
            <div className={styles.productImage}>
              <img src={item.data.images[0].url} alt="" />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productDetails}>
                <Link
                  to={`/keyboards/${item.data.id}`}
                  className={styles.productName}
                >
                  {item.data.title}
                </Link>
                <div className={styles.productPrice}>${itemTotalPrice}</div>
              </div>
              <div className={styles.productQuantity}>
                <button
                  className={styles.productQuantityBtn}
                  onClick={() => decrement(item.data.id)}
                >
                  -
                </button>
                <div>{item.count}</div>
                <button
                  className={styles.productQuantityBtn}
                  onClick={() => increment(item.data.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
