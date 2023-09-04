import { FC, useState } from "react";
import TaskType from "./types";

const Task: FC<{ task: TaskType }> = ({ task: initialTask }) => {
  const [task, setTask] = useState(initialTask);

  return (
    <div className="flex items-center gap-2.5 text-xl font-light cursor-pointer">
      <div className="h-4 w-4 border border-slate-300 rounded-3xl"></div>
      <p>{task.name}</p>
    </div>
  );
};

export default Task;
