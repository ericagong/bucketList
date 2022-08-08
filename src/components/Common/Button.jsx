import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO null visibility: none 차이
const Button = ({ contents, icon, onClick }) => {
  return (
    <div onClick={onClick}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {contents ? <button>{contents}</button> : null}
    </div>
  );
};

export default Button;
