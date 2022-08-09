import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __deleteComment,
  __getComments,
  __editComment,
} from "../../redux/modules/comments";
import Button from "../Common/Button";

const Comment = () => {
  /* const post = useSelector((state) =>  state.posts.post)
    console.log(post) */
  const { post_id } = useParams();

  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments.comments);
  const commentList = comments.filter((data) => {
    return data.postId === parseInt(post_id);
  });
  console.log(commentList);
  //console.log(comment)
  const [isEdit, setIsEdit] = useState(false);
  const [newbody, setNewBody] = useState("");
  const [commentNum, setCommentNum] = useState(-1);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const onEdit = (edit_id) => {
    setCommentNum(edit_id);
    // setIsEdit(!isEdit);
  };

  const onCancel = () => {
    setCommentNum(-1);
  };

  const onDelete = (comment_id) => {
    dispatch(__deleteComment(comment_id));
    window.location.reload();
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setNewBody(value);
  };
  const onEditComment = () => {
    dispatch(
      __editComment({
        id: commentList.id,
        body: newbody,
        postId: post_id,
        username: commentList.username,
      })
    );
    setIsEdit(false);
  };

  console.log(commentNum);
  return (
    <>
      comment List
      {commentList.map((comment) => (
        <div key={comment.id}>
          {commentNum === comment.id ? (
            <div>
              <input
                type='text'
                //maxLength={100}
                onChange={(e) => {
                  onChangeHandler(e.target.value);
                }}
              />
              <Button onClick={onCancel} contents='취소'></Button>
              <Button
                onClick={() => onEditComment(comment.id)}
                contents='수정'
              ></Button>
            </div>
          ) : (
            <div>
              <p>{comment.username}</p>
              <span>{comment.contents}</span>
              <Button
                onClick={() => onEdit(comment.id)}
                name={comment.contents}
                disabled={commentNum !== -1}
                contents='수정하기'
              ></Button>
              <Button onClick={() => onDelete()} contents='삭제하기'></Button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Comment;
