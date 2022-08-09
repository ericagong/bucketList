import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/posts";

import Post from "./Post";
import Wrapper from "../Styled/Wrapper";
import { Helper1, Helper2 } from "../Styled/Helpers";

// TODO infinite scroll
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
      <Helper1>All Posts</Helper1>
      {isLoading ? <Helper2>In Loading...</Helper2> : null}
      {error ? <Helper2>{error.message}</Helper2> : null}
      {!isLoading && !error ? posts : null}
    </Wrapper>
  );
};

export default PostsLayout;
