import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className='flex justify-between ml-10 mr-10'>
        <Button className='flex-none' onClick={onClickHandler} icon={faHome} />
        <div className='flex-none'>Simple Posts</div>
      </div>
      <hr className='mt-3 border-slate-200' />
    </div>
  );
};

export default Header;
