import { useEffect, useState } from "react";
import styles from "./ModelOption.module.css";
export default function ModelOption(props) {
  const {
    model,
    addItems,
    removeCategory,
    clearModelOption,
    setClearModelOption,
  } = props;

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if(clearModelOption){
   setIsActive(false);
    }
  } , [clearModelOption])

  const onClickHandler = () => {
    setClearModelOption(false);
    if (isActive) {
      setIsActive((prev) => !prev);
      removeCategory(model);
    } else {
      setIsActive((prev) => !prev);
      addItems(model);
    }
  };


  return (
    <div className={styles.modelOptionContainer}>
      <button
        className={`${styles.modelButton} ${isActive ? styles.active : ""}`}
        onClick={onClickHandler}
      >
        {model}
      </button>
    </div>
  );
}
