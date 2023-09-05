import style from "./List.module.scss";
import Item from "./Item";
import { IListProps } from "../../types/ITasks";

const List = ({ tasks, selectTask }: IListProps) => {
  return (
    <aside className={style.taskList}>
      <h2>Study day</h2>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <Item selectTask={selectTask} key={task.id} {...task} />
          ))}
      </ul>
    </aside>
  );
};

export default List;
