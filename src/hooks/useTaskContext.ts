import { useContext } from "react";
import { TaskContext } from "../contexts/Task";

const useTaskContext = () => useContext(TaskContext);

export default useTaskContext;
