import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">qMoney Tracker</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}
