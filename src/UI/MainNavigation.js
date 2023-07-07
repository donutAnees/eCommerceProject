import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function MainNavigation() {

  const cart = useSelector((state) => state.cart);
  const totalCount = cart.totalCount;

  const [navbarStyle, setNavbarStyle] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 70) {
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

  return (
    <nav className={`${styles.navbar} ${navbarStyle ? styles.active : ""}`}>
      <Link to={"/"} className={styles.logo}>
        <h2>[ space ]</h2>
      </Link>
      <ul className={styles.navbar_links}>
        <li>
          <Link to={"/keyboards"}>KEYBOARDS</Link>
        </li>
        <li>
          <Link>SUPPORT</Link>
        </li>
        <li>
          <Link>
            <span className="material-symbols-outlined">search</span>
          </Link>
        </li>
        <li>
          <Link to={"/checkout"} className={styles.cart}>
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className={styles.cartItemCount}>{totalCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
