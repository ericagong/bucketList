import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Category = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${props.path}`);
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <Helper>{props.contents}</Helper>
      <Icon icon={faArrowAltCircleRight} size='lg' />
    </Wrapper>
  );
};

export default Category;

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

const Icon = styled(FontAwesomeIcon)`
  padding-left: 30px;
`;

const Helper = styled.div`
  font-size: 1.2rem;
`;
