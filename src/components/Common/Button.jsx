import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// TODO null visibility: none 차이
const Button = ({ contents, icon, size, onClick, inBox }) => {
  return (
    <Wrapper onClick={onClick}>
      {icon ? <Icon icon={icon} size={size} /> : null}
      {contents ? <Btn>{contents}</Btn> : null}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div``;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.iconColor};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.hoverColor};
    transform: scale(1.1);
  }
`;

const Btn = styled.button`
  border: none;
  box-shadow: 1px 1px 5px gray;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.buttonTextColor};
  }
`;
