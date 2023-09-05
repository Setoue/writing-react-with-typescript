import { ITask } from "../../types/ITasks";
import Button from "../Button";
import style from "./Forms.module.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Forms = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
}) => {
  const [state, setState] = useState({
    name: "",
    time: "00:00:00",
  });

  const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((prevSetTasks) => [
      ...prevSetTasks,
      { ...state, selected: false, completed: false, id: uuidv4() },
    ]);
    setState({
      name: "",
      time: "00:00:00",
    });
  };

  return (
    <form className={style.newTask} onSubmit={submitTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add new study</label>
        <input
          type="text"
          name="task"
          id="task"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          value={state.time}
          onChange={(e) => setState({ ...state, time: e.target.value })}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit" name="Adicionar" />
    </form>
  );
};

export default Forms;
