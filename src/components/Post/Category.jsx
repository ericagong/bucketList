import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Box } from "../Styled/Boxes";
import { Helper2 } from "../Styled/Helpers";

const Category = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${props.path}`);
  };

  return (
    <Box onClick={onClickHandler}>
      <Helper2>{props.contents}</Helper2>
      <Icon icon={faArrowAltCircleRight} size='lg' />
    </Box>
  );
};

export default Category;

const Icon = styled(FontAwesomeIcon)`
  padding-left: 30px;
`;
