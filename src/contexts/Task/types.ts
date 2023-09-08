import TaskType from "../../components/Task/types";
import TaskGroupType from "../../components/TaskGroups/types";

export default interface ContextType {
  taskGroups: TaskGroupType[];

  onTaskGroupCreate: (taskGroup: TaskGroupType) => void;
  onTaskGroupUpdate: (taskGroupIndex: number, taskGroup: TaskGroupType) => void;
  onTaskGroupDelete: (taskGroupIndex: number) => void;

  onTaskCreate: (taskGroupIndex: number, task: TaskType) => void;
  onTaskUpdate: (
    taskGroupIndex: number,
    taskId: number,
    task: TaskType
  ) => void;
  onTaskDelete: (taskGroupIndex: number, taskId: number) => void;
}
