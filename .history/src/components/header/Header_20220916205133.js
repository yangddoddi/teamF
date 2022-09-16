import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Code<span>States</span>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>공지사항</li>
        <li className={styles.listItem}>회원랭킹</li>
        <li className={styles.listItem}>자유게시판</li>
        <li className={styles.listItem}>Q&A</li>
        <li className={styles.listItem}>중고거래</li>
      </ul>
      <div className={styles.searchAndLogin}>
        <div className={styles.searchLogo}>Search</div>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </nav>
  );
};
