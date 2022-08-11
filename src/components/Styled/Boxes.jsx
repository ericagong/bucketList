import styled from "styled-components";

export const Box = (props) => {
  return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
};

export const SmallBox = (props) => {
  return <SmallWrapper>{props.children}</SmallWrapper>;
};

const Wrapper = styled.div`
  width: 85%;
  padding: 30px 10px;
  margin: 25px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: ${(props) => props.theme.boxColor};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.buttonTextColor};
  }
`;

// TODO change this to infibite scroll
// TODO height 조정안됨!
const SmallWrapper = styled(Wrapper)`
  width: 80%;
  height: 20%;
  &:hover {
    cursor: default;
    background-color: ${(props) => props.theme.boxColor};
    color: ${(props) => props.theme.textColor};
  }
`;
