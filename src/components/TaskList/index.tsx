import { FC, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import useTaskContext from "../../hooks/useTaskContext";
import useAppContext from "../../hooks/useAppContext";

import Task from "../Task";

const TaskList: FC = () => {
  const { activeTaskGroupId } = useAppContext();
  const taskContext = useTaskContext();

  const [tasks, setTasks] = useState(
    taskContext.taskGroups[activeTaskGroupId].tasks
  );

  useEffect(() => {
    setTasks(taskContext.taskGroups[activeTaskGroupId].tasks);
  }, [activeTaskGroupId]);

  return (
    <div>
      <h1 className="mb-5 pb-1 text-center text-3xl font-medium border-b border-slate-100">
        Tasks
      </h1>
      <ul className="px-1">
        {tasks.map((task) => (
          <li className="mb-5" key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="px-1 flex justify-between items-end gap-5"
      >
        <input
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
