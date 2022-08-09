import styled from "styled-components";

import Category from "./Category";

const HomeLayout = (props) => {
  return (
    <Wrapper>
      <Helper>[Move to each category!]</Helper>
      <Category contents='📝 Create New Post' path='/create' />
      <Category contents='📖 Read Posts' path='/posts' />
    </Wrapper>
  );
};

export default HomeLayout;

const Wrapper = styled.div`
  width: 70vw;
  height: 80vh;
  max-width: 1000px;
  max-height: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: teal;
`;

const Helper = styled.h3`
  height: 10%;
  padding-top: 20px;
  font-weight: bold;
  font-size: 1.5rem;
`;
