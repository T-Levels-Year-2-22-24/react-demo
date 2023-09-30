import { createContext, ReactNode } from "react";
import useUserData from "../hooks/useUserData";
import UserData from "../interfaces/UserData";

interface UserDataContextType {
  userData: UserData;
  setUserData: (userData: UserData | {}) => void;
}

export const UserDataContext = createContext<UserDataContextType | null>(null);

function UserDataProvider({ children }: { children: ReactNode }) {
  const { userData, setUserData } = useUserData();

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataProvider;
