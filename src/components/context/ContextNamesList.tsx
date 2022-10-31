import { createContext } from "react";
import { namesArr } from "./namesArr";

export const ContextNamesList = createContext(namesArr);

type ContextNamesListProps = {
  children: React.ReactNode;
};

export const ContextNamesListProvider = ({
  children,
}: ContextNamesListProps) => {
  return (
    <ContextNamesList.Provider value={namesArr}>
      {children}
    </ContextNamesList.Provider>
  );
};
