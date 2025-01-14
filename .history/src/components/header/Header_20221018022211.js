import React from "react";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { SearchBox } from "../searchBox/SearchBox";
import { Link, useNavigate } from "react-router-dom";
import { MyPage } from "../../page/mypage/MyPage";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getRefreshToken } from "../../store/Storage";
import { setToken } from "../../store/Auth";
import jwtDecode from "jwt-decode";
import { setRefreshToken } from "../../store/Storage";
import { Dispatch } from "redux";
import { SERVER } from "../../util/Variables";

export const Header = (props) => {
  const [searchBox, setSearchBox] = useState(false);
  const [search, setSearch] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const onClickHandler = () => {
    setSearchBox(!searchBox);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }


  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (searchBox) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [searchBox]);

  // useEffect(() => {
  //   if (getRefreshToken()) {
  //     axios
  //       .post(
  //         `http://${SERVER}/auth/token/refresh`,
  //         {},
  //         {
  //           headers: {
  //             RefreshToken: `Bearer ${getRefreshToken()}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         const accessToken = res.data.accessToken;
  //         const refreshToken = res.data.refreshToken;
  //         console.log(res);
  //         if (accessToken !== null && refreshToken !== null) {
  //           axios.defaults.headers.common[
  //             "Authorization"
  //           ] = `Bearer ${accessToken}`;
  //           setRefreshToken(refreshToken);
  //         }
  //         const decoded = jwtDecode(accessToken);
  //         console.log(decoded.sequence);
  //         dispatch(
  //           setToken({
  //             accessToken: accessToken,
  //             userId: decoded.sequence,
  //             nickname: decoded.nickname,
  //             email: decoded.sub,
  //             userRole: decoded.role,
  //           })
  //         );
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     console.log("no refresh token");
  //   }
  // }, []);

  const [myPage, setMyPage] = useState(false);
  const onClickMyPage = () => {
    setMyPage(!myPage);
  };

  const onClickNotice = () => {
    props.sendCategory("notice");
  };

  const onClickRanking = () => {
    alert("준비중입니다.");
  };

  const onClickStudy = () => {
    console.log("study");
  };

  const onClickQna = () => {
    props.sendCategory("qna");
  };

  const onClickFree = () => {
    props.sendCategory("free");
  };

  const onClickLogo = () => {
    props.sendCategory("all");
  };

  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo} as={Link} to="/main" onClick={onClickLogo}>
          <Link to="/board/all" style={{ color: "black", padding: "30px" }}>
            Dev_<span>illage</span>
          </Link>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem} onClick={onClickNotice}>
            <Link
              to="/board/notice"
              style={{ color: "black", padding: "30px" }}
            >
              공지사항
            </Link>
          </li>
          <li className={styles.listItem} onClick={onClickRanking}>
            <Link
              to="/board/ranking"
              style={{ color: "black", padding: "30px" }}
            >
              회원랭킹
            </Link>
          </li>
          <li className={styles.listItem} onClick={onClickFree}>
            <Link to="/board/free" style={{ color: "black", padding: "30px" }}>
              자유게시판
            </Link>
          </li>
          <li className={styles.listItem} onClick={onClickQna}>
            <Link to="/board/qna" style={{ color: "black", padding: "30px" }}>
              Q&A
            </Link>
          </li>
          <li className={styles.listItem} onClick={onClickStudy}>
            <Link to="/board/chat" style={{ color: "black", padding: "30px" }}>
              채팅
            </Link>
          </li>
        </ul>
        <div className={styles.searchAndLogin}>
          <div className={styles.searchLogo} onClick={onClickHandler}>
            <SearchOutlined onChange={onSearchChangeHandler} />
          </div>
          {isLogin ? (
            <button className={styles.loginBtn} onClick={onClickMyPage}>
              MyPage
            </button>
          ) : (
            <button
              className={styles.loginBtn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </nav>
      {searchBox ? <SearchBox /> : null}
      {myPage ? <MyPage myPage={myPage} setMyPage={setMyPage} /> : null}
    </>
  );
};
