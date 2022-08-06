import { useNavigate } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Common/Button";

const Category = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${props.path}`);
  };

  return (
    <div onClick={onClickHandler}>
      <div>{props.contents}</div>
      <Button onClick={onClickHandler} icon={faArrowAltCircleRight} />
    </div>
  );
};

export default Category;
