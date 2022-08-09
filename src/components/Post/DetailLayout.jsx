import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/posts";
import Button from "../Common/Button";
import styled from "styled-components";

const DetailLayout = (props) => {
  const { post_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const { id, title, contents } = post;

  useEffect(() => {
    dispatch(__getPost(post_id));
  }, [dispatch, post_id]);

  const onClickHandler = () => {
    navigate(`/edit/${post_id}`);
  };

  return (
    <StDetailLayout>
      <StDetailHeader>
      {post ? <div>{`id: (${id})`}</div> : null}
      <Link to='/posts'>Go Back</Link>
      </StDetailHeader>
      <StDetail>
        {post ? <h3>{title}</h3> : null}
        {post ? <div>{contents}</div> : null}
        <Button onClick={onClickHandler} contents='Edit this post' />
      </StDetail>
    </StDetailLayout>
  );
};

const StDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 20px;
`
const StDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const StDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 20px;
  }
`

export default DetailLayout;
