import styles from "./SupportForm.module.css";
import useForm from "../../hooks/useForm";
import { Form } from "react-router-dom";

export default function SupportForm() {
  const validateName = (value) => {
    if (!value || value.trim().length === 0) {
      return { message: "Name is Required" };
    }
    return false;
  };

  const validateEmail = (value) => {
    if (!value || value.trim().length === 0) {
      return { message: "Email is Required" };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return { message: "Invalid email address" };
    }
    return false;
  };

  const validateCategory = (value) => {
    if (!value || value.trim().length === 0) {
      return { message: "Please select a category" };
    }
    return false;
  };

  const validateConcern = (value) => {
    if (!value || value.trim().length === 0) {
      return { message: "Please enter your concern..." };
    }
    if (value.trim().length > 250) {
      return { message: "Must not exceed 250 Characters" };
    }
    return false;
  };

  const {
    enteredValue: enteredFirstName,
    error: errorFirstName,
    isTouched: touchedFirstName,
    setEnteredValueHandler: setFirstName,
    setIsTouchedHandler: setTouchedFirstName,
    clear: clearFirstName,
  } = useForm(validateName);

  const {
    enteredValue: enteredLastName,
    error: errorLastName,
    isTouched: touchedLastName,
    setEnteredValueHandler: setLastName,
    setIsTouchedHandler: setTouchedLastName,
    clear: clearLastName,
  } = useForm(validateName);

  const {
    enteredValue: enteredEmail,
    error: errorEmail,
    isTouched: touchedEmail,
    setEnteredValueHandler: setEmail,
    setIsTouchedHandler: setTouchedEmail,
    clear: clearEmail,
  } = useForm(validateEmail);

  const {
    enteredValue: enteredCategory,
    error: errorCategory,
    isTouched: touchedCategory,
    setEnteredValueHandler: setCategory,
    setIsTouchedHandler: setTouchedCategory,
    clear: clearCategory,
  } = useForm(validateCategory);

  const {
    enteredValue: enteredConcern,
    error: errorConcern,
    isTouched: touchedConcern,
    setEnteredValueHandler: setConcern,
    setIsTouchedHandler: setTouchedConcern,
    clear: clearConcern,
  } = useForm(validateConcern);

  const formIsValid =
    errorFirstName === false &&
    errorLastName === false &&
    errorEmail === false &&
    errorConcern === false &&
    errorCategory === false
      ? true
      : false;

  const clickHandler = () => {
    clearFirstName();
    clearLastName();
    clearCategory();
    clearConcern();
    clearEmail();
  };

  return (
    <div className={styles.formContainer}>
      <Form method="post" onSubmit={clickHandler}>
        <div className={styles.nameInput}>
          <div className={styles.firstName}>
            <label className={styles.label} htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className={styles.input}
              value={enteredFirstName}
              onChange={setFirstName}
              onBlur={setTouchedFirstName}
            />
            {touchedFirstName && errorFirstName ? (
              <div className={styles.error}>{errorFirstName.message}</div>
            ) : null}
          </div>
          <div className={styles.lastName}>
            <label className={styles.label} htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className={styles.input}
              value={enteredLastName}
              onChange={setLastName}
              onBlur={setTouchedLastName}
            />
            {touchedLastName && errorLastName ? (
              <div className={styles.error}>{errorLastName.message}</div>
            ) : null}
          </div>
        </div>
        <div className={styles.emailInput}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={styles.input}
            value={enteredEmail}
            onChange={setEmail}
            onBlur={setTouchedEmail}
          />
          {touchedEmail && errorEmail ? (
            <div className={styles.error}>{errorEmail.message}</div>
          ) : null}
        </div>
        <div className={styles.category}>
          <label className={styles.label} htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            className={styles.select}
            value={enteredCategory}
            onChange={setCategory}
            onBlur={setTouchedCategory}
          >
            <option value="">Select a category</option>
            <option value="order">Order</option>
            <option value="account">Account</option>
            <option value="marketing">Marketing & Sponsorships</option>
            <option value="other">Other</option>
          </select>
          {touchedCategory && errorCategory && (
            <div className={styles.error}>{errorCategory.message}</div>
          )}
        </div>
        <div className={styles.concern}>
          <label className={styles.label} htmlFor="concern">
            What do you want to tell us?
          </label>
          <textarea
            id="concern"
            name="concern"
            className={styles.textarea}
            value={enteredConcern}
            onChange={setConcern}
            onBlur={setTouchedConcern}
          ></textarea>
          {touchedConcern && errorConcern && (
            <div className={styles.error}>{errorConcern.message}</div>
          )}
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!formIsValid}
        >
          SUBMIT
        </button>
      </Form>
    </div>
  );
}
