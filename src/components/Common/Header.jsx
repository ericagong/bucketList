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
      <div>
        <Button icon={faHome} size={"lg"} onClick={onClickHandler} />
      </div>
      <div>Project Name</div>
    </Navigator>
  );
};

export default Header;

const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
`;
