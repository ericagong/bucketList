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
      return data.postId === post_id*1
    });
    console.log(commentList)
    //console.log(comment)
    const [isEdit, setIsEdit] = useState(false);
    const [newbody, setNewBody] = useState("");
    
    useEffect(() => {
      dispatch(__getComments());
    }, [dispatch]);
  
    const onEdit = () => {
      
      setIsEdit(!isEdit)
    }

    const onDelete = (comment_id) => {
      console.log(comment_id)
      dispatch(__deleteComment(comment_id));
      window.location.reload();
    }

    const onChangeHandler = (e) =>{
      const value = e.target.value;
      setNewBody(value);
    }
    const onEditComment = () => {
      dispatch(__editComment({
              id: commentList.id,
              body: newbody,
              postId: post_id,
              username: commentList.username
          })
      );
      setIsEdit(false);
    }  
    return (
        <>
          comment List 
            {commentList.map( value => 
              <div key={value.id}>
                {console.log(value.id, isEdit)}
                {isEdit ? (
                  <div>
                  <input
                    type="text"
                    //maxLength={100}
                    onChange={(e)=> {
                      onChangeHandler(e.target.value)
                    }}/>
                  <Button onClick={onEdit} contents='취소'></Button>
                  <Button onClick={()=>onEditComment(value.id)} contents='수정'></Button>
                </div>
                  ) : (
                  <div>
                    <p>{value.username}</p>
                    <span>{value.body}</span>
                    <Button
                      onClick={() => onEdit(value.id)}
                      name={value.body}
                      contents='수정하기'>
                    </Button>
                    <Button onClick={() => onDelete()}  contents='삭제하기'></Button>
                  </div>
                )}
              </div>
              )}
        </>
    );
};

export default Comment;