import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";

import useTaskContext from "../../hooks/useTaskContext";
import useAppContext from "../../hooks/useAppContext";

const TaskGroups: FC = () => {
  const { activeTaskGroupId } = useAppContext();
  const taskContext = useTaskContext();
  const [taskGroup, setTaskGroup] = useState(
    taskContext.taskGroups[activeTaskGroupId]
  );

  return (
    <div>
      <h1>{taskGroup.name}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="add a task group" />
        <button>
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default TaskGroups;
