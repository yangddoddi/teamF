import styles from "./Join.module.scss";

export const Join = () => {
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.loginTitle}>Join</div>
          <div className={styles.loginInput}>
            <form className={styles.form}>
              <input className={styles.inputBox} type="text" placeholder="ID" />{" "}
              <br />
              <input
                className={styles.inputBox}
                type="password"
                placeholder="Password"
              />
              <input
                className={styles.inputBox}
                type="email"
                placeholder="email"
              />
            </form>
            <div className={styles.loginBtn}>Login</div>
          </div>
          <div className={styles.loginLink}>
            <a href="#">Forgot Password?</a>
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};
