import { FC, ReactElement, createContext, useState } from "react";

import AppContextType from "./types";

export const AppContext = createContext<AppContextType>({
  activeTaskGroupIndex: 0,
  setActiveTaskGroupIndex(index) {
    console.log(index);
  },
});

export const AppContextProvider: FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  const [activeTaskGroupIndex, setActiveTaskGroupIndex] = useState(0);

  return (
    <AppContext.Provider
      value={{
        activeTaskGroupIndex,
        setActiveTaskGroupIndex: (taskGroupIndex) =>
          setActiveTaskGroupIndex(taskGroupIndex),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
