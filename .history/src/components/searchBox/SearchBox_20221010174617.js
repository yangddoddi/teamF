import axios from "axios";
import { useState } from "react";
import styles from "./SearchBox.module.scss";

export const SearchBox = () => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/search?q=${search}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <form className={styles.searchBox} onSubmit={onSubmitHandler}>
      <input
        placeholder="Please enter your search term"
        type="text"
        onChange={onChangeHandler}
      ></input>
    </form>
  );
};
