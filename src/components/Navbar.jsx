import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className={styles["navbar"]}>
      <ul>
        <li className={styles.title}>
          <Link to="/">qMoney Tracker</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </li>
        <li className="btn" onClick={logout}>
          Log out
        </li>
      </ul>
    </nav>
  );
}
