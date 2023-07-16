import { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import PriceOption from "./PriceOption";
import ModelOption from "./ModelOption";

export default function Filter(props) {
  const prices = [
    { id: 1, min: 0, max: 100, text: "Under 100" },
    { id: 2, min: 100, max: 200, text: "100 - 200" },
    { id: 3, min: 200, max: null, text: "Above 200" },
  ];

  const models = [
    { id: 1, model: "blackwidow" },
    { id: 2, model: "deathstalker" },
    { id: 3, model: "huntsman" },
    { id: 4, model: "ornata" },
    { id: 5, model: "tartarus" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [clearModelOption, setClearModelOption] = useState(false);
  const [isPriceClicked, setIsPriceClicked] = useState(false);
  const [isModelClicked, setIsModelClicked] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  console.log(screenWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.options}>
        <div className={styles.optionGroup}>
          <div className={styles.optionHeader}>
            <h3>Price</h3>
            <button
              className={styles.mobileFilter}
              onClick={() => setIsPriceClicked((prev) => !prev)}
            >
              {isPriceClicked ? (
                <span className="material-symbols-outlined">expand_less</span>
              ) : (
                <span class="material-symbols-outlined">expand_more</span>
              )}
            </button>
            <button
              className={styles.button}
              onClick={() => {
                props.clearCondition();
                setSelectedOption(null);
              }}
            >
              Clear
            </button>
          </div>
          <div className={isPriceClicked ? styles.filters : null}>
            {isPriceClicked || screenWidth > 600
              ? prices.map((price) => (
                  <PriceOption
                    key={price.id}
                    id={price.id}
                    min={price.min}
                    max={price.max}
                    text={price.text}
                    applyCondition={props.applyCondition}
                    clearCondition={props.clearCondition}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                ))
              : null}
          </div>
        </div>
        <div className={styles.optionGroup}>
          <div className={styles.optionHeader}>
            <h3>Model</h3>
            <button
              className={styles.mobileFilter}
              onClick={() => setIsModelClicked((prev) => !prev)}
            >
              {isModelClicked ? (
                <span className="material-symbols-outlined">expand_less</span>
              ) : (
                <span class="material-symbols-outlined">expand_more</span>
              )}
            </button>
            <button
              onClick={() => {
                props.clearCategory();
                setClearModelOption(true);
              }}
              className={styles.button}
            >
              Clear
            </button>
          </div>
          <div className={isModelClicked ? styles.filters : null}>
            {isModelClicked || screenWidth > 600
              ? models.map((model) => (
                  <ModelOption
                    key={model.id}
                    model={model.model}
                    addItems={props.addItems}
                    removeCategory={props.removeCategory}
                    clearModelOption={clearModelOption}
                    setClearModelOption={setClearModelOption}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
