import Wrapper from "../Styled/Wrapper";
import Category from "./Category";
import { Helper1 } from "../Styled/Helpers";

// TODO change Helper into img
const HomeLayout = (props) => {
  return (
    <Wrapper>
      <Helper1>Simple Board</Helper1>
      <Category contents='📝 Create New Post' path='/create' />
      <Category contents='📖 Read Posts' path='/posts' />
    </Wrapper>
  );
};

export default HomeLayout;
