import styled from "styled-components";

const Wrapper = (props) => {
  return <W>{props.children}</W>;
};

export default Wrapper;

const W = styled.div`
  width: 70vw;
  height: 80vh;
  max-width: 1000px;
  max-height: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: tomato;
`;
