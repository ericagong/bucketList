import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { __getPost, __editPost } from "../../redux/modules/posts";
import Button from "../Common/Button";

const EditLayout = (props) => {
  const { post_id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);

  const [contents, setContents] = useState(post.contents);

  useEffect(() => {
    dispatch(__getPost(post_id));
  }, [dispatch, post_id]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setContents(value);
  };

  // TODO button disable 처리
  const onSubmitHandler = () => {
    if (!contents) {
      alert("Contents cannot be empty.");
      return;
    }
    const edit_info = {
      post_id,
      edit_post: {
        contents,
      },
    };
    dispatch(__editPost(edit_info));
    navigate(`/detail/${post_id}`);
  };

  return (
    <>
      Edit Layout
      {post ? <h3>{post.title}</h3> : null}
      <textarea value={contents} onChange={onChangeHandler} />
      <Button onClick={onSubmitHandler} contents='Save Edit' />
    </>
  );
};

export default EditLayout;
