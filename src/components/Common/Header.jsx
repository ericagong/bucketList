import { useNavigate } from "react-router-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Button from "./Button";

const Header = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/home");
  };

  return (
    <Navigator>
      <GoHome>
        <Button icon={faHome} size={"lg"} onClick={onClickHandler} />
      </GoHome>
      <Project>Project Name</Project>
    </Navigator>
  );
};

export default Header;

const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
`;

const GoHome = styled.div`
  margin-left: 20px;
`;

const Project = styled.div`
  margin-right: 20px;
`;
