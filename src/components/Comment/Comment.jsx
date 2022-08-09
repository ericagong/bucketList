import { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { __deleteComment, __getComments, __editComment } from '../../redux/modules/comments';
import Button from '../Common/Button';

const Comment = () => {
    /* const post = useSelector((state) =>  state.posts.post)
    console.log(post) */
    const { post_id } = useParams();
    const dispatch = useDispatch();
    const comment = useSelector((state) => state.comments.comments)
    const commentList = comment.filter((data) => {
      return data.post_id === parseInt(post_id)
    });
/*     console.log(commentList)
    console.log(comment)
    */
    const [contents, setContents] = useState("");
    const [commentNum, setCommentNum] = useState(-1);
    
    console.log(comment.target)
    
    useEffect(() => {
      dispatch(__getComments());
    }, [dispatch],);
  
    const onEdit = (edit_id) => {
      setCommentNum(edit_id);
    }

    const onDelete = (comment_id) => {
      console.log(comment_id)
      dispatch(__deleteComment(comment_id));
    }

    const onChangeHandler = (e) =>{
      const value = e.target.value;
      setContents(value);
    }
    const onEditComment = (comment_id) => {
      if(!contents){
        alert("내용이 비어있습니다.");
        return;
      }
      const edit_comment = {
        comment_id,
        edit_body: {
          contents: contents,
          post_id: parseInt(post_id),
          username: commentList.username
        }
      }
      dispatch(__editComment(edit_comment));
      setCommentNum();
      setContents("");
    }  
    return (
        <>
          comment List 
            {commentList.map((comment) => 
              <div key={comment.id}>
                {commentNum === comment.id ? (
                  <div>
                  <input
                    type="text"
                    maxLength={100}
                    value={contents}
                    onChange={onChangeHandler}/>
                  <Button onClick={onEdit} contents='취소'></Button>
                  <Button onClick={()=>onEditComment(comment.id)} contents='수정'></Button>
                </div>
                  ) : (
                  <div>
                    <p>{comment.username}</p>
                    <span>{comment.contents}</span>
                    <Button
                      onClick={() => onEdit(comment.id)}
                      contents='수정하기'>
                    </Button>
                    <Button
                      onClick={() => onDelete(comment.id)}
                      contents='삭제하기'></Button>
                  </div>
                )}
              </div>
              )}
        </>
    );
};

export default Comment;