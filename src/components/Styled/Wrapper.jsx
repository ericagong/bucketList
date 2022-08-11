import styled from "styled-components";

const Wrapper = (props) => {
  return <W>{props.children}</W>;
};

export default Wrapper;

const W = styled.div`
  height: 80vh;
  max-height: 559px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
`;
