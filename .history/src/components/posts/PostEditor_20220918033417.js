import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "./PostEditor.module.scss";
import { useEffect, useState } from "react";

export const PostEditor = () => {
  const selectList = ["자유게시판", "공지사항", "Q&A"];

  const [select, setSelect] = useState("자유게시판");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [editor, setEditor] = useState(null);

  const onChangeHandler = (e) => {
    setSelect(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeTag = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        <h2> 카테고리 </h2>
        <form className={styles.postForm}>
          <select
            className={styles.category}
            onChange={onChangeHandler}
            name="category"
            type="select"
          >
            {selectList.map((item) => (
              <option value={item} key={item} defaultChecked={"자유게시판"}>
                {item}
              </option>
            ))}
          </select>
          <h2> 태그 </h2>
          <input
            className={styles.title}
            onChange={onChangeTag}
            name="tag"
            type="text"
          />
          <h2> 제목 </h2>
          <input
            className={styles.title}
            onChange={onChangeTitle}
            name="title"
            type="text"
          />
          <h2> 내용 </h2>
          <Editor
            previewStyle="vertical"
            height="600px"
            width="400px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            language="ko-KR"
          />
        </form>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>등록</button>
      </div>
    </div>
  );
};
