import Layout from "../components/Styled/Layout";
import Header from "../components/Common/Header";
import HomeLayout from "../components/Post/HomeLayout";

const Home = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <HomeLayout />
      </Layout>
    </>
  );
};

export default Home;
