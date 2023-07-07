import { useSelector } from "react-redux";
import styles from "./ConfirmCheckout.module.css";
import { useEffect, useState } from "react";
import Loading from "../../UI/Loading";
import CheckoutItem from "./CheckoutItem";
export default function ConfirmCheckout() {
  const cart = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(null);
  const [currentItem, setCurrentItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchItems = async () => {
      const itemIds = cart.items.map((item) => item.id);
      try {
        const response = await fetch(
          `https://react-d4c0e-default-rtdb.firebaseio.com/products.json?ids=${itemIds.join(
            ","
          )}`
        );

        const data = await response.json();
        const fetchedItems = itemIds.map((id) => {
          const item = cart.items.find((item) => item.id === id);
          return { data: data[id], count: item.count };
        });

        setCurrentItem(fetchedItems);
        setIsLoading(false);

        if (!response.ok) {
          throw new Error("Could not fetch items");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchItems();
  }, [cart, setCurrentItem]);

  useEffect(() => {
    let tempTotalAmount = 0;
    currentItem.forEach((item) => {
      const itemTotalPrice = item.data.price * item.count;
      tempTotalAmount += itemTotalPrice;
    });
    setTotalAmount(tempTotalAmount.toFixed(2));
  }, [currentItem]);

  if (isLoading) {
    return <Loading />;
  }

  if (currentItem.length === 0 && !isLoading) {
    return <div className={styles.cartEmpty}>Your Cart is Empty</div>;
  }

  return (
    <>
      <div className={styles.toCheckOutHeader}>
        <h2>Your cart total is {totalAmount}</h2>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
      <div className={styles.checkoutContainer}>
        <div className={styles.leftColumn}>
          <CheckoutItem currentItem={currentItem} />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.totalAmount}>
            <h3>Subtotal</h3>
            <div>{totalAmount}</div>
          </div>
        </div>
      </div>
    </>
  );
}
