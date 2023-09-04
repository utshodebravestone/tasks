import { FC, useState } from "react";
import TaskType from "./types";

const Task: FC<{ task: TaskType }> = ({ task: initialTask }) => {
  const [task, setTask] = useState(initialTask);

  return (
    <div>
      <input type="checkbox" id={task.id.toString()} />
      <label htmlFor={task.id.toString()}>{task.name}</label>
    </div>
  );
};

export default Task;
