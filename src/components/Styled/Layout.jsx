import styled from "styled-components";

const Layout = (props) => {
  return <Box>{props.children}</Box>;
};

export default Layout;

//TODO 요소 가로, 세로 가운데 위치시키는 법
const Box = styled.div`
  width: 80vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 700px;
  min-height: 500px;
  padding: 40px;
  box-sizing: border-box;
  margin: auto;
  margin-top: 5vh;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  overflow: hidden;
`;
