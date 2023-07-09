import { useState } from "react";

export default function useFilter(data) {
  const [catalogue, setCatalogue] = useState(data);
  const applyCondition = (condition) => {
    const tempData = catalogue.filter((product) => {
      return condition(product);
    });
    setCatalogue(tempData);
  };

  const clearCondition = () => {
    setCatalogue(data);
  };

  return { catalogue, applyCondition, clearCondition };
}
