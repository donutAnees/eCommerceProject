import { useState } from "react";
export default function useForm(validate) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const error = validate(enteredValue);

  const setEnteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const setIsTouchedHandler = () => {
    setIsTouched(true);
  };

  const clear = () => {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    enteredValue,
    error,
    isTouched,
    setEnteredValueHandler,
    setIsTouchedHandler,
    clear,
  };
}
