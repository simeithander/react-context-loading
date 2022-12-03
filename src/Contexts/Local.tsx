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

interface ILocalContextAPI {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}

interface ILocalContextProvider {
  children: ReactNode;
}

export const LocalContextAPI = createContext({} as ILocalContextAPI);

// Provider para manipualão do login e cookies
const LocalContextProvider = ({ children }: ILocalContextProvider) => {
  const [users, setUsers] = useState<IUser[]>([]);
  return (
    <LocalContextAPI.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </LocalContextAPI.Provider>
  );
};

export default LocalContextProvider;
