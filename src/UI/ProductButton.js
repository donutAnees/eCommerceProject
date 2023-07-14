import { useDispatch } from "react-redux";
import { cartActions } from "../store";
import { useNavigate } from "react-router-dom";
import styles from "./ProductButton.module.css";
import { useState } from "react";

export default function ProductButton(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addToCartClicked, setAddToCartClicked] = useState(false);

  const addToCartHandler = (id) => {
    dispatch(cartActions.addToCart(id));
    addToCartAnimation();
  };

  const buyNow = (id) => {
    dispatch(cartActions.buyNow(id));
    navigate("/checkout");
  };

  const addToCartAnimation = () => {
    setAddToCartClicked(true);
    setTimeout(() => {
      setAddToCartClicked(false);
    }, 500);
  };

  return (
    <>
      <button
        className={`${styles.addToCartButton} ${
          addToCartClicked ? styles.itemAdded : ""
        }`}
        onClick={() => addToCartHandler({ id: props.id, count: 1 })}
      >
        ADD TO CART
      </button>
      <button className={styles.buyNowButton} onClick={() => buyNow(props.id)}>
        BUY NOW
      </button>
    </>
  );
}
