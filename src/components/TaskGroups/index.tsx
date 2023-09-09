import { FC, useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

import useTaskContext from "../../hooks/useTaskContext";
import useAppContext from "../../hooks/useAppContext";
import TaskGroupType from "./types";
import uid from "../../utils/uid";

const TaskGroups: FC = () => {
  const { activeTaskGroupIndex, setActiveTaskGroupIndex } = useAppContext();
  const {
    taskGroups: initialTaskGroups,
    onTaskGroupCreate,
    onTaskGroupDelete,
  } = useTaskContext();
  const [taskGroups, setTaskGroups] = useState(initialTaskGroups);
  const [newTaskGroup, setNewTaskGroup] = useState<TaskGroupType>({
    id: uid(),
    name: "",
    tasks: [],
  });

  useEffect(() => {
    setTaskGroups(initialTaskGroups);
  }, [initialTaskGroups]);

  if (taskGroups.length === 0)
    return (
      <p className="mb-5 pb-1 text-center text-3xl font-medium border-b border-slate-100">
        Task Group doesn't exist. <br /> You can create one in the form bellow.
      </p>
    );

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
            className={` flex justify-between items-center ${
              taskGroup.id === taskGroups[activeTaskGroupIndex].id
                ? "font-medium"
                : "font-light"
            } mb-5 text-xl cursor-pointer hover:font-medium transition-all duration-300 ease-in-out`}
            key={taskGroup.id}
          >
            <p># {taskGroup.name.toUpperCase()}</p>
            <button onClick={() => onTaskGroupDelete(activeTaskGroupIndex)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTaskGroupCreate(newTaskGroup);
          setNewTaskGroup({
            id: uid(),
            name: "",
            tasks: [],
          });
        }}
        className="px-1 flex justify-between items-end gap-5"
      >
        <input
          className="w-full p-2.5 border-b border-slate-300 focus:outline-none hover:border-b-2"
          type="text"
          name="name"
          required
          maxLength={16}
          value={newTaskGroup.name}
          onChange={(e) =>
            setNewTaskGroup((newTaskGroup) => ({
              ...newTaskGroup,
              name: e.target.value,
            }))
          }
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
