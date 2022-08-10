import { useState }  from 'react';
import { useParams } from "react-router-dom";
import { __deleteComment, __editComment } from '../../redux/modules/comments';
import { useDispatch } from 'react-redux';
import Button from '../Common/Button';
import { Helper3 } from "../Styled/Helpers";
import styled from "styled-components";

const Comment = ({comment}) => {
    const { post_id } = useParams();
    const dispatch = useDispatch();
    const [contents, setContents] = useState("");
    const [commentNum, setCommentNum] = useState(-1);
    
  
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
          postId: parseInt(post_id),
          username: comment.username
        }
      }
      dispatch(__editComment(edit_comment));
      setCommentNum();
      setContents("");
    }  
    return (
        <>
            {commentNum === comment.id ? (
              <CommentListOne>
                <CommentListDiv>
                  <div>
                  <Username>{comment.username}</Username>
                  <FormComment
                    type="text"
                    maxLength={100}
                    value={contents}
                    onChange={onChangeHandler}/>
                    </div>              
                  <div>
                    <Button onClick={onEdit} contents='취소'></Button>
                    <Button onClick={()=>onEditComment(comment.id)} contents='수정'></Button>
                  </div>
              </CommentListDiv>
            </CommentListOne>
              ) : (
              <CommentListOne>
                <CommentListDiv>
                  <div>
                    <Username>{comment.username}</Username>
                    <Helper3>{comment.contents}</Helper3>
                  </div>
                  <div>
                    <Button
                      onClick={() => onEdit(comment.id)}
                      contents='수정하기'>
                    </Button>
                    <Button
                      onClick={() => onDelete(comment.id)}
                      contents='삭제하기'>
                    </Button>
                  </div>
                </CommentListDiv>
              </CommentListOne>
            )}
        </>
    );
};

export default Comment;

const CommentListOne =styled.div`
margin: 10px 0;
`

const CommentListDiv = styled.div `
display: flex;
align-items: center;
justify-content: space-between;

div{
  display: flex;
  align-items: center;
}
`
const Username = styled.div`
  font-size: 0.7rem;
  width: 140px;
  margin-right: 10px;
`

const FormComment =  styled.input`
    width: 550px;
    padding: 10px 30px;
    border-radius: 50px;
    border: none;
`