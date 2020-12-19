import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [browserOpen, setBrowserOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        browserOpen,
        setBrowserOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
