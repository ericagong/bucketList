import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/home");
  };

  return (
    <div>
      <FontAwesomeIcon icon={faHome} onClick={onClickHandler} />
      <div>Project Name</div>
    </div>
  );
};

export default Header;
