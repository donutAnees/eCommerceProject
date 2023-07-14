import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [products, setProducts] = useState([]);
  const [query, setEnteredQuery] = useState("");
  const inputRef = useRef();
  const { setSearchState } = props;

  const display = useMemo(() => {
    if (query.length === 0) {
      return [];
    }
    return products.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [products, query]);

  const resultPerPage = 10;
  const currentItems = display.slice(0, resultPerPage);

  useEffect(() => {
    if (products.length === 0) {
      const fetchItems = async () => {
        try {
          const response = await fetch(
            "https://react-d4c0e-default-rtdb.firebaseio.com/products.json"
          );
          if (!response.ok) {
            throw new Error("Cant fetch items");
          }

          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchItems();
    }
  }, [products, setProducts]);

  const clearInput = () => {
    inputRef.current.value = "";
    setEnteredQuery("");
  };

  const blurHandler = async () => {
    setTimeout(() => {
      clearInput();
      setSearchState(false);
    }, 100);
  };

  const inputHandler = () => {
    setEnteredQuery(inputRef.current.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        ref={inputRef}
        onChange={inputHandler}
        onBlur={blurHandler}
        autoFocus
      />
      <div className={styles.searchedItemContainer}>
        <ul>
          {currentItems.length === 0 ? (
            <h5>Found Nothing</h5>
          ) : (
            currentItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/keyboards/${item.id}`}
                  className={styles.searchedItem}
                >
                  {item.title}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
