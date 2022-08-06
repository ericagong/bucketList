import React, { useState } from "react";
import Button from "../Common/Button";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __createPost } from "../../redux/modules/posts";

// TODO formilk 사용해보기
// TODO change with useInput hook
// TODO 유효성 검사 추가
const CreateLayout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (!value) {
      return;
    } else {
      if (id === "username") setUsername(value);
      else if (id === "title") setTitle(value);
      else setContents(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!username || !title || !contents) {
      return;
    }
    // json-server automatically creates ID.
    const new_post = {
      username,
      title,
      contents,
    };
    dispatch(__createPost(new_post));
    navigate("/posts");
  };

  return (
    <div>
      CreateLayout
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' onChange={onChangeHandler} />
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' onChange={onChangeHandler} />
        <label htmlFor='contents'>Contents</label>
        <input type='text' id='contents' onChange={onChangeHandler} />
        <Button onClick={onSubmitHandler} contents='Submit' />
      </form>
    </div>
  );
};

export default CreateLayout;
