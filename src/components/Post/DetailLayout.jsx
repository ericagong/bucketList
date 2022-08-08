import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/posts";
import Button from "../Common/Button";

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
    <>
      Detail Layout
      {post ? <div>{`id: (${id})`}</div> : null}
      <Link to='/posts'>Go Back</Link>
      {post ? <h3>{title}</h3> : null}
      {post ? <div>{contents}</div> : null}
      <Button onClick={onClickHandler} contents='Edit this post' />
    </>
  );
};

export default DetailLayout;
