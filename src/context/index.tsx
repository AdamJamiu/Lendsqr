import { createContext } from "react";

export interface AppContextProps {
  id: number;
  setId: (id: number) => void;
  active: boolean;
  setActive: (active: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  paramId: string;
  setParamId: (id: string) => void;
}

const AppContext = createContext<AppContextProps>({
  id: 0,
  setId: () => {},
  active: false,
  setActive: () => {},
  loading: false,
  setLoading: () => {},
  paramId: "",
  setParamId: () => {},
});

export default AppContext;
