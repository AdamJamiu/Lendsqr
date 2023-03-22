import React from "react";
import AppContext, { AppContextProps } from "./index";

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const [id, setId] = React.useState<number>(0);
  const [active, setActive] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const contextValue: AppContextProps = {
    id,
    setId,
    active,
    setActive,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
