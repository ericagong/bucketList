import styled from "styled-components";

export const Helper1 = (props) => {
  return <H1>{props.children}</H1>;
};

export const Helper2 = (props) => {
  return <H2>{props.children}</H2>;
};

const H1 = styled.h3`
  height: 10%;
  padding-top: 20px;
  font-weight: bold;
  font-size: 1.5rem;
`;

const H2 = styled.div`
  font-size: 1.2rem;
`;
