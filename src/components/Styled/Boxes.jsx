import styled from "styled-components";

export const Box = (props) => {
  return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
};

export const SmallBox = (props) => {
  return <SmallWrapper>{props.children}</SmallWrapper>;
};

const Wrapper = styled.div`
  width: 60vw;
  height: 30vh;
  margin: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;
  background-color: ${(props) => props.theme.boxColor};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.buttonTextColor};
  }
`;

const SmallWrapper = styled(Wrapper)`
  width: 60vw;
  height: 20vh;
  background-color: teal;
`;
