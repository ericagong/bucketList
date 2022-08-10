import { useEffect }  from 'react';
import Comment from './Comment';
import { __getComments } from '../../redux/modules/comments';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

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
        <>
            {commentList.map((comment) =>
            <Comment key={comment.id} comment={comment}></Comment>
            )}
        </>
    );
};

export default Comments;