import styles from "./Login.module.scss";
import {
  GithubLoginButton,
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

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
          <GithubLoginButton style={{ width: "350px" }} />
          <GoogleLoginButton style={{ width: "350px" }} />
          <AppleLoginButton style={{ width: "350px" }} />
        </div>
        <div className={styles.loginLink}>
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};
