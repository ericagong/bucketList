import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/posts";

import styled from "styled-components";

import Post from "./Post";

const PostsLayout = (props) => {
  const dispatch = useDispatch();

  const allPosts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const success = useSelector((state) => state.posts.success);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch, success]);

  const posts = allPosts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      username={post.username}
      title={post.title}
    />
  ));

  return (
    <Wrapper>
      {isLoading ? <div>In Loading...</div> : null}
      {error ? <div>{error.message}</div> : null}
      {!isLoading && !error ? posts : null}
    </Wrapper>
  );
};

export default PostsLayout;

const Wrapper = styled.div`
  background-color: tomato;
`;
