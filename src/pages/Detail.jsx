import Layout from "../components/Styled/Layout";
import Header from "../components/Common/Header";
import DetailLayout from "../components/Post/DetailLayout";
import CommentsView from "../components/Comment/CommentsView";
const Detail = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <DetailLayout />
        <CommentsView/>
      </Layout>
    </>
  );
};

export default Detail;
