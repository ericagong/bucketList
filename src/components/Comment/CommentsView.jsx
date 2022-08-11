import React, { useState } from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';
import styled from "styled-components";

const CommentsView = () => {
    const [isShow, setShow] = useState(false);

    return (
        <CommentView isShow={isShow}>
            <CommentToggle
            onClick={()=> {
                setShow((pre)=> !pre)
            }}>
                <p>
                    {isShow ? "Comment View" : "Comment Hide"}
                </p>
            </CommentToggle>
            <CommentForm/>
            <Comments/>
        </CommentView>
    );
};

export default CommentsView;

const  CommentView = styled.div `
    height: ${({ isShow }) => (isShow ? "50px" : "370px")};
    padding: 0 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 80px);
    background-color: ${(props) => props.theme.backgroundColor};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all .3s ease-in-out;
    p {
        height: 50px;
        cursor: pointer;
    }
`

const CommentToggle = styled.div`
    height: 50px;
`