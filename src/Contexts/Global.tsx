import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IUser {
  name: string;
  email: string;
}

interface IContextAPI {
  loadingText: string;
  setLoadingText: Dispatch<SetStateAction<string>>;
  showFollowers: boolean;
  setShowFollowers: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

interface IContextProvider {
  children: ReactNode;
}

export const ContextAPI = createContext({} as IContextAPI);

// Provider para manipualão do login e cookies
const ContextProvider = ({ children }: IContextProvider) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("");
  const [showFollowers, setShowFollowers] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({ name: "", email: "" });
  return (
    <ContextAPI.Provider
      value={{
        loadingText,
        setLoadingText,
        showFollowers,
        setShowFollowers,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextProvider;
