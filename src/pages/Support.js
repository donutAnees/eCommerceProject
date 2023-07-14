import { json, useActionData } from "react-router-dom";
import styles from "./Support.module.css";
import SupportForm from "../component/supportComponent/SupportForm";
import { useEffect, useState } from "react";
export default function Support() {
  const status = useActionData();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function hide() {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
    if (status) {
      hide();
    }
  }, [status, setVisible]);

  return (
    <>
      {visible ? <div className={styles.success}>success</div> : null}
      <SupportForm />
    </>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const formData = {
    email: data.get("email"),
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    category: data.get("category"),
    concern: data.get("concern"),
  };

  const response = await fetch(
    `https://react-d4c0e-default-rtdb.firebaseio.com/support/${formData.category}.json`,
    {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application.json",
      },
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not send data" }, { status: 500 });
  }

  return true;
}
