import { FC, ReactElement, createContext, useEffect, useState } from "react";

import TaskContextType from "./types";
import TaskGroupType from "../../components/TaskGroups/types";
import TaskType from "../../components/Task/types";

import uid from "../../utils/uid";

export const TaskContext = createContext<TaskContextType>({
  taskGroups: [],

  onTaskGroupCreate: (taskGroup: TaskGroupType) => {
    console.log(taskGroup);
  },

  onTaskGroupUpdate: (taskGroupId: number, taskGroup: TaskGroupType) => {
    console.log(taskGroupId, taskGroup);
  },

  onTaskGroupDelete: (taskGroupId: number) => {
    console.log(taskGroupId);
  },

  onTaskCreate: (taskGroupId: number, task: TaskType) => {
    console.log(taskGroupId, task);
  },
  onTaskUpdate: (taskGroupId: number, taskId: number, task: TaskType) => {
    console.log(taskGroupId, taskId, task);
  },
  onTaskDelete: (taskGroupId: number, taskId: number) => {
    console.log(taskGroupId, taskId);
  },
});

export const TaskContextProvider: FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  const _taskGroups: TaskGroupType[] = [
    {
      id: uid(),
      name: "programming",
      tasks: [
        {
          id: uid(),
          name: "Finish Practical Go Lessons",
          complected: false,
        },
        {
          id: uid(),
          name: "Build some stuffs with Go",
          complected: false,
        },
      ],
    },
    {
      id: uid(),
      name: "house work",
      tasks: [
        {
          id: uid(),
          name: "Make breakfast",
          complected: false,
        },
        {
          id: uid(),
          name: "Set all the animals free",
          complected: false,
        },
      ],
    },
  ];
  const [taskGroups, setTaskGroups] = useState<TaskGroupType[]>(_taskGroups);

  const onTaskGroupCreate = (taskGroup: TaskGroupType) =>
    setTaskGroups((taskGroups) => [...taskGroups, taskGroup]);

  const onTaskGroupUpdate = (taskGroupId: number, taskGroup: TaskGroupType) =>
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup) =>
        storedTaskGroup.id === taskGroupId ? taskGroup : storedTaskGroup
      )
    );

  const onTaskGroupDelete = (taskGroupId: number) =>
    setTaskGroups((taskGroups) =>
      taskGroups.filter((taskGroup) => taskGroup.id !== taskGroupId)
    );

  const onTaskCreate = (taskGroupId: number, task: TaskType) =>
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup) =>
        storedTaskGroup.id === taskGroupId
          ? { ...storedTaskGroup, tasks: [...storedTaskGroup.tasks, task] }
          : storedTaskGroup
      )
    );

  const onTaskUpdate = (
    taskGroupId: number,
    taskId: number,
    task: TaskType
  ) => {
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup, id) =>
        id === taskGroupId
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

  const onTaskDelete = (taskGroupId: number, taskId: number) =>
    setTaskGroups((taskGroups) =>
      taskGroups.map((storedTaskGroup) =>
        storedTaskGroup.id === taskGroupId
          ? {
              ...storedTaskGroup,
              tasks: storedTaskGroup.tasks.filter((task) => task.id !== taskId),
            }
          : storedTaskGroup
      )
    );

  useEffect(() => {
    console.log("Re-Rendering TaskContext");
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
