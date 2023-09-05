export interface ITask {
  name: string;
  time: string;
  selected: boolean;
  completed: boolean;
  id: string;
}

export interface IListProps {
  selectTask: (selectTask: ITask) => void;
  tasks: Array<ITask>;
}

export interface IPropsItem extends ITask {
  selectTask: (selectTask: ITask) => void;
}

export interface IPropsTime {
  selected: ITask | undefined;
  toFinishTask: () => void;
}

export interface IPropsTimer {
  time: number | undefined;
}

export interface IButton {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
