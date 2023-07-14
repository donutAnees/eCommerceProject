import { useEffect, useState } from "react";

export default function useFilter(data) {
  const [conditionItem, setConditionItem] = useState(data);
  const [categoryItem, setCategoryItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);

  const applyCondition = (condition) => {
    const tempData = data.filter((item) => condition(item));
    setConditionItem(tempData);
  };

  const addItems = (condition) => {
    setCategoryItem((prev) => [...prev, condition]);
  };

  useEffect(() => {
    if (categoryItem.length !== 0) {
      const tempData = conditionItem.filter((item) =>
        categoryItem.includes(item.model)
      );
      setFilteredItems(tempData);
    } else {
      setFilteredItems(conditionItem);
    }
  }, [setFilteredItems, categoryItem, conditionItem]);

  const clearCondition = () => {
    setConditionItem(data);
  };

  const clearCategory = () => {
    setCategoryItem([]);
    setConditionItem(data);
  };

  const removeCategory = (model) => {
    const tempData = categoryItem.filter((item) => item !== model);
    setCategoryItem(tempData);
  };

  return {
    filteredItems,
    applyCondition,
    addItems,
    clearCondition,
    clearCategory,
    removeCategory,
  };
}
