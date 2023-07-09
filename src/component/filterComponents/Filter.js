import { useState } from "react";
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

  return (
    <div className={styles.filterContainer}>
      <div className={styles.options}>
        <div className={styles.optionGroup}>
          <div className={styles.optionHeader}>
            <h3>Price</h3>
            <button
              onClick={() => {
                props.clearCondition();
                setSelectedOption(null);
              }}
            >
              Clear
            </button>
          </div>
          {prices.map((price) => (
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
          ))}
        </div>
        <div className={styles.optionGroup}>
          <div className={styles.optionHeader}>
            <h3>Model</h3>
            <button onClick={props.clearCondition}>Clear</button>
          </div>
          {models.map((model) => (
            <ModelOption
              key={model.id}
              id={model.id}
              model={model.model}
              applyCondition={props.applyCondition}
              clearCondition={props.clearCondition}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
