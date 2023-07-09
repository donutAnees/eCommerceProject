import styles from "./ModelOption.module.css";
export default function ModelOption(props) {
  const { model, applyCondition} = props;

  const onClickHandler = () => {
    applyCondition(sortByModel);
  };

  const sortByModel = (product) => {
    if (product.title.toLowerCase().includes(model)) {
      return product;
    }
  };

  return (
    <div className={styles.modelOptionContainer}>
      <button className={styles.modelButton} onClick={onClickHandler}>
        {model}
      </button>
    </div>
  );
}
