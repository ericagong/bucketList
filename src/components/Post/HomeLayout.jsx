import styled from "styled-components";

import Wrapper from "../Styled/Wrapper";
import Category from "./Category";

// TODO change Helper into img
const HomeLayout = (props) => {
  return (
    <Wrapper>
      <Helper>Simple Board</Helper>
      <Category contents='📝 Create New Post' path='/create' />
      <Category contents='📖 Read Posts' path='/posts' />
    </Wrapper>
  );
};

export default HomeLayout;

const Helper = styled.h3`
  height: 10%;
  padding-top: 20px;
  font-weight: bold;
  font-size: 1.5rem;
`;
