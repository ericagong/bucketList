import { useNavigate } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Button from "../Common/Button";

const Category = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${props.path}`);
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <div>{props.contents}</div>
      <Button onClick={onClickHandler} icon={faArrowAltCircleRight} />
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  width: 60vw;
  height: 30vh;

  display: flex;
  justify-content: space-around;
  background-color: tomato;
`;
