import React, {useState} from 'react';
import Button from '../Common/Button';
import { useDispatch } from 'react-redux';
import { __createComment } from '../../redux/modules/comments';
import { useParams} from "react-router-dom";


const CommentsView = () => {
    const dispatch = useDispatch();
    const { post_id } = useParams();
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");

    const onChangeHandler = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        if (!value){
            return;
        }else{
            if(id === "username") setUsername(value);
            else setBody(value);
        }
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if (!username || !body){
            return;
        }
        const new_comment = {
            postId : post_id*1,
            username,
            body,
        };
        dispatch(__createComment(new_comment));
        setUsername("")
        setBody("")
        }

    return (
        <div>
            CommentView
            <form onSubmit= {onSubmitHandler}>
                <input
                    type="text"
                    placeholder='이름 (5자이내)'
                    maxLength={5}
                    id='username'
                    onChange={onChangeHandler}/>

                <input
                    type="text"
                    placeholder='댓글을 추가하세요. (100자 이내)'
                    id= 'body'
                    maxLength={100}
                    onChange={onChangeHandler}/>
                <Button onClick={onSubmitHandler} contents='add comment'/>
            </form>
        </div>
    );
};

export default CommentsView;