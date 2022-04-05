import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles["navbar"]}>
      <ul>
        <li className={styles.title}>
          <Link to="/">qMoney Tracker</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link className="btn" to="/signup">
                Sign up
              </Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>{user.displayName}</li>
            <li className="btn" onClick={logout}>
              Log out
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
