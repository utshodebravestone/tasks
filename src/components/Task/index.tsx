import { FC, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import useAppContext from "../../hooks/useAppContext";
import useTaskContext from "../../hooks/useTaskContext";

const Task: FC<{ taskIndex: number }> = ({ taskIndex }) => {
  const { activeTaskGroupIndex } = useAppContext();
  const { taskGroups, onTaskUpdate, onTaskDelete } = useTaskContext();
  const [task, setTask] = useState(
    taskGroups[activeTaskGroupIndex]?.tasks[taskIndex]
  );

  useEffect(() => {
    setTask(taskGroups[activeTaskGroupIndex].tasks[taskIndex]);
  }, [activeTaskGroupIndex]);

  useEffect(() => {
    onTaskUpdate(activeTaskGroupIndex, task.id, task);
  }, [task]);

  return (
    <div className="flex items-center justify-between gap-3 text-xl font-light">
      <div className="flex items-center gap-2.5">
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
        <p className={`${task.complected ? "line-through" : ""}`}>
          {task.name}
        </p>
      </div>
      <button
        onClick={() => {
          onTaskDelete(activeTaskGroupIndex, task.id);
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default Task;
