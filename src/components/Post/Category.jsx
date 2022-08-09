import { useNavigate } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Common/Button";

// TODO hover 처리
const Category = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${props.path}`);
  };

  return (
    <div
      className='flex justify-between pl-10 pr-10 w-4/5 h-1/5 rounded shadow-lg m-auto'
      onClick={onClickHandler}
    >
      <div className='flex-none'>{props.contents}</div>
      <Button
        className='flex-none'
        onClick={onClickHandler}
        icon={faArrowAltCircleRight}
      />
    </div>
  );
};

export default Category;
