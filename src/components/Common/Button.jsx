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
  padding: 10px 30px;
  margin: 5px 10px;
  border-radius: 50px;
  transition: all .3s;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.buttonTextColor};
  }
`;
