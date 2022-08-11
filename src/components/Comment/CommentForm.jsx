import React, {useState} from 'react';
import Button from '../Common/Button';
import { useDispatch } from 'react-redux';
import { __createComment } from '../../redux/modules/comments';
import { useParams} from "react-router-dom";
import styled from "styled-components";


const CommentForm = () => {
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
            postId : parseInt(post_id),
            username,
            contents,
        };
        dispatch(__createComment(new_comment));
        setUsername("");
        setContents("");
        }
    return (
        <>
             <form onSubmit= {onSubmitHandler}>
                <FormDiv>
                    <div>
                        <FormUsername
                            type="text"
                            placeholder='이름 (5자이내)'
                            maxLength={5}
                            id='username'
                            value={username}
                            onChange={onChangeHandler}/>

                        <FormComment
                            type="text"
                            placeholder='댓글을 추가하세요. (100자 이내)'
                            id= 'body'
                            value={contents}
                            maxLength={100}
                            onChange={onChangeHandler}/>
                    </div>
                    <Button onClick={onSubmitHandler} contents='add comment'/>
                </FormDiv>
            </form>
        </>
    );
};

export default CommentForm;

const FormDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #8181811d;
    @media screen and (max-width: 1250px) {
        display: block;
        button {
            margin: 0;
        }
    }
`

const FormUsername = styled.input`
    width: 80px;
    padding: 10px 30px;
    border-radius: 50px;
    border: none;
    margin-right: 10px;
    @media screen and (max-width: 1250px) {
        margin-bottom: 10px;
    }
`

const FormComment = styled(FormUsername)`
    width: 550px;
    margin-right: 0;
    @media screen and (max-width: 1250px) {
        width: calc(100% - 80px);
    }
`