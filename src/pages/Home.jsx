import Layout from "../components/Styled/Layout";
import Header from "../components/Common/Header";
import HomeLayout from "../components/Styled/HomeLayout";

const Home = (props) => {
  return (
    <div>
      <Layout>
        <Header />
        <HomeLayout />
      </Layout>
    </div>
  );
};

export default Home;
