import TaskType from "../../components/Task/types";
import TaskGroupType from "../../components/TaskGroups/types";

export default interface ContextType {
  taskGroups: TaskGroupType[];

  onTaskGroupCreate: (taskGroup: TaskGroupType) => void;
  onTaskGroupUpdate: (taskGroupId: number, taskGroup: TaskGroupType) => void;
  onTaskGroupDelete: (taskGroupId: number) => void;

  onTaskCreate: (taskGroupId: number, task: TaskType) => void;
  onTaskUpdate: (taskGroupId: number, taskId: number, task: TaskType) => void;
  onTaskDelete: (taskGroupId: number, taskId: number) => void;
}
