import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";

import Task from "../Task";

import useTaskContext from "../../hooks/useTaskContext";
import useAppContext from "../../hooks/useAppContext";

const TaskList: FC = () => {
  const { activeTaskGroupId } = useAppContext();
  const taskContext = useTaskContext();

  const [tasks, setTasks] = useState(
    taskContext.taskGroups[activeTaskGroupId].tasks
  );

  return (
    <ul>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
      <li>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="what needs to be done?" />
          <button>
            <FaPlus />
          </button>
        </form>
      </li>
    </ul>
  );
};

export default TaskList;
