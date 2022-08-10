import Layout from "../components/Styled/Layout";
import Header from "../components/Common/Header";
import CreateLayout from "../components/Post/CreateLayout";

const Create = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <CreateLayout />
      </Layout>
    </>
  );
};

export default Create;
