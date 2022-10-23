import {
  CommentOutlined,
  CrownTwoTone,
  EditOutlined,
  getTwoToneColor,
  setTwoToneColor,
  StarOutlined,
} from "@ant-design/icons";
import styles from "./rank.module.scss";

export const Badge = ({ user }) => {
  const ranking = user.ranking;
  const userId = user.userId;
  const nickname = user.nickname;
  const avatar = user.avatar.remotePath;
  const message = user.statusMessage;
  const point = user.point;
  const contents = user.contents;
  const comments = user.comments;

  return (
    <div className={styles.rankBox}>
      <div className={styles.left}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/67794601?v=4"
          alt="avatar"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.name}>{nickname}</div>
        <div className={styles.status}>{statusMessage}</div>
        <div className={styles.pointList}>
          <div className={styles.pointContainer}>
            <StarOutlined />
            <span className={styles.point}>12</span>
          </div>
          <div className={styles.pointContainer}>
            <EditOutlined />
            <span className={styles.point}>12</span>
          </div>
          <div className={styles.pointContainer}>
            <CommentOutlined />
            <span className={styles.point}>12</span>
          </div>
        </div>
      </div>
      <div className={styles.rank}>
        <CrownTwoTone twoToneColor={"#ffed00"} />
      </div>
    </div>
  );
};