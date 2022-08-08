import Layout from "../components/Styled/Layout";
import Header from "../components/Common/Header";
import PostsLayout from "../components/Post/PostsLayout";

const Posts = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <PostsLayout />
      </Layout>
    </>
  );
};

export default Posts;
