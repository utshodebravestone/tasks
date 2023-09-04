import TaskType from "../Task/types";

export default interface TaskGroupType {
  id: number;
  name: string;
  tasks: TaskType[];
}
