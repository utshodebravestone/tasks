import { FC, ReactElement, createContext, useEffect, useState } from "react";

import TaskContextType from "./types";
import TaskGroupType from "../../components/TaskGroups/types";
import TaskType from "../../components/Task/types";

import useLocalStorage from "../../hooks/useLocalStorage";
import uid from "../../utils/uid";

export const TaskContext = createContext<TaskContextType>({
  taskGroups: [],

  onTaskGroupCreate: (taskGroup: TaskGroupType) => {
    console.log(taskGroup);
  },

  onTaskGroupUpdate: (taskGroupIndex: number, taskGroup: TaskGroupType) => {
    console.log(taskGroupIndex, taskGroup);
  },

  onTaskGroupDelete: (taskGroupIndex: number) => {
    console.log(taskGroupIndex);
  },

  onTaskCreate: (taskGroupIndex: number, task: TaskType) => {
    console.log(taskGroupIndex, task);
  },
  onTaskUpdate: (taskGroupIndex: number, taskId: number, task: TaskType) => {
    console.log(taskGroupIndex, taskId, task);
  },
  onTaskDelete: (taskGroupIndex: number, taskId: number) => {
    console.log(taskGroupIndex, taskId);
  },
});

export const TaskContextProvider: FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  const { value, setValue } = useLocalStorage<TaskGroupType[]>("tasks");
  const [taskGroups, setTaskGroups] = useState<TaskGroupType[]>(value);

  const onTaskGroupCreate = (taskGroup: TaskGroupType) =>
    setTaskGroups((taskGroups) => [...taskGroups, taskGroup]);

  const onTaskGroupUpdate = (
    taskGroupIndex: number,
    taskGroup: TaskGroupType
  ) =>
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup, i) =>
        i === taskGroupIndex ? taskGroup : storedTaskGroup
      )
    );

  const onTaskGroupDelete = (taskGroupIndex: number) =>
    setTaskGroups((taskGroups) =>
      taskGroups.filter((_, i) => i !== taskGroupIndex)
    );

  const onTaskCreate = (taskGroupIndex: number, task: TaskType) =>
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup, i) =>
        i === taskGroupIndex
          ? { ...storedTaskGroup, tasks: [...storedTaskGroup.tasks, task] }
          : storedTaskGroup
      )
    );

  const onTaskUpdate = (
    taskGroupIndex: number,
    taskId: number,
    task: TaskType
  ) => {
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup, i) =>
        i === taskGroupIndex
          ? {
              ...storedTaskGroup,
              tasks: storedTaskGroup.tasks.map((storedTask) =>
                taskId === storedTask.id ? task : storedTask
              ),
            }
          : storedTaskGroup
      )
    );
  };

  const onTaskDelete = (taskGroupIndex: number, taskId: number) =>
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup, i) =>
        i === taskGroupIndex
          ? {
              ...storedTaskGroup,
              tasks: storedTaskGroup.tasks.filter((task) => task.id !== taskId),
            }
          : storedTaskGroup
      )
    );

  useEffect(() => {
    setValue(taskGroups || [{ id: uid(), name: "default", tasks: [] }]);
  }, [taskGroups]);

  return (
    <TaskContext.Provider
      value={{
        taskGroups,

        onTaskGroupCreate,
        onTaskGroupUpdate,
        onTaskGroupDelete,

        onTaskCreate,
        onTaskUpdate,
        onTaskDelete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
