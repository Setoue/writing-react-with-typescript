import { IPropsItem } from "../../../types/ITasks";
import style from "./Item.module.scss";

const Item = ({
  name,
  time,
  selected,
  completed,
  id,
  selectTask,
}: IPropsItem) => {
  console.log({ name, time, selected, completed, id });
  return (
    <li
      className={` ${style.task} ${selected ? style.taskSelected : ""} ${
        completed ? style.taskCompleted : ""
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          name,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.completed} aria-label="task completed"></span>
      )}
    </li>
  );
};

export default Item;
