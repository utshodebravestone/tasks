import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";

import useTaskContext from "../../hooks/useTaskContext";
import useAppContext from "../../hooks/useAppContext";

const TaskGroups: FC = () => {
  const { activeTaskGroupIndex, setActiveTaskGroupIndex } = useAppContext();
  const taskContext = useTaskContext();
  const [taskGroups, setTaskGroups] = useState(taskContext.taskGroups);

  return (
    <div className="">
      <h1 className="mb-5 pb-1 text-center text-3xl font-medium border-b border-slate-100">
        Task Groups
      </h1>
      <ul className="px-1">
        {taskGroups.map((taskGroup) => (
          <li
            onClick={() => {
              setActiveTaskGroupIndex(taskGroups.indexOf(taskGroup));
            }}
            className={`${
              taskGroup.id === taskGroups[activeTaskGroupIndex].id
                ? "font-medium"
                : "font-light"
            } mb-5 text-xl cursor-pointer hover:font-medium transition-all duration-300 ease-in-out`}
            key={taskGroup.id}
          >
            <p># {taskGroup.name.toUpperCase()}</p>
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
          placeholder="Add a new task group"
        />
        <button className="p-3 border border-slate-300 rounded hover:border-2">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default TaskGroups;
