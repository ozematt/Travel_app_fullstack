import React, { createContext, useContext, useState } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContext = {
  users: string[] | null;
  setUsers: React.Dispatch<React.SetStateAction<string[] | null>>;
};

const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [users, setUsers] = useState<string[] | null>(null);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContext.Provider"
    );
  }
  return context;
};
