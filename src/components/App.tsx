import { FC } from "react";

import { TaskContextProvider } from "../contexts/Task";
import { AppContextProvider } from "../contexts";

import TaskGroups from "./TaskGroups";
import TaskList from "./TaskList";

const App: FC = () => (
  <AppContextProvider>
    <TaskContextProvider>
      <h1>Manage your tasks effectively with Tasks</h1>
      <div>
        <TaskGroups />
      </div>
      <div>
        <TaskList />
      </div>
    </TaskContextProvider>
  </AppContextProvider>
);

export default App;
