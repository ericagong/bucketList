import Layout from "../components/Styled/Layout";
import Header from "../components/Common/Header";
import DetailLayout from "../components/Post/DetailLayout";
import Comments from "../components/Comment/Comments";
const Detail = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <DetailLayout />
        <Comments/>
      </Layout>
    </>
  );
};

export default Detail;
