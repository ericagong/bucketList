import React, {useState} from 'react';
import Button from '../Common/Button';
import { useDispatch } from 'react-redux';
import { __createComment } from '../../redux/modules/comments';
import { useParams} from "react-router-dom";


const CommentsView = () => {
    const dispatch = useDispatch();
    const { post_id } = useParams();
    const [username, setUsername] = useState("");
    const [contents, setContents] = useState("");

    const onChangeHandler = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        if (!value){
            return;
        }else{
            if(id === "username") setUsername(value);
            else setContents(value);
        }
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if (!username || !contents){
            return;
        }
        const new_comment = {
            post_id : parseInt(post_id),
            username,
            contents,
        };
        dispatch(__createComment(new_comment));
        setUsername("");
        setContents("");
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
                    value={username}
                    onChange={onChangeHandler}/>

                <input
                    type="text"
                    placeholder='댓글을 추가하세요. (100자 이내)'
                    id= 'body'
                    value={contents}
                    maxLength={100}
                    onChange={onChangeHandler}/>
                <Button onClick={onSubmitHandler} contents='add comment'/>
            </form>
        </div>
    );
};

export default CommentsView;