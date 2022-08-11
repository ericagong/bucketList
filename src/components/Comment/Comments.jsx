import { useEffect }  from 'react';
import Comment from './Comment';
import { __getComments } from '../../redux/modules/comments';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

const Comments = () => {
    const { post_id } = useParams();
    const dispatch = useDispatch();
    const comment = useSelector((state) => state.comments.comments)
    const commentList = comment.filter((data) => {
      return data.postId === parseInt(post_id)
    });

    useEffect(() => {
        dispatch(__getComments());
      }, [dispatch],);

    return (
        <CommnetListView>
            {commentList.map((comment) =>
            <Comment key={comment.id} comment={comment}></Comment>
            )}
        </CommnetListView>
    );
};

export default Comments;

const CommnetListView = styled.div `
  height: calc(370px - 150px);
  position: relative;
  bottom: 0;
  overflow-y: scroll;

  @media screen and (max-width: 1250px) {
      height: calc(370px - 230px);
    }
`