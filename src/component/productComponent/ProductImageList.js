import styles from "./ProductImageList.module.css";
export default function ProductImageList(props) {
  const imageClickHandler = (index) => {
    props.onChangeCurrentImage(index);
  };

  return (
    <ul className={styles.product_image_list}>
      <li className={styles.product_image}>
        <img
          src={props.images[0].url}
          alt=""
          onClick={() => imageClickHandler(0)}
        />
      </li>
      <li className={styles.product_image}>
        <img
          src={props.images[1].url}
          alt=""
          onClick={() => imageClickHandler(1)}
        />
      </li>
      <li className={styles.product_image}>
        <img
          src={props.images[2].url}
          alt=""
          onClick={() => imageClickHandler(2)}
        />
      </li>
      <li className={styles.product_image}>
        <img
          src={props.images[3].url}
          alt=""
          onClick={() => imageClickHandler(3)}
        />
      </li>
    </ul>
  );
}
