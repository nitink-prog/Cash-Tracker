import { useEffect, useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPasswordMatch) {
      signup(displayName, email, password);
    }
  };

  useEffect(() => {
    password === passwordConfirm
      ? setIsPasswordMatch(true)
      : setIsPasswordMatch(false);

    return () => {
      setIsPasswordMatch(false);
    };
  }, [password, passwordConfirm]);

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Create Your Account</h2>
      <label>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Confirm Password:</span>
        <input
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
      </label>
      {isPending ? (
        <button className="btn" disabled>
          Loading...
        </button>
      ) : (
        <button className="btn">Sign up</button>
      )}
      {!isPasswordMatch && <p>Please ensure passwords match</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
