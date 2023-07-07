import ProductButton from "../../UI/ProductButton";
import styles from "./ProductContent.module.css";
export default function ProductContent(props) {
  return (
    <div className={styles.product_content_container}>
      <div className={styles.product_info}>
        <div className={styles.product_title}>{props.title}</div>
        <div className={styles.product_description}>
          {props.product_description}
        </div>
        <div className={styles.product_price}>${props.price}</div>
        <div className={styles.product_more_info}>
          <ul>
            {props.more_description.map((info, index) => {
              return <li key={index}>{info}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className={styles.product_button_container}>
        <ProductButton
          id={props.id}
          className={styles.product_button_container}
        ></ProductButton>
      </div>
    </div>
  );
}
