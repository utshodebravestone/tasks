import { FC, ReactElement, createContext, useState } from "react";

import AppContextType from "./types";

export const AppContext = createContext<AppContextType>({
  activeTaskGroupId: 0,
  setActiveTaskGroupId(id) {
    console.log(id);
  },
});

export const AppContextProvider: FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  const [activeTaskGroupId, setActiveTaskGroupId] = useState(0);

  return (
    <AppContext.Provider
      value={{
        activeTaskGroupId,
        setActiveTaskGroupId: (taskGroupId) =>
          setActiveTaskGroupId(taskGroupId),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
