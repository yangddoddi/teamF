import React from "react";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import axios from "axios";
import { Location } from "react-router-dom";
import styles from "./PostView.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import { BookOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";
import { Reply } from "./Reply";
import { ReplyOfComment } from "./ReplyOfComment";
import { Editor } from "@toast-ui/react-editor";
import colorPlugin from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { useRef } from "react";
import { ReplyEditor } from "./ReplyEditor";
import { SERVER } from "../../util/Variables";
import { LikeFilled } from "@ant-design/icons";

export const PostView = () => {
  const [post, setPost] = useState({});
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [key, setKey] = useState(0);
  const [category, setCategory] = useState("자유게시판");
  const [clicks, setClicks] = useState(0);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [isModified, setIsModified] = useState(false);
  const [reply, setReply] = useState([]);
  const [replyOfComment, setReplyOfComment] = useState([]);
  const [replyCount, setReplyCount] = useState(0);
  const [replyOfCommentCount, setReplyOfCommentCount] = useState(0);
  const [tagKey, setTagKey] = useState([]);
  const [postLike, setPostLike] = useState(false);
  const [bookmarkLike, setBookmarkLike] = useState(false);

  const { id } = useParams();

  const editorRef = useRef();

  const onChangeEditor = () => {
    setContent(editorRef.current.getInstance().getHTML());
  };

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(`${SERVER}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
        const data = res.data.data;
        const tag = data.tag.map((tag) => tag);
        const time = data.createdAt.split("T")[0];
        console.log(tag);
        setKey(data.key);
        setCategory(data.category);
        setTitle(data.title);
        setTags(tag);
        setAuthor(data.author.authorName);
        setContent(data.content);
        setCreatedAt(time);
        setIsModified(data.isModified);
        setClicks(data.like);
        setPostLike(data.postLike);
        setBookmarkLike(data.bookmarkLike);
        // Comment 필요
        console.log(tags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER}/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickLikeBtnHandler = () => {
    axios
      .post(`${SERVER}/posts/${id}/like`)
      .then((res) => {
        setLike(!postLike);
        console.log(res);
        setLikeCount(res.data.like);
        if (postLike) {
          alert("좋아요 취소");
        } else {
          alert("좋아요");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickBookmarkHandler = () => {
    axios
      .post(`${SERVER}/posts/${id}//bookmark`)
      .then((res) => {
        console.log(res);
        setBookMark(!bookMark);
        if (bookMark) {
          alert("북마크를 해제했습니다.");
        } else {
          alert("북마크를 했습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <h1 className={styles.category}>자유게시판</h1>
          <div className={styles.topContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.profile}>
              <div className={styles.profileLeft}>
                <UserOutlined className={styles.avatar} />
              </div>
              <div className={styles.profileRight}>
                <p className={styles.author}>{author}</p>
                <span>{createdAt}</span> · <EyeOutlined />
                <span>{clicks}</span> ·{" "}
                <span>{isModified ? "수정됨" : "원본"}</span>
              </div>
              <BookOutlined
                className={styles.bookMark}
                onClick={onClickBookmarkHandler}
              />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <Viewer initialValue={content} bor />
            <div className={styles.contentBottomContainer}>
              <div className={styles.tagContainer}>
                {tags.length != 0 &&
                  tags.map((tag) => (
                    <span className={styles.tag} key={tag.tagId}>
                      #{tag.name}
                    </span>
                  ))}
              </div>
              <div className={styles.btnContainer}>
                {postLike ? (
                  <LikeFilled
                    className={styles.likeBtn}
                    onClick={onClickLikeBtnHandler}
                  />
                ) : (
                  <LikeOutlined
                    className={styles.likeBtn}
                    onClick={onClickLikeBtnHandler}
                  />
                )}
                <div className={styles.like} onClick={onClickLikeBtnHandler}>
                  {likeCount}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.replyContainer}>
          <h2>댓글 2개</h2>
          <Reply>
            <ReplyOfComment />
          </Reply>
        </div>
        <ReplyEditor />
      </div>
    </>
  );
};
