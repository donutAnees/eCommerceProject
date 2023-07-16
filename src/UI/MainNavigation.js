import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Search from "./Search";

export default function MainNavigation() {
  const cart = useSelector((state) => state.cart);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const totalCount = cart.totalCount;

  const [navbarStyle, setNavbarStyle] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 20) {
        setNavbarStyle(true);
      } else {
        setNavbarStyle(false);
      }
    };
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const iconClickHandler = () => {
    setIsIconClicked((prev) => !prev);
  };

  const linkClickHandler = () => {
    if (isIconClicked) {
      setIsIconClicked(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${navbarStyle ? styles.active : ""}`}>
      <Link to={"/"} className={styles.logo}>
        <h2>[ space ]</h2>
      </Link>
      {isSearchActive ? (
          <Search setSearchState={setIsSearchActive} />
      ) : (
        <div>
          <div className={styles.icon} onClick={iconClickHandler}>
            {isIconClicked ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </div>
          <ul
            className={`${styles.navbar_links} ${
              isIconClicked ? styles.show : null
            }`}
          >
            <li>
              <Link to={"/keyboards"} onClick={linkClickHandler}>
                KEYBOARDS
              </Link>
            </li>
            <li>
              <Link to={"/support"} onClick={linkClickHandler}>
                SUPPORT
              </Link>
            </li>
            <li>
              <span
                className={`material-symbols-outlined ${
                  isSearchActive ? styles.searchActive : ""
                }`}
                onClick={() => {
                  setIsSearchActive(true);
                  linkClickHandler();
                }}
              >
                search
              </span>
            </li>
            <li>
              <Link
                to={"/checkout"}
                className={styles.cart}
                onClick={linkClickHandler}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className={styles.cartItemCount}>{totalCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
