import { useEffect} from "react";
import styles from "./PriceOption.module.css";

export default function PriceOption(props) {
  const { id ,min, max, text, applyCondition, clearCondition, selectedOption, setSelectedOption } = props;
  const isActive = selectedOption === id;

  useEffect(() => {
    if (selectedOption !== id && isActive) {
      setSelectedOption(null);
    }
  }, [selectedOption, setSelectedOption, isActive, id]);

  const onClickHandler = () => {
    if (isActive) {
      clearCondition();
      setSelectedOption(null);
    } else {
      applyCondition(sortByPrice);
      setSelectedOption(id);
    }
  };

  const sortByPrice = (product) => {
    clearCondition();
    if (max === null) {
      return product.price >= min;
    } else if (product.price >= min && product.price <= max) {
      return product;
    }
  };

  return (
    <div className={styles.priceOptionContainer}>
      <button
        className={`${styles.priceButton} ${isActive ? styles.active : ""}`}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </div>
  );
}
