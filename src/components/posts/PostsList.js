import styles from "./PostsList.module.scss";
import { Pagination } from "antd";

export const PostsList = ({ ListName, children }) => {
  return (
    <>
      <div className={styles.bottomContainer}>
        <div className={styles.title}>{ListName}</div>
        <div className={styles.boardContainer}>{children}</div>
      </div>
    </>
  );
};
