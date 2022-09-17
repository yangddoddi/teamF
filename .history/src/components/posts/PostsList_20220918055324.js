import styles from "./PostsList.module.scss";
import { Pagination } from "antd";
import { useEffect } from "react";
import { useState } from "react";

export const PostsList = ({ ListName, children }) => {
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (ListName === "qna") {
      setCategory("질문답변");
    } else if (ListName === "all") {
      setCategory("recent");
    } else if (ListName === "notice") {
      setCategory("공지사항");
    } else if (ListName === "free") {
      setCategory("자유게시판");
    }
  }, [ListName]);

  return (
    <>
      <div className={styles.bottomContainer}>
        <div className={styles.title}>{category}</div>
        <div className={styles.boardContainer}>{children}</div>
      </div>
    </>
  );
};