import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "./PostEditor.module.scss";

export const PostEditor = () => {
  const selectList = ["공지사항", "자유게시판", "Q&A", "중고거래"];

  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        <h2> 카테고리 </h2>
        <select className={styles.category} name="category" type="select">
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <h2> 제목 </h2>
        <input className={styles.title} name="title" type="text" />
        <Editor
          previewStyle="vertical"
          height="600px"
          width="400px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          language="ko-KR"
        />
      </div>
      <div className={styles.btnContainer}></div>
    </div>
  );
};