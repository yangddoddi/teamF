import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "./PostEditor.module.scss";

export const PostEditor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
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
