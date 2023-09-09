import { FC, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import useTaskContext from "../../hooks/useTaskContext";
import useAppContext from "../../hooks/useAppContext";

import TaskType from "../Task/types";

import Task from "../Task";
import uid from "../../utils/uid";

const TaskList: FC = () => {
  const { activeTaskGroupIndex } = useAppContext();
  const { taskGroups, onTaskCreate } = useTaskContext();
  const [tasks, setTasks] = useState(
    taskGroups && taskGroups.length !== 0 && taskGroups[activeTaskGroupIndex]
      ? taskGroups[activeTaskGroupIndex].tasks
      : []
  );
  const [newTask, setNewTask] = useState<TaskType>({
    id: uid(),
    name: "",
    complected: false,
  });

  useEffect(() => {
    if (
      taskGroups &&
      taskGroups.length !== 0 &&
      taskGroups[activeTaskGroupIndex]
    )
      setTasks(taskGroups[activeTaskGroupIndex].tasks);
  }, [activeTaskGroupIndex, taskGroups]);

  return (
    <div>
      <h1 className="mb-5 pb-1 text-center text-3xl font-medium border-b border-slate-100">
        Tasks
      </h1>
      <ul className="px-1">
        {tasks.map((task, i) => (
          <li className="mb-5" key={task.id}>
            <Task taskIndex={i} />
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTaskCreate(activeTaskGroupIndex, newTask);
          setNewTask({ id: uid(), name: "", complected: false });
        }}
        className="px-1 flex justify-between items-end gap-5"
      >
        <input
          value={newTask.name}
          onChange={(e) =>
            setNewTask((task) => ({ ...task, name: e.target.value }))
          }
          className="w-full p-2.5 border-b border-slate-300 focus:outline-none hover:border-b-2"
          type="text"
          placeholder="What needs to be done?"
        />
        <button className="p-3 border border-slate-300 rounded hover:border-2">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default TaskList;
