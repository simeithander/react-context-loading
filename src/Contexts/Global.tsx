import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

// Interface com os dados do usuário
export interface IUser {
  name: string;
  email: string;
}

// Interface que o ContextAPI vai oferecer (variáveis ou funções)
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

// Interface do componente principal
interface IContextProvider {
  children: ReactNode;
}

export const ContextAPI = createContext({} as IContextAPI);

// Provider para manipualão do login e cookies
const ContextProvider = ({ children }: IContextProvider) => {
  // Hooks locais do Provider
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("");
  const [showFollowers, setShowFollowers] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({ name: "", email: "" });

  // Componente Provider
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
