import styles from "./Login.module.scss";
import {
  GithubLoginButton,
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.loginTitle}>Login</div>
          <div className={styles.loginInput}>
            <form className={styles.form}>
              <input className={styles.inputBox} type="text" placeholder="ID" />{" "}
              <br />
              <input
                className={styles.inputBox}
                type="password"
                placeholder="Password"
              />
            </form>
            <div className={styles.loginBtn}>Login</div>
          </div>
          <GithubLoginButton
            style={{
              width: "350px",
              marginBottom: "10px",
              height: "40px",
              fontSize: "15px",
            }}
          />
          <GoogleLoginButton
            style={{
              width: "350px",
              marginBottom: "10px",
              height: "40px",
              fontSize: "15px",
            }}
          />
          <AppleLoginButton
            style={{
              width: "350px",
              marginBottom: "10px",
              height: "40px",
              fontSize: "15px",
            }}
          />
          <div className={styles.loginLink}>
            <a href="#">Forgot Password?</a>
            <Link to="/join">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
