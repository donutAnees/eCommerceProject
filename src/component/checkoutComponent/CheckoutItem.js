import styles from "./CheckoutItem.module.css";
export default function CheckoutItem(props) {
  return props.currentItem.map((item) => {
    const itemTotalPrice = (item.data.price * item.count).toFixed(2);
    return (
      <div className={styles.productContainer} key={item.data.id}>
        <div className={styles.productImage}>
          <img src={item.data.images[0].url} alt="" />
        </div>
        <div className={styles.productName}>{item.data.title}</div>
        <div className={styles.productQuantity}>{item.count}</div>
        <div className={styles.productPrice}>{itemTotalPrice}</div>
      </div>
    );
  });
}
