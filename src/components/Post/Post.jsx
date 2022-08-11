import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deletePost } from "../../redux/modules/posts";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { SmallBox } from "../Styled/Boxes";
import { Helper3, Helper4 } from "../Styled/Helpers";
import Button from "../Common/Button";

const Post = ({ id, username, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("clicked");
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
          <Helper3>{title}</Helper3>
          <Helper4>Creator: {username}</Helper4>
        </Clickable>
        <Wrapper>
          <Button onClick={onDeleteHandler} icon={faTrashCan} inBox={true} />
        </Wrapper>
      </SmallBox>
    </>
  );
};

export default Post;

const Clickable = styled.div`
  padding-left: 5%;
  margin-right: auto;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.hoverColor};
  }
`;

const Wrapper = styled.div`
  padding-right: 0px;
  margin-left: auto;
  padding-right: 3%;
`;
