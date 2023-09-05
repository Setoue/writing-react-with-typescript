import { IButton } from "../../types/ITasks";
import style from "./Button.module.scss";

const Button = ({ name, type = "button", onClick }: IButton) => {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {name}
    </button>
  );
};

export default Button;
