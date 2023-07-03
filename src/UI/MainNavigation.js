import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><h2>[  space  ]</h2></div>
        <ul className={styles.navbar_links}>
          <li>
            <Link>KEYBOARD</Link>
          </li>
          <li>
            <Link>SUPPORT</Link>
          </li>
          <li>
            <Link>SEARCH</Link>
          </li>
          <li>
            <Link>CART</Link>
          </li>
        </ul>
    </nav>
  );
}
