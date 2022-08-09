import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO null visibility: none 차이
// TODO add hover action
const Button = ({ contents, icon, onClick, disabled }) => {
  return (
    <div onClick={onClick}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {contents ? (
        <button disabled={disabled === undefined ? false : disabled}>
          {contents}
        </button>
      ) : null}
    </div>
  );
};

export default Button;
