import { FC, useEffect, useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import useTaskContext from "../../hooks/useTaskContext";

const Task: FC<{ taskIndex: number }> = ({ taskIndex }) => {
  const { activeTaskGroupId } = useAppContext();
  const { taskGroups, onTaskUpdate } = useTaskContext();
  const [task, setTask] = useState(
    taskGroups[activeTaskGroupId].tasks[taskIndex]
  );

  useEffect(() => {
    onTaskUpdate(activeTaskGroupId, task.id, task);
  }, [task]);

  return (
    <div className="flex items-center gap-2.5 text-xl font-light">
      <div
        onClick={() =>
          setTask((task) => ({
            ...task,
            complected: !task.complected,
          }))
        }
        className={`h-4 w-4 ${
          task.complected ? "bg-green-500" : "bg-transparent"
        } border border-slate-300 rounded-3xl cursor-pointer`}
      ></div>
      <p className={`${task.complected ? "line-through" : ""}`}>{task.name}</p>
    </div>
  );
};

export default Task;
