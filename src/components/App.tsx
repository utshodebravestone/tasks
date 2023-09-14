import { FC } from "react";

import { TaskContextProvider } from "../contexts/Task";
import { AppContextProvider } from "../contexts";

import TaskGroups from "./TaskGroups";
import TaskList from "./TaskList";

const App: FC = () => (
  <AppContextProvider>
    <TaskContextProvider>
      <div className="h-screen w-screen py-10 px-40 grid grid-cols-5 grid-rows-6 gap-20 text-slate-700">
        <h1 className="col-span-5 row-span-1 flex justify-center items-center text-5xl font-bold border-b border-slate-100">
          Manage Your Tasks Effectively
        </h1>
        <div className="col-span-2 row-span-5">
          <TaskGroups />
        </div>
        <div className="col-span-3 row-span-5">
          <TaskList />
        </div>
      </div>
    </TaskContextProvider>
  </AppContextProvider>
);

export default App;
