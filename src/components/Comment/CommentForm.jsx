import React from 'react';
import Button from '../Common/Button';
import { useDispatch } from 'react-redux';
import { __createComment } from '../../redux/modules/comments';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";


const CommentForm = () => {
    const dispatch = useDispatch();
    const { post_id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const black_pattern = /^\s+|\s+$/g;

    const onSubmit = (data) => {
        if (data.username.replace(black_pattern, '') === "") {
            alert("Only spaces were entered in the username")
            return
        } else if (data.contents.replace(black_pattern, '') === "") {
            alert("Only spaces were entered in the contents")
            return
        } else {
            const new_comment = {
                postId: parseInt(post_id),
                username: data.username,
                contents: data.contents,
            }
            dispatch(__createComment(new_comment));
            reset({ username: "", contents: "" })
        }
    }
    const onError = (errors, e) => console.log(errors, e);


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <FormDiv>
                    <div>
                        <FormUsername
                            type="text"
                            placeholder='이름 (5자이내)'
                            id='username'
                            {...register("username", { required: true, maxLength: 20 })}
                        />
                        <FormComment
                            type="text"
                            placeholder='댓글을 추가하세요. (100자 이내)'
                            id='body'
                            {...register("contents", { required: true, maxLength: 100 })}
                        />
                        {errors.username && errors.username.type === "required" && <p>This field is required</p>}
                        {errors.username && errors.username.type === "maxLength" && <p>Your name exceed maximum length</p>}
                        {errors.contents && errors.contents.type === "required" && <p>This field is required</p>}
                        {errors.contents && errors.contents.type === "maxLength" && <p>Your contents exceed maximum length</p>}



                    </div>
                    <Button contents='add comment' />
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