import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deletePost } from "../../redux/modules/posts";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { SmallBox } from "../Styled/Boxes";
import Button from "../Common/Button";

const Post = ({ id, username, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigate(`/detail/${id}`);
  };

  const onDeleteHandler = () => {
    let answer = window.confirm("Sure about delete this post?");
    if (!answer) {
      return;
    }
    dispatch(__deletePost(id));
    // TODO 어떤 방식으로 바꿀지 고민해보기
    // dispatch(__getPosts());
  };

  return (
    <>
      <SmallBox>
        <Clickable onClick={onClickHandler}>
          <div>{title}</div>
          <div>Creator: {username}</div>
        </Clickable>
        <Button onClick={onDeleteHandler} icon={faTrashCan} />
      </SmallBox>
    </>
  );
};

export default Post;

const Clickable = styled.div``;
