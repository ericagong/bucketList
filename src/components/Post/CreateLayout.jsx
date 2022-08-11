import React from "react";
import Button from "../Common/Button";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __createPost } from "../../redux/modules/posts";
import { useForm } from "react-hook-form";

// TODO formilk 사용해보기
// TODO change with useInput hook
// TODO 유효성 검사 추가
const CreateLayout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // 공백 문자
  let black_pattern = /^\s+|\s+$/g;

  // data 객체에 username, title, contents 값 포함
  const onSubmit = (data) => {
    if (data.username.replace(black_pattern, '') === "" ) {
      alert("Only spaces were entered in the username")
      return
    } else if (data.title.replace(black_pattern, '') === "" ) {
      alert("Only spaces were entered in the title")
      return
    } else if (data.contents.replace(black_pattern, '') === "" ) {
      alert("Only spaces were entered in the contents")
      return
    } else {
      dispatch(__createPost(data));
      navigate("/posts");
    }
  }
  const onError = (errors, e) => console.log(errors, e);
  // 마스터 브랜치

return (
  <div>
    <StForm onSubmit={handleSubmit(onSubmit, onError)}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' placeholder="10 characters or less" {...register("username", { required: true, maxLength: 10, })} />
      {errors.username && errors.username.type === "required" && <p>This field is required</p>}
      {errors.username && errors.username.type === "maxLength" && <p>Your name exceed maximum length</p>}

      <label htmlFor='title'>Title</label>
      <input type='text' id='title' placeholder="20 characters or less" {...register("title", { required: true, maxLength: 20 })} />
      {errors.title && errors.title.type === "required" && <p>This field is required</p>}
      {errors.title && errors.title.type === "maxLength" && <p>Your title exceed maximum length</p>}

      <label htmlFor='contents'>Contents</label>
      <textarea type='text' id='contents' placeholder="200 characters or less" {...register("contents", { required: true, maxLength: 200 })} />
      {errors.contents && errors.contents.type === "required" && <p>This field is required</p>}
      {errors.contents && errors.contents.type === "maxLength" && <p>Your contents exceed maximum length</p>}

      <Button contents='Submit' />
    </StForm>
  </div>
);
};

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  label {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 25px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    resize: none;
    height: 100px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-bottom: 50px;
  }
  p {
    color: red;
  }
`

export default CreateLayout;
